import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

import {
  defaultsCustom,
  defaultsNative,
  themes,
} from './config/vuetify'

import appSettings from './app.settings'

export default defineVuetifyConfiguration({

  icons: {
    defaultSet: 'unocss-mdi',
  },

  theme: {
    defaultTheme: appSettings.defaultTheme,
    themes,
  },

  defaults: {
    ...defaultsNative,
    ...defaultsCustom,
  },

})
