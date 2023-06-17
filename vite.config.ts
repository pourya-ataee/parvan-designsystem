import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      name: 'parvan-designsystem',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'clsx'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'clsx': 'clsx'
        },
        exports: 'named',
      },
    },
  },
});