import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles, Star, Rocket, Target, Users, Award } from '../components/ui/Icons'
import Layout from '../components/layout/Layout'
import { pageSEO } from '../utils/seoConfig'

const About = () => {
  const { t, i18n } = useTranslation('about')
  const isRTL = i18n.language === 'ar'

  const values = [
    { icon: Target, key: 'mission' },
    { icon: Star, key: 'vision' },
    { icon: Rocket, key: 'values' }
  ]

  return (
    <Layout seoProps={pageSEO.about}>
      <section className="relative min-h-screen pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}
          >
            <div className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{t('badge')}</span>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              <span className="text-gradient">{t('title.part1')}</span>
              <br />
              <span className="text-white">{t('title.part2')}</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {t('description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`cosmic-card p-8 text-center ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-16 h-16 ${isRTL ? 'ml-auto mr-0' : 'mx-auto'} mb-6 rounded-xl bg-gradient-to-br from-cosmic-saturated to-cosmic-dark flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-cosmic-glow" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                  {t(`${item.key}.title`)}
                </h3>
                <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>
                  {t(`${item.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-20 pt-20 border-t border-cosmic-saturated/20 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className={`text-4xl font-bold text-white mb-8 ${isRTL ? 'font-arabic' : ''}`}>
              {t('team.title')}
            </h2>
            <p className={`text-gray-400 max-w-2xl mb-8 ${isRTL ? 'font-arabic' : ''}`}>
              {t('team.description')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="cosmic-card p-6 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cosmic-saturated to-cosmic-dark" />
                  <h4 className="text-white font-bold mb-1">{t(`team.members.${i}.name`)}</h4>
                  <p className="text-cosmic-glow text-sm mb-2">{t(`team.members.${i}.role`)}</p>
                  <p className="text-gray-400 text-xs">{t(`team.members.${i}.bio`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default About