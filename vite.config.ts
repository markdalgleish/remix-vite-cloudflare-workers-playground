import { defineConfig } from "vite";
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin,
} from "@remix-run/dev";

export default defineConfig((env) => ({
  plugins: [cloudflareDevProxyVitePlugin(), remix()],
  ...(env.isSsrBuild && {
    resolve: {
      conditions: ["workerd", "worker", "browser"],
      mainFields: ["browser", "module", "main"],
    },
    build: {
      minify: true,
    },
  }),
}));
