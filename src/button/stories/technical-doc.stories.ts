import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../pl-button.ts';

const meta: Meta = {
  title: 'Komponenten/Button',
  component: 'pl-button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed on the button',
      defaultValue: 'Button',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Type of the button',
      defaultValue: 'button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj;

export const PrimaryStory: Story = {
  render: args => html` <pl-button label=${args.label} ?disabled=${args.disabled} type=${args.type} /> `,
  args: {
    disabled: false,
    label: 'Klick mich',
    type: 'button',
  },
};

export const DisabledStory: Story = {
  render: args => html` <pl-button label=${args.label} ?disabled=${args.disabled} type=${args.type} /> `,
  args: {
    disabled: true,
    label: 'Nicht klickbar',
    type: 'button',
  },
};

export const SlottedLabelStory: Story = {
  render: args => html`
    <pl-button type=${args.type} ?disabled=${args.disabled}>
      <strong>Slot-Inhalt</strong>
    </pl-button>
  `,
  args: {
    disabled: false,
    type: 'button',
  },
};
