/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            keyframes: {
                snakeBorder: {
                    '0%': {
                        'transform': 'rotate(0deg)',
                    },
                    '33%': {
                        'transform': 'rotate(120deg)',
                    },
                    '66%': {
                        'transform': 'rotate(210deg)',
                    },
                    '100%': {
                        'transform': 'rotate(360deg)',
                    },
                },
            },
            animation: {
                snakeBorder: 'snakeBorder 1.5s infinite linear',
            },
            filter: {
                'blur-sm': 'blur(5px)',
            },
        },
    },
    plugins: [
        require('tailwindcss-motion'),
        require('tailwindcss-intersect'),
    ],
}
