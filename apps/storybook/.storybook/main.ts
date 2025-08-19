import type { StorybookConfig } from "@storybook/web-components-vite";
import path from "node:path";
import fs from "node:fs";

const posix = (p: string) => p.split(path.sep).join("/");

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],

  async viteFinal(cfg) {
    // 1. Define the paths
    const litRoot = path.resolve(__dirname, "../../../packages/lit");
    const storybookRoot = path.resolve(__dirname, "..");

    // 2. Alias
    cfg.resolve ??= {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      "@liebherr2/plnext": posix(path.join(litRoot, "src")),
      "@liebherr2/plnext/custom-elements.json": posix(
        path.join(litRoot, "custom-elements.json"),
      ),
      "@liebherr2/plnext/styles/props.css": posix(
        path.join(litRoot, "src/styles/props.scss"),
      ),
      "@liebherr2/plnext/styles/fonts.css": posix(
        path.join(litRoot, "src/styles/fonts.css"),
      ),
      "@src": posix(path.join(litRoot, "src")),
      "@styles": posix(path.join(litRoot, "src/styles")),
    };

    // 3. Server Access
    cfg.server ??= {};
    cfg.server.fs ??= {};
    cfg.server.fs.allow = [
      ...(cfg.server.fs.allow || []),
      litRoot,
      storybookRoot,
    ];

    // 4. read custom-elements.json -> save to env CEM_RAW
    const cemPath = path.join(litRoot, "custom-elements.json");
    if (fs.existsSync(cemPath)) {
      const cemRaw = fs.readFileSync(cemPath, "utf-8");
      cfg.define = {
        ...(cfg.define || {}),
        "process.env.CEM_RAW": JSON.stringify(cemRaw),
      };
    } else {
      console.warn(`[Storybook] custom-elements.json not found at: ${cemPath}`);
      cfg.define = {
        ...(cfg.define || {}),
        "process.env.CEM_RAW": '""',
      };
    }

    return cfg;
  },
};

export default config;
