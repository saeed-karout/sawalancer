import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Star, Zap, Globe } from './ui/Icons'
import GlowButton from './ui/GlowButton'

const Hero = () => {
  const { t, i18n } = useTranslation('home')
  const isRTL = i18n.language === 'ar'

  const floatingIcons = [
    { Icon: Star, color: 'text-cosmic-glow', delay: 0 },
    { Icon: Zap, color: 'text-cosmic-sky', delay: 2 },
    { Icon: Globe, color: 'text-cosmic-medium', delay: 4 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Icon size={24} className="opacity-30" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={`max-w-6xl mx-auto text-center ${isRTL ? 'rtl' : ''}`}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cosmic-sky opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cosmic-sky" />
            </span>
            <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.badge')}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="text-gradient">{t('hero.title1')}</span>
            <br />
            <span className="text-white">{t('hero.title2')}</span>
            <br />
            <span className="text-gradient">{t('hero.title3')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 ${isRTL ? 'font-arabic' : ''}`}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlowButton className={`text-lg px-10 py-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.cta1')}
              <ArrowRight className={`inline ml-2 w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </GlowButton>
            <GlowButton variant="secondary" className={`text-lg px-10 py-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.cta2')}
            </GlowButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20"
          >
            {[
              { value: '250+', label: t('hero.stats.projects') },
              { value: '98%', label: t('hero.stats.satisfaction') },
              { value: '15+', label: t('hero.stats.awards') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                <div className={`text-gray-400 mt-2 ${isRTL ? 'font-arabic' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cosmic-glow/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cosmic-glow rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero