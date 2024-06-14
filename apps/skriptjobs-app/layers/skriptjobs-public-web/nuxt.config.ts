import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  components:
  [{
    path: resolve('./components'),
    pathPrefix: false,
  }],

  imports: {
    injectAtEnd: true,
    dirs: ['stores'],
  },
})
