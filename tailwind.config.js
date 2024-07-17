const tailwindAspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './slices/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.ts'],
  theme: {
    screens: {
      mobile: '380px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      'revolve-red': '#D92525',
      void: '#1E1E1E',
      drywall: '#C8C4BC',
      putty: '#F1F7FA',
      'copy-paper': '#FFFFFF',
      plywood: '#F0E794',
      petal: '#B9B6DB',
      pollen: '#EBD999',
      dust: '#C4A55C',
      LED: '#EBE722',
      'astro-turf': '#66AB56',
    },
    fontFamily: {
      'zaft2-c': 'Zaft2 C, slab-serif',
      'zaft2-b': 'Zaft2 B, slab-serif',
      'zaft2-a': 'Zaft2 A, slab-serif',
      'sans-light': 'eh-normal-light, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'sans-regular': 'eh-normal-regular, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'sans-bold': 'eh-normal-bold, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      condensed: 'Tex Gyre Heros Condensed, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      slab: 'Zaft2 C, Rockwell, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    borderWidth: {
      'border-0': 0,
      'border-1': '1px',
      'border-2': '2px',
      'border-4': '4px',
    }
  },
  plugins: [tailwindAspectRatio]
};