import en from './en'
import pl from './pl'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en.default ?? en,
    pl: pl.default ?? pl,
  },
}))
