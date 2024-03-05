import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  app: {
    head: {
      title: 'REVOLVE Gallery and Co-Op Studios',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Prismic + Nuxt multi-page example'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: [
    '~/styles/global.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css'
  ],

  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss'
  ],

  prismic: {
    endpoint: 'revolveavl',
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },

  tailwindcss: {
    config: {
      mode: 'jit',
      purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.ts'],
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
    }
  }
})