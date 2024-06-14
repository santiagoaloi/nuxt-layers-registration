import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  components:
  [{
    path: resolve('./components'),
    pathPrefix: false,
  }],

  /*
   If I dont manually specify the other 2 layes, they are not auto-registered.
   as they should be, in v3.12.1
   extends: ['@skriptjobs/base'],
  */

  extends: ['@skriptjobs/base', 'layers/skriptjobs-public-web', 'layers/skriptjobs-user-interface'],
  // extends: ['@skriptjobs/base'],

})
