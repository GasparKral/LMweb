/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
                open: ['Open Sans', 'sans-serif'],
            },
            colors: {
                acent: '#6366f1',
            },
        },
    },
    plugins: [],
};
