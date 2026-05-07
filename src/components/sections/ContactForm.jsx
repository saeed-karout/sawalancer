import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Send, CheckCircle, AlertCircle, Mail,
  MessageSquare, Briefcase, Sparkles, Rocket, Star
} from '../ui/Icons'
import servicesData from '../../data/services-contact.json'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkoyvzqe'

const getStoredServices = () => {
  try {
    const stored = localStorage.getItem('selectedServices')
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.warn('Failed to parse selectedServices from localStorage:', error)
    return []
  }
}

const ContactForm = () => {
  const { t, i18n } = useTranslation('contact')
  const currentLang = i18n.language?.split('-')[0] || 'en'
  const isRTL = currentLang === 'ar'

  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    message: '',
    services: getStoredServices(),
  })

  const [errors, setErrors] = useState({})
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAllErrors, setShowAllErrors] = useState(false)
  const [activeField, setActiveField] = useState(null)

  const validationRules = {
    email: (value) => {
      if (!value.trim()) return t('validation.emailRequired')
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return t('validation.emailInvalid')
      return null
    },
    companyName: (value) => {
      if (!value.trim()) return t('validation.companyRequired')
      if (value.trim().length < 2) return t('validation.companyMinLength')
      if (value.trim().length > 100) return t('validation.companyMaxLength')
      return null
    },
    message: (value) => {
      if (!value.trim()) return t('validation.messageRequired')
      if (value.trim().length > 1000) return t('validation.messageMaxLength')
      return null
    },
    services: (value) => {
      if (!Array.isArray(value) || value.length === 0) return t('validation.servicesRequired')
      return null
    },
  }

  const validateField = (name, value) => {
    const validator = validationRules[name]
    return validator ? validator(value) : null
  }

  const validateForm = (data) => {
    const newErrors = {}
    Object.keys(validationRules).forEach((key) => {
      const error = validateField(key, data[key])
      if (error) newErrors[key] = error
    })
    return newErrors
  }

  useEffect(() => {
    try {
      localStorage.setItem('selectedServices', JSON.stringify(formData.services))
    } catch (error) {
      console.warn('Failed to save selectedServices to localStorage:', error)
    }
  }, [formData.services])

  const isFormValid = () => Object.keys(validateForm(formData)).length === 0

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name] && value.trim() !== '') {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleServiceToggle = (serviceId) => {
    const selectedServiceId = serviceId.toString()
    const isSelected = formData.services.includes(selectedServiceId)

    const newServices = isSelected
      ? formData.services.filter((id) => id !== selectedServiceId)
      : [...formData.services, selectedServiceId]

    setFormData((prev) => ({
      ...prev,
      services: newServices,
    }))

    if (errors.services && newServices.length > 0) {
      setErrors((prev) => ({
        ...prev,
        services: null,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowAllErrors(true)

    const formErrors = validateForm(formData)
    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) {
      const firstError = document.querySelector('.error-message')
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)

    try {
      const serviceTitles = formData.services
        .map((id) => {
          const service = servicesData.find((s) => s.id.toString() === id)
          return service?.title?.[currentLang] || t('unknownService', { id })
        })
        .filter(Boolean)

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          companyName: formData.companyName,
          message: formData.message,
          services: serviceTitles.join(', '),
        }),
      })

      if (!response.ok) throw new Error(`Form submission failed with status: ${response.status}`)

      setFormStatus('success')
      setFormData({
        email: '',
        companyName: '',
        message: '',
        services: [],
      })
      setErrors({})
      setShowAllErrors(false)
      localStorage.removeItem('selectedServices')

      setTimeout(() => setFormStatus(null), 7000)
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const shouldShowError = (fieldName) => showAllErrors && errors[fieldName]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{t('form.title')}</span>
            </div>
          </motion.div>

          <div className={`grid lg:grid-cols-3 gap-8 ${isRTL ? 'rtl' : ''}`}>
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
                <h3 className={`text-xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>{t('info.whatsapp')}</h3>
                <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>{t('info.whatsappDesc')}</p>
              </div>

              <div className="cosmic-card p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cosmic-sky to-cosmic-mid flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>{t('whyChoose.title')}</h3>
                <ul className="space-y-2">
                  {t('whyChoose.items', { returnObjects: true }).map((item, i) => (
                    <li key={i} className={`flex items-start gap-2 text-gray-400 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle className="w-4 h-4 text-cosmic-glow flex-shrink-0 mt-1" />
                      <span className={isRTL ? 'font-arabic' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="cosmic-card p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
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
                      <h3 className={`text-2xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>{t('form.success.title')}</h3>
                      <p className={`text-gray-400 mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('form.success.message')}</p>
                      <button
                        onClick={() => setFormStatus(null)}
                        className="glass px-6 py-3 rounded-full text-white hover:bg-white/10 transition-all"
                      >
                        {t('form.success.button')}
                      </button>
                    </motion.div>
                  ) : formStatus === 'error' ? (
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
                      <h3 className={`text-2xl font-bold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>{t('form.error.title')}</h3>
                      <p className={`text-gray-400 mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('form.error.message')}</p>
                      <button
                        onClick={() => setFormStatus(null)}
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
                      <div>
                        <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                          {t('form.email')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${activeField === 'email' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField(null)}
                            placeholder={t('form.emailPlaceholder')}
                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-sky transition-all ${shouldShowError('email') ? 'border-red-500/50' : 'border-transparent'}`}
                            dir="ltr"
                          />
                        </div>
                        {shouldShowError('email') && <p className={`error-message text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic' : ''}`}>{errors.email}</p>}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                          {t('form.company')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${activeField === 'companyName' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            onFocus={() => setActiveField('companyName')}
                            onBlur={() => setActiveField(null)}
                            placeholder={t('form.companyPlaceholder')}
                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-sky transition-all ${shouldShowError('companyName') ? 'border-red-500/50' : 'border-transparent'}`}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </div>
                        {shouldShowError('companyName') && <p className={`error-message text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic' : ''}`}>{errors.companyName}</p>}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                          {t('form.message')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-4 w-5 h-5 transition-colors ${activeField === 'message' ? 'text-cosmic-glow' : 'text-gray-500'}`} />
                          <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setActiveField('message')}
                            onBlur={() => setActiveField(null)}
                            placeholder={t('form.messagePlaceholder')}
                            className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-sky transition-all resize-none ${shouldShowError('message') ? 'border-red-500/50' : 'border-transparent'}`}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </div>
                        {shouldShowError('message') && <p className={`error-message text-red-400 text-sm mt-1 ${isRTL ? 'font-arabic' : ''}`}>{errors.message}</p>}
                      </div>

                      <div>
                        <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                          {t('form.services')} <span className="text-red-400">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {servicesData.map((service) => {
                            const serviceId = service.id.toString()
                            const isActive = formData.services.includes(serviceId)
                            return (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => handleServiceToggle(service.id)}
                                className={`text-left px-4 py-2 rounded-xl border transition-all ${isActive ? 'bg-cosmic-saturated/30 border-cosmic-sky text-white' : 'glass border-cosmic-saturated/20 text-gray-300 hover:text-white hover:border-cosmic-sky/50'} ${isRTL ? 'font-arabic text-right' : ''}`}
                              >
                                {service.title?.[currentLang] || t('unknownService', { id: service.id })}
                              </button>
                            )
                          })}
                        </div>
                        {shouldShowError('services') && <p className={`error-message text-red-400 text-sm mt-2 ${isRTL ? 'font-arabic' : ''}`}>{errors.services}</p>}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        whileHover={{ scale: isSubmitting || !isFormValid() ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting || !isFormValid() ? 1 : 0.98 }}
                        className="w-full relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cosmic-saturated to-cosmic-dark shadow-lg shadow-cosmic-saturated/30 transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className={`relative z-10 flex items-center justify-center gap-2 ${isRTL ? 'font-arabic' : ''}`}>
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              {t('form.submitting')}
                            </>
                          ) : (
                            <>
                              {t('form.submit')}
                              <Send className={`w-4 h-4 group-hover:${isRTL ? '-translate-x' : 'translate-x'}-1 transition-transform`} />
                            </>
                          )}
                        </span>
                      </motion.button>

                      <p className={`text-xs text-gray-500 text-center ${isRTL ? 'font-arabic' : ''}`}>
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
