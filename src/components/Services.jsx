import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  Palette, Code2, Megaphone, TrendingUp, 
  Video, Search, Rocket, Sparkles 
} from './ui/Icons'
import SectionTitle from './ui/SectionTitle'
import CosmicCard from './ui/CosmicCard'

const Services = () => {
  const { t, i18n } = useTranslation('home')
  const isRTL = i18n.language === 'ar'

  const services = [
    {
      icon: Palette,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      color: 'from-cosmic-glow to-cosmic-medium',
    },
    {
      icon: Code2,
      title: t('services.web.title'),
      description: t('services.web.description'),
      color: 'from-cosmic-sky to-cosmic-mid',
    },
    {
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      color: 'from-cosmic-saturated to-cosmic-dark',
    },
    {
      icon: TrendingUp,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      color: 'from-cosmic-mid to-cosmic-navy',
    },
    {
      icon: Video,
      title: t('services.content.title'),
      description: t('services.content.description'),
      color: 'from-cosmic-medium to-cosmic-saturated',
    },
    {
      icon: Search,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      color: 'from-cosmic-dark to-cosmic-glow',
    },
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionTitle 
          subtitle={t('services.subtitle')}
          title={t('services.title')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <CosmicCard key={index} delay={index * 0.1}>
              <div className={`relative ${isRTL ? 'text-right' : ''}`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 flex items-center justify-center ${isRTL ? 'ml-auto' : ''}`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className={`text-xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                  {service.title}
                </h3>
                
                <p className={`text-gray-400 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-saturated to-cosmic-sky group-hover:w-full transition-all duration-500" />
              </div>
            </CosmicCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-flex items-center gap-3 glass px-6 py-3 rounded-full ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Rocket className="w-5 h-5 text-cosmic-sky" />
            <span className={`text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{t('services.customCta')}</span>
            <button className={`text-cosmic-glow font-semibold flex items-center gap-1 hover:gap-2 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className={isRTL ? 'font-arabic' : ''}>{t('services.letsTalk')}</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 w-64 h-64 bg-cosmic-saturated/10 rounded-full blur-[100px]" />
    </section>
  )
}

export default Services