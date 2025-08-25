import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "@liebherr2/plnext/components/icon/pl-icon.js";

const meta: Meta = {
  title: "Komponenten/Icon",
  component: "pl-icon",
  tags: ["autodocs"],
  argTypes: {
    decorative: {
      control: "boolean",
      description:
        "If true, the icon is marked as decorative for accessibility purposes. Useful when the icon is purely decorative (e.g. next to visible text).",
      defaultValue: false,
    },
    iconName: {
      control: { type: "select" },
      options: ["globe", "search"],
      description: "Name of the icon to display",
      defaultValue: "globe",
    },
    label: {
      control: "text",
      description: "The alternative text for the icon, used for accessibility",
      defaultValue: "",
    },
  },
};

export default meta;

type Story = StoryObj;

// Hint:
// The closing tag for custom elements should be explicit defined.

export const PrimaryStory: Story = {
  render: (args) => html`
    <pl-icon alt=${args.alt} iconName=${args.iconName}></pl-icon>
  `,
  args: {
    alt: "Global Icon",
    iconName: "globe",
  },
};

export const SizeStory: Story = {
  render: (args) => html`
    <pl-icon
      alt=${args.alt}
      iconName=${args.iconName}
      style="height: 48px; width: 48px;"
    ></pl-icon>
  `,
  args: {
    alt: "Global Icon",
    iconName: "globe",
  },
};

export const ColorStory: Story = {
  render: (args) => html`
    <pl-icon
      alt=${args.alt}
      iconName=${args.iconName}
      style="color: red;"
    ></pl-icon>
  `,
  args: {
    alt: "Global Icon",
    iconName: "globe",
  },
};
