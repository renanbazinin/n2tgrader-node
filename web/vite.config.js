
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
      '@nand2tetris/simulator': path.resolve(__dirname, '../simulator/build'),
    }
  },
  optimizeDeps: {
    include: ['@davidsouther/jiffies', 'jszip', 'ohm-js', 'rxjs']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Ensure commonjs modules are handled
    }
  }
});
