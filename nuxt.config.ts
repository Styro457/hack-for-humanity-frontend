// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['primeicons/primeicons.css', 'assets/css/main.css'],
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
        }
      }
    }
  }
})
