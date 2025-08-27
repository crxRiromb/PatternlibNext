import "@liebherr2/plnext/components/icon/pl-icon.js";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Komponenten/Icon",
  component: "pl-icon",
  tags: ["autodocs"],
  argTypes: {
    decorative: {
      control: "boolean",
    },
    iconName: {
      control: "text",
    },
    interactive: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj;

// Hint:
// The closing tag for custom elements should be explicit defined.

const DefaultExample = (args) => {
  const handleClick = (event) => {
    console.log("[pl-icon] click event:", event.detail);
  };

  return html`<pl-icon
    ?decorative=${args.decorative}
    iconName=${args.iconName}
    ?interactive=${args.interactive}
    label=${args.label}
    @pl-icon-click=${handleClick}
  ></pl-icon>`;
};

const SizeExample = (args) => {
  const handleClick = (event) => {
    console.log("[pl-icon] click event:", event.detail);
  };

  return html`
    <pl-icon
      ?decorative=${args.decorative}
      iconName=${args.iconName}
      ?interactive=${args.interactive}
      label=${args.label}
      style="height: 48px; width: 48px;"
      @pl-icon-click=${handleClick}
    ></pl-icon>
  `;
};

const ColorExample = (args) => {
  const handleClick = (event) => {
    console.log("[pl-icon] click event:", event.detail);
  };

  return html`
    <pl-icon
      ?decorative=${args.decorative}
      iconName=${args.iconName}
      ?interactive=${args.interactive}
      label=${args.label}
      style="color: red;"
      @pl-icon-click=${handleClick}
    ></pl-icon>
  `;
};

export const DefaultStory: Story = {
  render: DefaultExample,
  args: {
    alt: "Global Icon",
    iconName: "globe",
    decorative: false,
    interactive: false,
    label: "Globe Icon",
  },
};

export const SizeStory: Story = {
  render: SizeExample,
  args: {
    ...DefaultStory.args,
  },
};

export const ColorStory: Story = {
  render: ColorExample,
  args: {
    ...DefaultStory.args,
  },
};
