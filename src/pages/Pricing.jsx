import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles, CheckCircle, Star } from '../components/ui/Icons'
import GlowButton from '../components/ui/GlowButton'

const Pricing = () => {
  const { t, i18n } = useTranslation('pricing')
  const isArabic = i18n.language === 'ar'

  const plans = [
    {
      name: t('plans.starter.name'),
      price: t('plans.starter.price'),
      description: t('plans.starter.description'),
      features: t('plans.starter.features', { returnObjects: true }),
      color: 'from-cosmic-navy to-cosmic-dark',
      popular: false
    },
    {
      name: t('plans.cosmic.name'),
      price: t('plans.cosmic.price'),
      description: t('plans.cosmic.description'),
      features: t('plans.cosmic.features', { returnObjects: true }),
      color: 'from-cosmic-saturated to-cosmic-mid',
      popular: true
    },
    {
      name: t('plans.galaxy.name'),
      price: t('plans.galaxy.price'),
      description: t('plans.galaxy.description'),
      features: t('plans.galaxy.features', { returnObjects: true }),
      color: 'from-cosmic-dark to-cosmic-saturated',
      popular: false
    }
  ]

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
            <span className={`text-sm text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>{t('hero.badge')}</span>
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            <span className="text-gradient">{t('hero.title')}</span>
            <br />
            <span className="text-white">{t('hero.title2')}</span>
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {t('hero.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative cosmic-card p-8 ${plan.popular ? 'border-cosmic-glow shadow-lg shadow-cosmic-saturated/20' : ''}`}
            >
              {plan.popular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cosmic-glow to-cosmic-sky rounded-full text-white text-xs font-bold ${isArabic ? 'font-arabic' : ''}`}>
                  {t('plans.cosmic.popular')}
                  </div>
                )}
               
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold text-white mb-2 ${isArabic ? 'font-arabic' : ''}`}>{plan.name}</h3>
                  <div className="text-4xl font-bold text-gradient mb-2">{plan.price}</div>
                  <p className={`text-gray-400 text-sm ${isArabic ? 'font-arabic' : ''}`}>{plan.description}</p>
                </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cosmic-glow flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-300 text-sm ${isArabic ? 'font-arabic' : ''}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <GlowButton className={`w-full ${isArabic ? 'font-arabic' : ''}`}>
                {t('cta.getStarted')}
                <Star className="inline ml-2 w-4 h-4" />
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
