import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Rocket, Home, Search, AlertCircle } from '../components/ui/Icons'

const NotFound = () => {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 text-6xl opacity-20"
      >
        🚀
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-20 text-6xl opacity-20"
      >
        🌟
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 right-1/3 text-4xl opacity-10"
      >
        ✨
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative inline-block"
          >
            <h1 className="text-[150px] md:text-[200px] font-bold text-gradient leading-none">
              404
            </h1>
            
            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-20 h-20"
            >
              <div className="w-4 h-4 bg-cosmic-glow rounded-full" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-5 -left-5 w-16 h-16"
            >
              <div className="w-3 h-3 bg-cosmic-sky rounded-full" />
            </motion.div>
          </motion.div>

          {/* Lost in Space Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-cosmic-glow" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t('notFound.title')}
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
              {t('notFound.message')}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
                       bg-gradient-to-r from-cosmic-saturated to-cosmic-dark 
                       text-white font-semibold shadow-lg shadow-cosmic-saturated/30 
                       hover:shadow-cosmic-saturated/50 transition-all group"
            >
              <Home className="w-5 h-5" />
              {t('notFound.backHome')}
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
                       glass text-white font-semibold hover:bg-white/10 transition-all"
            >
              <Search className="w-5 h-5" />
              {t('buttons.contactUs')}
            </Link>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-8 border-t border-cosmic-saturated/20"
          >
            <p className="text-gray-400 mb-4">
              {isRTL ? "ربما تبحث عن:" : "Maybe you're looking for:"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['/', '/services', '/portfolio', '/contact'].map((path) => {
                const labels = {
                  '/': { en: 'Home', ar: 'الرئيسية' },
                  '/services': { en: 'Services', ar: 'الخدمات' },
                  '/portfolio': { en: 'Portfolio', ar: 'الأعمال' },
                  '/contact': { en: 'Contact', ar: 'تواصل' }
                }
                return (
                  <Link
                    key={path}
                    to={path}
                    className="text-cosmic-glow hover:text-cosmic-sky transition-colors"
                  >
                    {isRTL ? labels[path].ar : labels[path].en}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shooting star effect */}
      <motion.div
        initial={{ x: '-100%', y: '-100%' }}
        animate={{ x: '200%', y: '200%' }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-40 h-px bg-gradient-to-r from-transparent via-cosmic-glow to-transparent rotate-45"
      />
    </div>
  )
}

export default NotFound