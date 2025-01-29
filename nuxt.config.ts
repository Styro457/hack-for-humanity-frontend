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
  }
})
