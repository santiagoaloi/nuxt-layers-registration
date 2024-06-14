import NProgress from 'nprogress'

// Configure NProgress settings
NProgress.configure({ easing: 'ease', speed: 320, showSpinner: false })

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    NProgress.start()
  })

  nuxtApp.hook('page:finish', () => {
    NProgress.done()
  })
})
