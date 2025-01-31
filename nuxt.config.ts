// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from './assets/script/colors'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['primeicons/primeicons.css', 'assets/css/main.css'],
  modules: [
    '@primevue/nuxt-module',
    "nuxt-phosphor-icons"
  ],
  primevue: {
    options: {
      theme: {
        preset: Theme,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
        }
      }
    }
  },
  server: {
    host: '127.0.0.1',
    port: 3001
  },
  devServer: {
    host: '127.0.0.1',
    port: 3001
  },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }
    ]
  }
})
