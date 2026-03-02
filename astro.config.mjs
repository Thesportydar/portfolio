// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap()],

    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false
        },
        fallback: {
            "en": "es"
        }
    },

    experimental: {
        svgo: true,
    },

    site: "https://inaquipaladino.com"
});
