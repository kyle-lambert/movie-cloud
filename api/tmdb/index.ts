import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createProxyMiddleware } from "http-proxy-middleware";

const tmdbProxy = createProxyMiddleware({
  target: "https://api.themoviedb.org",
  changeOrigin: true,
  pathRewrite: {
    "^/api/tmdb": "",
  },
  on: {
    proxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader(
        "Authorization",
        `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
      );
    },
    proxyRes: (proxyRes, req, res) => {
      proxyRes.headers["access-control-allow-origin"] = "*";
    },
    error: (err, req, res) => {
      console.log("[tmdb-proxy]: An error occured", err);
    },
  },
  logger: console,
});

export default function (request: VercelRequest, response: VercelResponse) {
  return tmdbProxy(request, response);
}
