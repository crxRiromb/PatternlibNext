# TypeScript

## TypeScript 'Variable never read' error downgraded to ESLint warning

This issue is downgraded in importance to a warning.

1. Disable in TypeScript: configured with "noUnusedLocals": false
2. Enable in ESLint:      configured with "no-unused-vars": "warn"
   - '@typescript-eslint/no-unused-vars': 'warn', 
   or
   - '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
