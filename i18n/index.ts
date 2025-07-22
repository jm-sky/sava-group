import { usePreferredLanguages } from '@vueuse/core'
import { createI18n } from 'vue-i18n'
import en from './en'
import pl from './pl'

const DEFAULT_LOCALE = 'en'

// Get browser's preferred languages
const preferredLanguages = usePreferredLanguages()

// Function to get the first supported language from browser preferences
const getPreferredLocale = () => {
  const supportedLocales = ['en', 'pl']
  const browserLocale = preferredLanguages.value[0]?.split('-')[0] // Get primary language code
  return supportedLocales.includes(browserLocale) ? browserLocale : DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: getPreferredLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en,
    pl,
  },
})
