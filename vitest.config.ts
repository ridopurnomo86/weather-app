import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, './src/components'),
            tests: path.resolve(__dirname, './tests'),
        },
    },
    define: {
        global: '({})',
    },
});
