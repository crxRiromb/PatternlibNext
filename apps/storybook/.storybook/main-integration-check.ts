import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
};
export default config;
