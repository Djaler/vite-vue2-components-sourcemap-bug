import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import VitePluginComponents from 'vite-plugin-components';

export default defineConfig({
    plugins: [
        createVuePlugin(),
        VitePluginComponents(),
    ],
    build: {
        sourcemap: true,
    },
});
