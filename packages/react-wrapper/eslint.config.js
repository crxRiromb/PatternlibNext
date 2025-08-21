import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ignores: ['dist', '.vite-cache'],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // React Konfiguration
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: pluginReact,
    },
    ...pluginReact.configs.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // React Hooks Konfiguration
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // React Refresh (nur für Vite im Entwicklungsmodus)
  {
    plugins: {
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
