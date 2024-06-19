/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />


interface ImportMetaEnv {
  readonly VITE_SECRET_API_KEY: string
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}