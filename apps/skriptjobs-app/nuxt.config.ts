import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  components:
  [{
    path: resolve('./components'),
    pathPrefix: false,
  }],

  // auto-registering 'layers/skriptjobs-public-web', 'layers/skriptjobs-user-interface',
  // any layers in the 'layers' directory will be auto-registered.
  extends: ['@skriptjobs/base'],

})
