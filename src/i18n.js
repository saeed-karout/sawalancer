import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      // تصحيح: تحديد مسار ملفات الترجمة بشكل صحيح
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // مهم: تحديد namespace الافتراضي
    ns: ['common', 'home', 'about', 'services', 'portfolio', 'blog', 'contact', 'pricing'],
    defaultNS: 'common',
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    
    react: {
      useSuspense: true,
    },
  })

// Set document direction based on language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = 'ltr'
})

export default i18n
