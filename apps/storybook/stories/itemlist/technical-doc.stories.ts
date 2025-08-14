import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import type { PlItemlist } from "../../../../packages/lit/src/components/itemlist/pl-itemlist.ts";
import "../../../../packages/lit/src/components/itemlist/pl-itemlist.ts";

const meta: Meta = {
  title: "Komponenten/Itemlist",
  component: "pl-itemlist",
  tags: ["autodocs"],
  argTypes: {
    headlineLabel: {
      control: "text",
      description: "The headline for the list",
    },
    data: {
      control: "object",
      description:
        "Array of items to display in the format [{key: string, value: string}, ...]",
    },
  },
};

export default meta;

type Story = StoryObj;

const exampleData = [
  { key: "1", value: "Erster Listeneintrag" },
  { key: "2", value: "Zweiter Listeneintrag" },
  { key: "3", value: "Dritter Listeneintrag" },
];

/**
 * The item list shown in its empty state with no data.
 */
export const DefaultStory: Story = {
  args: {
    headlineLabel: "Leere Liste",
    data: [], // Data array is empty
  },
  render: (args) => html`
    <pl-itemlist
      headline-label=${args.headlineLabel}
      .data=${args.data}
    ></pl-itemlist>
  `,
};

/**
 * The default view of the item list with a headline and data.
 */
export const ContentStory: Story = {
  args: {
    headlineLabel: "Meine Liste",
    data: exampleData,
  },
  render: (args) => html`
    <pl-itemlist
      headline-label=${args.headlineLabel}
      .data=${args.data}
    ></pl-itemlist>
  `,
};

/**
 * This story demonstrates how to set properties in two ways:
 * 1. 'headlineLabel' is set as a normal HTML attribute in the template.
 * 2. 'data' is assigned via a reference using JavaScript after rendering.
 */
export const PropertyDataStory: Story = {
  render: () => {
    const itemlistRef = createRef<PlItemlist>();

    // wait till current render cycle is finished
    setTimeout(() => {
      if (itemlistRef.value) {
        itemlistRef.value.data = exampleData;
      }
    });

    return html`
      <pl-itemlist
        headline-label="Titel wird per HTML-Attribut gesetzt, die Daten per JS"
        ${ref(itemlistRef)}
      ></pl-itemlist>
    `;
  },
};
