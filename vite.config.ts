import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    outDir: 'lib',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'parvan-designsystem',
      fileName: (format) => `index.${format}${format === 'es' ? '.js' : ''}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'clsx'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'clsx': 'clsx'
        },
        exports: 'named',
      },
    },
  },
});