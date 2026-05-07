import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles } from '../components/ui/Icons'
import SectionTitle from '../components/ui/SectionTitle'
import CosmicCard from '../components/ui/CosmicCard'
import { 
  Palette, Code2, Megaphone, TrendingUp, 
  Video, Search, Rocket 
} from '../components/ui/Icons'

const Services = ({ serviceType }) => {
  const { t, i18n } = useTranslation(['services', 'home'])
  const isArabic = i18n.language === 'ar'
  const allServices = [
    {
      icon: Palette,
      title: t('home:services.branding.title'),
      description: t('home:services.branding.description'),
      color: 'from-cosmic-glow to-cosmic-medium',
      type: 'branding'
    },
    {
      icon: Code2,
      title: t('home:services.web.title'),
      description: t('home:services.web.description'),
      color: 'from-cosmic-sky to-cosmic-mid',
      type: 'web'
    },
    {
      icon: Megaphone,
      title: t('home:services.marketing.title'),
      description: t('home:services.marketing.description'),
      color: 'from-cosmic-saturated to-cosmic-dark',
      type: 'marketing'
    },
    {
      icon: TrendingUp,
      title: t('home:services.seo.title'),
      description: t('home:services.seo.description'),
      color: 'from-cosmic-mid to-cosmic-navy',
      type: 'seo'
    },
    {
      icon: Video,
      title: t('home:services.content.title'),
      description: t('home:services.content.description'),
      color: 'from-cosmic-medium to-cosmic-saturated',
      type: 'content'
    },
    {
      icon: Search,
      title: t('home:services.analytics.title'),
      description: t('home:services.analytics.description'),
      color: 'from-cosmic-dark to-cosmic-glow',
      type: 'analytics'
    },
  ]

  const displayServices = serviceType 
    ? allServices.filter(s => s.type === serviceType)
    : allServices

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cosmic-glow" />
            <span className={`text-sm text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>{t('home:services.subtitle')}</span>
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            <span className="text-gradient">{t('services:hero.title')}</span>
            <br />
            <span className="text-white">{t('services:hero.title2')}</span>
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {t('services:hero.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <CosmicCard key={index} delay={index * 0.1}>
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 flex items-center justify-center`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${isArabic ? 'font-arabic' : ''}`}>{service.title}</h3>
                <p className={`text-gray-400 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>{service.description}</p>
              </div>
            </CosmicCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
