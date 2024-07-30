import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: 'out/renderer',
      assets: 'out/renderer'
    }),
    files: {
      assets: 'src/renderer/static',
      hooks: {
        client: 'src/renderer/src/hooks.client',
        server: 'src/renderer/src/hooks.server',
        universal: 'src/renderer/src/hooks'
      },
      lib: 'src/renderer/src/lib',
      routes: 'src/renderer/src/routes',
      serviceWorker: 'src/renderer/src/service-worker',
      appTemplate: 'src/renderer/src/app.html',
      errorTemplate: 'src/renderer/src/error.html'
    }
  }
};

export default config;
