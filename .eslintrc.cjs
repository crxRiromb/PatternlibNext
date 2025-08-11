module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:wc/recommended',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
    'prettier', // should be the last in the extends array
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    '*.cjs',
    'vite.config.ts',
    'web-test-runner.config.mjs',
    'custom-elements-manifest.config.mjs',
  ],
};
