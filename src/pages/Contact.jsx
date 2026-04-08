import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout/Layout'
import ContactForm from '../components/sections/ContactForm'
import { pageSEO, generateSchema } from '../utils/seoConfig'
import { 
  MapPin, Phone, Mail, MessageCircle, Clock,
  Send, Sparkles, Star, CheckCircle
} from '../components/ui/Icons'

const Contact = () => {
  const { t, i18n } = useTranslation('contact')
  const isRTL = i18n.language === 'ar'
  
  const seoProps = {
    ...pageSEO.contact,
    schema: generateSchema.organization()
  }

  const contactCards = [
    {
      icon: MessageCircle,
      title: t('info.whatsapp'),
      value: '+1 (234) 567-890',
      link: 'https://wa.me/1234567890',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: t('info.email'),
      value: 'hello@sawalancer.com',
      link: 'mailto:hello@sawalancer.com',
      color: 'from-cosmic-saturated to-cosmic-dark'
    },
    {
      icon: Phone,
      title: t('info.phone'),
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      color: 'from-cosmic-sky to-cosmic-mid'
    },
    {
      icon: MapPin,
      title: t('info.location'),
      value: 'Cosmic HQ, Digital Galaxy',
      color: 'from-cosmic-medium to-cosmic-glow'
    }
  ]

  return (
    <Layout seoProps={seoProps}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.badge')}</span>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              <span className="text-gradient">{t('hero.title')}</span>
              <br />
              <span className="text-white">{t('hero.title2')}</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link || '#'}
                target={card.link?.startsWith('http') ? '_blank' : undefined}
                rel={card.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`cosmic-card p-6 group cursor-pointer ${!card.link && 'cursor-default'} ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-semibold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>{card.title}</h3>
                <p className="text-gray-400">{card.value}</p>
                {card.link && (
                  <div className={`mt-4 flex items-center gap-1 text-cosmic-glow text-sm opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={isRTL ? 'font-arabic' : ''}>{isRTL ? 'تواصل' : 'Connect'}</span>
                    <Send className={`w-3 h-3 group-hover:${isRTL ? '-translate-x' : 'translate-x'}-1 transition-transform`} />
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`cosmic-card p-8 md:p-10 ${isRTL ? 'rtl' : ''}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Clock className="w-6 h-6 text-cosmic-sky" />
                  <h3 className={`text-xl font-bold text-white ${isRTL ? 'font-arabic' : ''}`}>{t('info.hours')}</h3>
                </div>
                <div className="space-y-3">
                  <div className={`flex justify-between text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={isRTL ? 'font-arabic' : ''}>{t('info.weekdays')}</span>
                    <span className="text-cosmic-glow">9:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className={`flex justify-between text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={isRTL ? 'font-arabic' : ''}>{t('info.saturday')}</span>
                    <span className="text-cosmic-glow">10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className={`flex justify-between text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={isRTL ? 'font-arabic' : ''}>{t('info.sunday')}</span>
                    <span className="text-cosmic-glow">{t('info.closed')}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Star className="w-6 h-6 text-cosmic-glow" />
                  <h3 className={`text-xl font-bold text-white ${isRTL ? 'font-arabic' : ''}`}>{t('whyChoose.title')}</h3>
                </div>
                <ul className="space-y-3">
                  {t('whyChoose.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className={`flex items-center gap-2 text-gray-300 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle className="w-4 h-4 text-cosmic-sky flex-shrink-0" />
                      <span className={isRTL ? 'font-arabic' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className={`text-3xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'موقعنا الكوني' : 'Our Cosmic Location'}
            </h2>
            <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'زرنا في مقرنا الرئيسي في قلب المجرة الرقمية' : 'Visit us at our headquarters in the heart of the digital galaxy'}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cosmic-card p-1 h-80 md:h-96 overflow-hidden rounded-2xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-cosmic-navy via-cosmic-background to-cosmic-dark rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* تأثيرات كونية */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cosmic-saturated/20 rounded-full blur-[50px] animate-pulse-glow" />
                <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-cosmic-sky/20 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
              </div>
              
              {/* محتوى الخريطة */}
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cosmic-saturated to-cosmic-dark flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-cosmic-glow" />
                </div>
                <h3 className={`text-2xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'المقر الكوني' : 'Cosmic Headquarters'}
                </h3>
                <p className="text-gray-400 mb-4">
                  Digital Galaxy, Earth<br />
                  Cosmic Sector 7, Nebula District
                </p>
                <div className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
                    {isRTL ? 'متواجدون الآن' : 'Open Now'}
                  </span>
                </div>
                
                {/* زر الاتجاهات */}
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 inline-flex items-center gap-2 px-6 py-3 bg-cosmic-saturated/20 border border-cosmic-saturated/30 rounded-full text-cosmic-glow hover:bg-cosmic-saturated/30 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : ''}>
                    {isRTL ? 'احصل على الاتجاهات' : 'Get Directions'}
                  </span>
                </motion.a>
              </div>
              
              {/* نجوم متحركة */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact