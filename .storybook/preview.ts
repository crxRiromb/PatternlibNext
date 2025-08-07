import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { html } from 'lit';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

// Decorator-Function
const withDirection = (Story, context) => {
  const { direction } = context.globals;
  return html` <div dir=${direction}>${Story()}</div> `;
};

// Global Typ for the Toolbar-Buttons
const preview: Preview = {
  globalTypes: {
    direction: {
      name: 'Direction',
      description: 'Direction for layout',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL' },
        ],
        showName: true,
      },
    },
  },

  // Add Decorator-Function to array
  decorators: [withDirection],

  // Parameters
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
