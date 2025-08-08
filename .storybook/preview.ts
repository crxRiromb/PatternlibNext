import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { html } from 'lit';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

// Decorator-Function
const withGlobals = (Story, context) => {
  const { direction, theme, mode } = context.globals;

  // Liebherr color: steel-975 (#202326)
  const isDark = mode === 'dark';
  const backgroundColor = isDark ? '#202326' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#000000';

  // Style rules in preview-head.html
  // to style the preview container for light and dark mode
  const modeStyleRules = `
    .docs-story {
      background-color: ${backgroundColor};
      color: ${textColor};
    }
  `;
  const styleTag = document.querySelector('#story-theme-style');
  if (styleTag) {
    styleTag.innerHTML = modeStyleRules;
  }

  return html` <div dir=${direction} data-theme=${theme} data-mode=${mode}>${Story()}</div> `;
};

// Global Typ for the Toolbar-Buttons
const preview: Preview = {
  globalTypes: {
    // Theme switch
    theme: {
      name: 'Theme',
      description: 'Switch global theme for components',
      defaultValue: 'corporate',
      toolbar: {
        icon: 'home',
        // icon: 'star',
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
      description: 'Switch color mode for components',
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
      description: 'Switch direction RTL/LTR',
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
    // Disable default backgrounds toolbar buttons (grid, dark-mode)
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
