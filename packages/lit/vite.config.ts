import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    /* Library mode configuration */
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    sourcemap: true,
    emptyOutDir: true,

    /* Rollup options */
    rollupOptions: {
      /* Lit as shared runtime */
      external: [/^lit/],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
