import tailwindcss from '@tailwindcss/vite'

const DEFAULT_LOCALE = 'pl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: DEFAULT_LOCALE
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt'
  ],
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
    defaultLocale: DEFAULT_LOCALE,
    locales: [
      {
        code: 'pl',
        language: 'pl',
        name: 'Polski',
        file: 'pl.ts',
      },
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'ru',
        language: 'ru',
        name: 'Русский',
        file: 'ru.ts',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
  },
  pwa: {
    manifest: {
      name: 'SAVA GROUP',
      short_name: 'SAVA GROUP',
      description: 'Profesjonalne usługi elektryczne',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      orientation: 'portrait-primary',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      lang: DEFAULT_LOCALE,
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
  },
})
