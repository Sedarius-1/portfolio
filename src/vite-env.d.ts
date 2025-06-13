/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: (pattern: string, options?: { eager?: boolean; import?: string }) => Record<string, unknown>;
}

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // add other env vars as needed
}
