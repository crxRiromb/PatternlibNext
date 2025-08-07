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

const ThemeExample = args => {
  return html`<pl-button
    data-theme=${args.dataTheme}
    data-mode=${args.dataMode}
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

export const CoDarkStory: Story = {
  render: ThemeExample,
  name: 'Corporate dark',
  args: {
    ...PrimaryStory.args,
    dataTheme: 'corporate',
    dataMode: 'dark',
  },
};

export const CoDisabledDarkStory: Story = {
  render: ThemeExample,
  name: 'Corporate disabled dark',
  args: {
    ...PrimaryStory.args,
    dataTheme: 'corporate',
    dataMode: 'dark',
    disabled: true,
  },
};

export const HauLightDefaultStory: Story = {
  render: ThemeExample,
  name: 'Hau light',
  args: {
    ...PrimaryStory.args,
    dataTheme: 'hau',
    dataMode: 'light',
  },
};

export const HauDarkDefaultStory: Story = {
  render: ThemeExample,
  name: 'Hau dark',
  args: {
    ...PrimaryStory.args,
    dataTheme: 'hau',
    dataMode: 'dark',
  },
};
