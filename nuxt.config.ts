import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'shadcn-nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  i18n: {
    defaultLocale: 'pl',
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'pl',
        language: 'pl',
        name: 'Polski',
        file: 'pl.ts',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
  }
})
