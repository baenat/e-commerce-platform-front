import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ status, path}) => {
        
        if (status === 404 || status === 405) {
          return;
        }

        throw new Error(`${status} ${path}`);
      },
      handleMissingId: 'ignore'
    }
  },

  preprocess: vitePreprocess(),

};
export default config;