import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "@liebherr2/plnext/components/button/pl-button.js";

const meta: Meta = {
  title: "Komponenten/Button",
  component: "pl-button",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "error"],
    },
  },
};

export default meta;

type Story = StoryObj;

// Hint: the closing tag for custom elements should be explicitly defined.

const DefaultExample = (args) => {
  const handleClick = (event) => {
    console.log("[pl-button] click event:", event);
  };

  return html`<pl-button
    ?disabled=${args.disabled}
    label=${args.label}
    type=${args.type}
    variant=${args.variant}
    @pl-button-click=${handleClick}
  ></pl-button>`;
};

export const DefaultStory: Story = {
  render: DefaultExample,
  name: "Primary (default)",
  args: {
    disabled: false,
    label: "Label",
    type: "button",
    variant: "primary",
  },
};

export const DisabledStory: Story = {
  render: DefaultExample,
  name: "Disabled",
  args: {
    ...DefaultStory.args,
    disabled: true,
    label: "Disabled",
  },
};

export const SecondaryStory: Story = {
  render: DefaultExample,
  name: "Secondary",
  args: {
    ...DefaultStory.args,
    variant: "secondary",
  },
};

export const ErrorStory: Story = {
  render: DefaultExample,
  name: "Error",
  args: {
    ...DefaultStory.args,
    variant: "error",
  },
};

export const RtlStory: Story = {
  render: DefaultExample,
  name: "Right-to-Left (RTL)",
  args: {
    ...DefaultStory.args,
    label: "هذا هو عنوان الزر", // Arabisch für "Dies ist der Titel des Buttons"
  },
  decorators: [
    // Decorator wraps the story in a div with a RTL context
    (Story) => html`<div dir="rtl">${Story()}</div>`,
  ],
};
