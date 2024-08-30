import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT as unknown as number,
  },
  define: {
    VITE_BASE_URL: process.env.VITE_BASE_URL,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
