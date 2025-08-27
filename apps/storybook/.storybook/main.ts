// storybook/.storybook/main.ts
import type { StorybookConfig } from "@storybook/web-components-vite";
import path from "node:path";

const posix = (p: string) => p.split(path.sep).join("/");

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],

  async viteFinal(cfg) {
    // 1) Path-Constants
    //    (to avoid having to constantly write __dirname + ../../../packages/lit/... in the code)
    const litRoot = path.resolve(__dirname, "../../../packages/lit");
    const storybookRoot = path.resolve(__dirname, "..");

    // 2) Aliasse
    cfg.resolve ??= {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      "@liebherr2/plnext/custom-elements.json": posix(
        path.join(litRoot, "custom-elements.json"),
      ),
      "@liebherr2/plnext/styles/props.css": posix(
        path.join(litRoot, "src/styles/props.scss"),
      ),
      "@liebherr2/plnext/styles/fonts.css": posix(
        path.join(litRoot, "src/styles/fonts.css"),
      ),
      "@liebherr2/plnext": posix(path.join(litRoot, "src")),
      "@src": posix(path.join(litRoot, "src")),
      "@styles": posix(path.join(litRoot, "src/styles")),
    };

    // only use one version of lit
    cfg.resolve.dedupe = [
      ...((cfg.resolve.dedupe as string[] | undefined) || []),
      "lit",
      "lit-html",
      "@lit/reactive-element",
    ];

    // Optional
    cfg.resolve.preserveSymlinks = true;

    // 3) Access files outside of the SB root
    cfg.server ??= {};
    cfg.server.fs ??= {};
    cfg.server.fs.allow = [
      ...(cfg.server.fs.allow || []),
      litRoot,
      storybookRoot,
    ];
    cfg.server.watch = {
      ...(cfg.server.watch || {}),
      followSymlinks: true,
      // Fallback for Windows/Network Drive/WSL sporadic dropouts, uncomment if needed:
      // usePolling: true,
      // interval: 150,
    };

    // not pre-bundle, so HMR works on source basis
    cfg.optimizeDeps = {
      ...(cfg.optimizeDeps || {}),
      exclude: [
        ...((cfg.optimizeDeps?.exclude as string[] | undefined) || []),
        "@liebherr2/plnext",
      ],
    };

    return cfg;
  },
};

export default config;
