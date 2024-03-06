const tailwindAspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './slices/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.ts'],
  darkMode: false,
  theme: {
    screens: {
      mobile: '380px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      'revolve-red': '#D92525',
      black: '#1E1E1E',
      putty: '#F1F7FA',
      drywall: '#C8C4BC',
      plywood: '#F0E794',
      pollen: '#B9B6DB',
      dust: '#C4A55C',
      led: '#EBE722',
      'astro-turf': '#66AB56',
    },
    fontFamily: {
      'zaft2-c': 'Zaft2 C, slab-serif',
      'zaft2-b': 'Zaft2 B, slab-serif',
      'zaft2-a': 'Zaft2 A, slab-serif',
      'eh-normal-light': 'EH Normal Light, sans-serif',
      'eh-normal-regular': 'EH Normal Regular, sans-serif',
      'eh-normal-bold': 'EH Normal Bold, sans-serif',
      sans: 'EH Normal Regular, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      slab: 'Zaft2 C, Rockwell, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    }
  },
  plugins: [tailwindAspectRatio]
};