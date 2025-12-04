
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/n2tgrader-node/',
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@nand2tetris/projects': path.resolve(__dirname, '../projects/build'),
      '@nand2tetris/runner': path.resolve(__dirname, '../runner/build'),
      '@nand2tetris/simulator': path.resolve(__dirname, '../simulator/build'),
      '@davidsouther/jiffies/lib/esm': path.resolve(__dirname, '../node_modules/@davidsouther/jiffies/lib/esm'),
      '@davidsouther/jiffies': path.resolve(__dirname, '../node_modules/@davidsouther/jiffies/lib/esm/index.js'),
    }
  },
  optimizeDeps: {
    include: ['jszip', 'ohm-js', 'rxjs']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Ensure commonjs modules are handled
    }
  }
});
