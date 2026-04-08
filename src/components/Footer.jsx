import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  Sparkles, Mail, Phone, MapPin, Send,
  MessageCircle
} from './ui/Icons'

const Footer = () => {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: isRTL ? 'الهوية التجارية' : 'Brand Strategy', href: '/branding' },
      { name: isRTL ? 'تطوير الويب' : 'Web Development', href: '/web' },
      { name: isRTL ? 'التسويق الرقمي' : 'Digital Marketing', href: '/marketing' },
      { name: isRTL ? 'تحسين محركات البحث' : 'SEO', href: '/seo' },
      { name: isRTL ? 'صناعة المحتوى' : 'Content Creation', href: '/services' }
    ],
    company: [
      { name: isRTL ? 'عن الوكالة' : 'About Us', href: '/about' },
      { name: isRTL ? 'أعمالنا' : 'Our Work', href: '/portfolio' },
      { name: isRTL ? 'وظائف' : 'Careers', href: '/careers' },
      { name: isRTL ? 'المدونة' : 'Blog', href: '/blog' }
    ],
    legal: [
      { name: t('footer.privacy'), href: '/privacy' },
      { name: t('footer.terms'), href: '/terms' },
      { name: t('footer.cookies'), href: '/cookies' }
    ]
  }

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      href: 'https://wa.me/1234567890',
      color: 'hover:text-green-400'
    },
    { 
      name: 'Instagram', 
      icon: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'LinkedIn', 
      icon: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'X', 
      icon: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-gray-300'
    }
  ]

  return (
    <footer className="relative pt-20 pb-10 border-t border-cosmic-saturated/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 ${isRTL ? 'rtl' : ''}`}>
          {/* Brand Column */}
          <div className={`lg:col-span-2 ${isRTL ? 'text-right' : ''}`}>
            <Link to="/" className={`flex items-center gap-2 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cosmic-saturated to-cosmic-dark rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cosmic-glow" />
                </div>
              </div>
              <span className={`text-2xl font-bold text-gradient ${isRTL ? 'font-arabic' : ''}`}>
                {t('siteName')}
              </span>
            </Link>
            
            <p className={`text-gray-400 mb-6 max-w-md ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.description')}
            </p>

            {/* Newsletter */}
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <input 
                type="email" 
                placeholder={t('footer.subscribePlaceholder')} 
                className={`flex-1 px-4 py-3 rounded-full glass text-white placeholder-gray-400 focus:outline-none focus:border-cosmic-sky ${isRTL ? 'text-right font-arabic' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-cosmic-saturated to-cosmic-dark flex items-center justify-center hover:shadow-lg hover:shadow-cosmic-saturated/30 transition-all">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className={`text-white font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={`text-gray-400 hover:text-cosmic-glow transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className={`text-white font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={`text-gray-400 hover:text-cosmic-glow transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className={isRTL ? 'text-right' : ''}>
            <h4 className={`text-white font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-4 h-4 text-cosmic-sky" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-cosmic-glow">
                  {t('footer.email')}
                </a>
              </li>
              <li className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-4 h-4 text-cosmic-sky" />
                <a href={`tel:${t('footer.phone')}`} className="hover:text-cosmic-glow">
                  {t('footer.phone')}
                </a>
              </li>
              <li className={`flex items-center gap-3 text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-4 h-4 text-cosmic-sky" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
            
            <h4 className={`text-white font-semibold mt-6 mb-4 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.legal')}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={`text-gray-400 hover:text-cosmic-glow transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-cosmic-saturated/20 flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className={`text-gray-400 text-sm ${isRTL ? 'font-arabic' : ''}`}>
            © {currentYear} {t('siteName')}. {t('footer.rights')}. {t('footer.crafted')}.
          </p>

          <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 transition-all ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer