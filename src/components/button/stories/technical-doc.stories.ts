import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../pl-button.ts';

const meta: Meta = {
  title: 'Komponenten/Button',
  component: 'pl-button',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Text displayed on the button',
      defaultValue: 'Button',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
      description: 'Type of the button',
      defaultValue: 'button',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error'],
      description: 'Visual style variant of the button',
      defaultValue: 'primary',
    },
  },
};

export default meta;

type Story = StoryObj;

// Hint: the closing tag for custom elements should be explicitly defined.

const DefaultExample = args => {
  return html`<pl-button
    ?disabled=${args.disabled}
    label=${args.label}
    type=${args.type}
    variant=${args.variant}
  ></pl-button>`;
};

export const PrimaryStory: Story = {
  render: DefaultExample,
  name: 'Primary (default)',
  args: {
    disabled: false,
    label: 'Label',
    type: 'button',
    variant: 'primary',
  },
};

export const DisabledStory: Story = {
  render: DefaultExample,
  name: 'Disabled',
  args: {
    ...PrimaryStory.args,
    disabled: true,
    label: 'Disabled',
  },
};

export const SecondaryStory: Story = {
  render: DefaultExample,
  name: 'Secondary',
  args: {
    ...PrimaryStory.args,
    variant: 'secondary',
  },
};

export const ErrorStory: Story = {
  render: DefaultExample,
  name: 'Error',
  args: {
    ...PrimaryStory.args,
    variant: 'error',
  },
};

export const RtlStory: Story = {
  render: DefaultExample,
  name: 'Right-to-Left (RTL)',
  args: {
    ...PrimaryStory.args,
    label: 'هذا هو عنوان الزر', // Arabisch für "Dies ist der Titel des Buttons"
  },
  decorators: [
    // Decorator wraps the story in a div with a RTL context
    Story => html`<div dir="rtl">${Story()}</div>`,
  ],
};
