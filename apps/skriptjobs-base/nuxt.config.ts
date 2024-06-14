import { fileURLToPath } from 'node:url'
import { config } from 'dotenv'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

const nodeEnviroment = process.env.NODE_ENV // 'development' or 'production'
const productionOnly = nodeEnviroment === 'production'

// Load all environment variables from .env files
// config({ path: `.env.production` })
config({ path: `.env.${nodeEnviroment}` })

// const isProduction = process.env.NODE_ENV === 'production'
// const isStaging = process.env.NODE_ENV === 'staging'

export default defineNuxtConfig({

  extends: ['@skriptjobs/ui'],

  ssr: true,

  nitro: {

    preset: 'node', // the default

    // Enable static rendering in production mode. This can help improve
    // performance, but it can also cause issues with image paths in
    // development mode. Therefore,only enable it in production mode.

    static: productionOnly,

    // Disable link crawling for pre-rendering. This can help speed up
    // build times if we have a lot of pages, but it means that we'll
    // need to manually specify which pages to pre-render.

    prerender: { crawlLinks: false, ignore: [
      path => ['/app'].some(start => path.startsWith(start)),
    ] },

    // NOTE: we don't want to use the firebase preset because this is a static website and the firebase preset is for SSR
    // preset: 'node', // the default

    // Specify the regions for Vercel deployment. This can help improve
    // performance by deploying skriptjobs closer to our users.
    vercel: {
      regions: ['arn1'], // Stockholm, Sweden
    },
    // preset: 'vercel-edge',

  },

  routeRules: {
    '/': { prerender: true },
    '/app/**': { ssr: false },
  },

  /*
  prints out hook names and timings on the server,
  and logs hook arguments as well in the browser.
*/
  debug: false,

  // plugins: ['~/plugins/settings.ts'],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'nuxt-better-optimize-deps', // https://github.com/antfu/nuxt-better-optimize-deps
  ],

  lodash: {
    exclude: ['defaults'],
  },

  imports: {
    injectAtEnd: true,
    dirs: ['stores', 'scripts/**/*.{ts,js}', 'data/**/*.{ts,js}'],

    presets: [

      {
        // import * as Yup from 'yup'
        from: 'yup',
        imports: [['*', 'Yup']],
      },

    ],
  },

  components:
  [{
    path: resolve('./components'),
    pathPrefix: false,
  }],

  vite: {

    define: {
      'process.env.DEBUG': false,
    },

    vue: {
      script: {
        defineModel: true,
      },
    },

    optimizeDeps: {
      // pre-bundle 'yup' and avoid app reload after optimized.
      include: ['yup'],
      entries: [
        './**/*.vue',
      ],
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },

  },

  experimental: {

    typedPages: true,
    // https://github.com/nuxt/nuxt/issues/24391
  },

  devtools: { enabled: true },

})
