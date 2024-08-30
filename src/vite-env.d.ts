/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TMDB_API_KEY: string;
  readonly TMDB_ACCESS_TOKEN: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
