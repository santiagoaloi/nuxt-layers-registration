import { createResolver } from '@nuxt/kit'

import appSettings from './app.settings'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'vuetify-nuxt-module',
  ],

  unocss: {
    icons: true,
  },

  colorMode: {
    preference: appSettings.defaultTheme,
    storageKey: 'color-scheme',
    classPrefix: '',
    classSuffix: '',
  },

  imports: {
    presets: [
      {
        from: 'vuetify',
        imports: ['useDisplay', 'useTheme'],
      },
    ],
  },

  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },

  components:
  [{
    path: resolve('./components'),
    pathPrefix: false,
  }],

  vite: {

    optimizeDeps: {
      exclude: ['vuetify'],
    },

  },

  css: [
    resolve('./assets/css/globals.css'),
    resolve('./assets/css/progress-bar.css'),
    resolve('./assets/css/vuetify.css'),
  ],

  vuetify: {
    moduleOptions: {
      styles: {
        configFile: resolve('./assets/vuetify/settings.scss'),
      },
    },
  },

  features: {
    inlineStyles: true,
  },

})
