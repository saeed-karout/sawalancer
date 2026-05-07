import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles } from '../components/ui/Icons'
import Layout from '../components/layout/Layout'

const Privacy = () => {
  const { t, i18n } = useTranslation('legal')
  const isRTL = i18n.language === 'ar'

  const sections = [
    {
      title: t('privacy.intro.title'),
      content: t('privacy.intro.content')
    },
    {
      title: t('privacy.collection.title'),
      content: t('privacy.collection.content'),
      list: t('privacy.collection.items', { returnObjects: true })
    },
    {
      title: t('privacy.usage.title'),
      content: t('privacy.usage.content')
    },
    {
      title: t('privacy.protection.title'),
      content: t('privacy.protection.content')
    },
    {
      title: t('privacy.rights.title'),
      content: t('privacy.rights.content')
    },
    {
      title: t('privacy.contact.title'),
      content: t('privacy.contact.content')
    }
  ]

  return (
    <Layout seoProps={{ title: t('privacy.title'), description: t('privacy.description') }}>
      <section className="relative min-h-screen pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{t('privacy.label')}</span>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              <span className="text-gradient">{t('privacy.title')}</span>
            </h1>
            <p className={`text-lg text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
              {t('privacy.description')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`mb-10 ${isRTL ? 'text-right' : ''}`}
              >
                <h2 className={`text-2xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {section.title}
                </h2>
                <p className={`text-gray-300 leading-relaxed mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {section.content}
                </p>
                {section.list && (
                  <ul className={`list-disc space-y-2 text-gray-300 ${isRTL ? 'mr-5 font-arabic' : 'ml-5'}`}>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`mt-12 pt-8 border-t border-cosmic-saturated/20 text-sm text-gray-400 ${isRTL ? 'text-right font-arabic' : ''}`}
            >
              <p>{t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Privacy
