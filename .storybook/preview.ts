import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { html } from 'lit';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

// Decorator-Function
const withGlobals = (Story, context) => {
  const { direction, theme, mode } = context.globals;
  return html` <div dir=${direction} data-theme=${theme} data-mode=${mode}>${Story()}</div> `;
};

// Global Typ for the Toolbar-Buttons
const preview: Preview = {
  globalTypes: {
    // Theme switch
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'corporate',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'corporate', title: 'Corporate' },
          { value: 'hau', title: 'HAU' },
        ],
        showName: true,
      },
    },

    // Mode switch
    mode: {
      name: 'Mode',
      description: 'Color mode for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },

    // Direction switch
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
  decorators: [withGlobals],

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
