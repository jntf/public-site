/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_ACCESS_TOKEN: string;
  readonly CONTENTFUL_ENVIRONMENT: string;
  readonly SITE_URL: string;
  readonly SITE_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
