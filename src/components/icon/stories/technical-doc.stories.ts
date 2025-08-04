import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../pl-icon.ts';

const meta: Meta = {
  title: 'Komponenten/Icon',
  component: 'pl-icon',
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: ['globe', 'search'],
      description: 'Name of the icon to display',
      defaultValue: 'globe',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the icon',
      defaultValue: 'Global Icon',
    },
  },
};

export default meta;

type Story = StoryObj;

// Hint:
// The closing tag for custom elements should be explicit defined.

export const PrimaryStory: Story = {
  render: args => html`
    <pl-icon alt=${args.alt} iconName=${args.iconName} style="height: 32px; width: 32px;"></pl-icon>
  `,
  args: {
    alt: 'Global Icon',
    iconName: 'globe',
  },
};

export const SizeStory: Story = {
  render: args => html`
    <pl-icon alt=${args.alt} iconName=${args.iconName} style="height: 48px; width: 48px;"></pl-icon>
  `,
  args: {
    alt: 'Global Icon',
    iconName: 'globe',
  },
};
