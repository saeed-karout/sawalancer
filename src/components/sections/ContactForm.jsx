import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  Send, CheckCircle, AlertCircle, User, Mail, 
  Phone, MessageSquare, Briefcase, Sparkles,
  Rocket, Star
} from '../ui/Icons'

const ContactForm = () => {
  const { t, i18n } = useTranslation('contact')
  const isRTL = i18n.language === 'ar'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [activeField, setActiveField] = useState(null)

  const services = isRTL ? [
    'الهوية والاستراتيجية',
    'تطوير الويب',
    'التسويق الرقمي',
    'تحسين محركات البحث',
    'صناعة المحتوى',
    'إدارة وسائل التواصل',
    'تصميم UI/UX',
    'استشارات'
  ] : [
    'Brand Identity & Strategy',
    'Web Development',
    'Digital Marketing',
    'SEO Optimization',
    'Content Creation',
    'Social Media Management',
    'UI/UX Design',
    'Consulting'
  ]

  const budgets = isRTL ? [
    '١٨,٠٠٠ - ٣٧,٠٠٠ ريال',
    '٣٧,٠٠٠ - ٩٣,٠٠٠ ريال',
    '٩٣,٠٠٠ - ١٨٧,٠٠٠ ريال',
    '١٨٧,٠٠٠ - ٣٧٥,٠٠٠ ريال',
    '+٣٧٥,٠٠٠ ريال'
  ] : [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('validation.nameRequired')
    } else if (formData.name.length < 2) {
      newErrors.name = t('validation.nameMin')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('validation.emailInvalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('validation.messageRequired')
    } else if (formData.message.length < 10) {
      newErrors.message = t('validation.messageMin')
    }

    if (!formData.service) {
      newErrors.service = t('validation.serviceRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className="text-sm text-gray-300">{t('form.title')}</span>
            </div>
          </motion.div>

          <div className={`grid lg:grid-cols-3 gap-8 ${isRTL ? 'rtl' : ''}`}>
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="cosmic-card p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cosmic-saturated to-cosmic-dark flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-cosmic-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('info.whatsapp')}</h3>
                <p className="text-gray-400">{t('info.whatsappDesc')}</p>
              </div>

              <div className="cosmic-card p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cosmic-sky to-cosmic-mid flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('whyChoose.title')}</h3>
                <ul className="space-y-2">
                  {t('whyChoose.items', { returnObjects: true }).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cosmic-glow flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="cosmic-card p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{t('form.success.title')}</h3>
                      <p className="text-gray-400 mb-6">{t('form.success.message')}</p>
                      <button
                        onClick={() => setSubmitStatus(null)}
                        className="glass px-6 py-3 rounded-full text-white hover:bg-white/10 transition-all"
                      >
                        {t('form.success.button')}
                      </button>
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                        <AlertCircle className="w-10 h-10 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{t('form.error.title')}</h3>
                      <p className="text-gray-400 mb-6">{t('form.error.message')}</p>
                      <button
                        onClick={() => setSubmitStatus(null)}
                        className="glass px-6 py-3 rounded-full text-white hover:bg-white/10 transition-all"
                      >
                        {t('form.error.button')}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Form fields with RTL support */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('form.name')} *
                          </label>
                          <div className="relative">
                            <User className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 transition-colors
                              ${activeField === 'name' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setActiveField('name')}
                              onBlur={() => setActiveField(null)}
                              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 
                                focus:outline-none focus:border-cosmic-sky transition-all
                                ${errors.name ? 'border-red-500/50' : 'border-transparent'}`}
                              placeholder={t('form.namePlaceholder')}
                              dir={isRTL ? 'rtl' : 'ltr'}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('form.email')} *
                          </label>
                          <div className="relative">
                            <Mail className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 transition-colors
                              ${activeField === 'email' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setActiveField('email')}
                              onBlur={() => setActiveField(null)}
                              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 
                                focus:outline-none focus:border-cosmic-sky transition-all
                                ${errors.email ? 'border-red-500/50' : 'border-transparent'}`}
                              placeholder={t('form.emailPlaceholder')}
                              dir="ltr"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('form.phone')}
                          </label>
                          <div className="relative">
                            <Phone className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 transition-colors
                              ${activeField === 'phone' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onFocus={() => setActiveField('phone')}
                              onBlur={() => setActiveField(null)}
                              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 
                                focus:outline-none focus:border-cosmic-sky transition-all`}
                              placeholder={t('form.phonePlaceholder')}
                              dir="ltr"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t('form.service')} *
                          </label>
                          <div className="relative">
                            <Briefcase className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 transition-colors
                              ${activeField === 'service' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              onFocus={() => setActiveField('service')}
                              onBlur={() => setActiveField(null)}
                              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white 
                                focus:outline-none focus:border-cosmic-sky transition-all appearance-none
                                ${errors.service ? 'border-red-500/50' : 'border-transparent'}`}
                              dir={isRTL ? 'rtl' : 'ltr'}
                            >
                              <option value="" className="bg-cosmic-background">{t('form.servicePlaceholder')}</option>
                              {services.map(service => (
                                <option key={service} value={service} className="bg-cosmic-background">
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          {errors.service && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t('form.budget')}
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl glass text-white 
                            focus:outline-none focus:border-cosmic-sky transition-all appearance-none"
                          dir={isRTL ? 'rtl' : 'ltr'}
                        >
                          <option value="" className="bg-cosmic-background">{t('form.budgetPlaceholder')}</option>
                          {budgets.map(budget => (
                            <option key={budget} value={budget} className="bg-cosmic-background">
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {t('form.message')} *
                        </label>
                        <div className="relative">
                          <MessageSquare className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-4 w-5 h-5 transition-colors
                            ${activeField === 'message' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setActiveField('message')}
                            onBlur={() => setActiveField(null)}
                            rows="5"
                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 
                              focus:outline-none focus:border-cosmic-sky transition-all resize-none
                              ${errors.message ? 'border-red-500/50' : 'border-transparent'}`}
                            placeholder={t('form.messagePlaceholder')}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </div>
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative px-8 py-4 rounded-xl font-semibold text-white
                                 bg-gradient-to-r from-cosmic-saturated to-cosmic-dark
                                 shadow-lg shadow-cosmic-saturated/30 hover:shadow-cosmic-saturated/50
                                 transition-all duration-300 overflow-hidden group
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              {t('form.sending')}
                            </>
                          ) : (
                            <>
                              {t('form.submit')}
                              <Send className={`w-4 h-4 group-hover:${isRTL ? '-translate-x' : 'translate-x'}-1 transition-transform`} />
                            </>
                          )}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.8 }}
                        />
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        {t('form.privacy')}{' '}
                        <a href="/privacy" className="text-cosmic-glow hover:underline">{t('form.privacyPolicy')}</a>
                        {' '}{t('form.and')}{' '}
                        <a href="/terms" className="text-cosmic-glow hover:underline">{t('form.terms')}</a>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm