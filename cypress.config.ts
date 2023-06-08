import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '9tcqj8',
  e2e: {
    baseUrl: 'http://localhost:4000',
    responseTimeout: 120e3,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
