import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import createVuePinia from './src/plugins/pinia';

export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: "./src/vue-entry.js",
      vueConfig: {
        setup(app) {
          const pinia = createVuePinia();
          app.use(pinia);
        },
      },
    }),
    tailwind(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "src/styles/variables.scss";`
        }
      }
    }
  }
});