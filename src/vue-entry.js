import { createSSRApp } from 'vue';
import { createPinia, setActivePinia } from 'pinia';

export default function createVueApp() {
  const app = createSSRApp({});
  const pinia = createPinia();
  app.use(pinia);
  setActivePinia(pinia); // Importante para SSR

  return { app, pinia };
} 