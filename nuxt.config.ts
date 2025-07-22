import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'shadcn-nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'pl',
        name: 'Polski'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    vueI18n: './i18n/index.ts'
  }
})
