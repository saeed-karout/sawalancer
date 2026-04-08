import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from './ui/Icons'
import { useState, useRef, useEffect } from 'react'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const isRTL = i18n.language === 'ar'
  
  const currentLanguage = i18n.language
  const languages = [
    { code: 'en', name: t('language.en'), dir: 'ltr', flag: '🇺🇸' },
    { code: 'ar', name: t('language.ar'), dir: 'rtl', flag: '🇸🇦' }
  ]
  
  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
    // تحديث اتجاه الصفحة
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lng
  }
  
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-cosmic-glow transition-all relative"
        aria-label={t('language.switchTo')}
      >
        <Globe className="w-5 h-5" />
        {/* مؤشر اللغة الحالية */}
        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-cosmic-saturated rounded-full flex items-center justify-center text-[8px] font-bold text-white">
          {currentLanguage.toUpperCase()}
        </span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} mt-2 glass rounded-xl p-2 z-50 min-w-[140px]`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                  currentLanguage === lang.code
                    ? 'bg-cosmic-saturated/30 text-cosmic-glow'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                } ${lang.dir === 'ltr' ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className={`flex-1 ${lang.dir === 'ltr' ? 'font-arabic' : ''}`}>
                  {lang.name}
                </span>
                {currentLanguage === lang.code && (
                  <motion.span
                    layoutId="activeLang"
                    className="w-2 h-2 bg-cosmic-glow rounded-full"
                  />
                )}
              </button>
            ))}
            
            {/* معلومات إضافية */}
            <div className="mt-2 pt-2 border-t border-cosmic-saturated/20">
              <p className="text-[10px] text-gray-500 text-center">
                {isRTL ? 'اختر لغتك المفضلة' : 'Choose your preferred language'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher