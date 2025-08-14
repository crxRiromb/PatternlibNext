import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@liebherr2/plnext/components/button/pl-button.js";

const meta: Meta = {
  title: "Komponenten/Button",
  component: "pl-button",
  tags: ["autodocs"],
  // argTypes werden stark vereinfacht. Storybook liest die meisten Infos
  // aus deiner custom-elements.json und leitet die Controls ab.
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "error"],
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit"],
    },
    // Events werden jetzt über "actions" gehandhabt
    onClick: { action: "pl-button-click" },
  },
};

export default meta;

type Story = StoryObj;

// Für einfache Komponenten braucht man keine extra "render"-Funktion mehr.
// Storybook rendert die Komponente automatisch mit den "args".

export const Primary: Story = {
  name: "Primary (default)",
  args: {
    label: "Primary Button",
    variant: "primary",
    disabled: false,
    type: "button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    label: "Disabled Button",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Primary.args,
    label: "Error Button",
    variant: "error",
  },
};

export const Rtl: Story = {
  name: "Right-to-Left (RTL)",
  args: {
    ...Primary.args,
    label: "هذا هو عنوان الزر",
  },
  decorators: [(Story) => html`<div dir="rtl">${Story()}</div>`],
};
