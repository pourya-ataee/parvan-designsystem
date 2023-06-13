import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    outDir: 'lib',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'parvan-designsystem',
      fileName: 'index',
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