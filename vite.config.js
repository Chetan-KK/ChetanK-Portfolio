import { defineConfig } from 'vite';

export default defineConfig({
    // base: '/ChetanK-Portfolio/',
    server: {
        origin: 'http://localhost:3000',
        host: '0.0.0.0',
        fs: {
            strict: true,
        }
    }
});