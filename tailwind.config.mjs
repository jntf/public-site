/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {
      screens: {
        'xs': '475px',
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500', 
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}