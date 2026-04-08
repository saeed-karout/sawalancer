import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { 
  Menu, X, Sparkles, MessageCircle, Phone, 
  Mail, MapPin, Send, ExternalLink, ChevronDown,
  Zap, Star, Crown, Gem, Rocket, Globe, Home
} from './ui/Icons'

const Navbar = () => {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoveredLink, setHoveredLink] = useState(null)
  
  const location = useLocation()
  const dropdownRef = useRef(null)
  const contactDropdownRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) {
        setIsContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsContactOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { 
      name: t('navigation.home'), 
      href: '/',
      icon: Home
    },
    { 
      name: t('navigation.services'), 
      href: '/services',
      dropdown: [
        { name: isRTL ? 'الهوية التجارية' : 'Brand Identity', href: '/branding', icon: Crown, desc: isRTL ? 'تحويل العلامة التجارية الكونية' : 'Cosmic brand transformation' },
        { name: isRTL ? 'تطوير الويب' : 'Web Development', href: '/web', icon: Globe, desc: isRTL ? 'حلول ويب نجمية' : 'Stellar web solutions' },
        { name: isRTL ? 'التسويق الرقمي' : 'Digital Marketing', href: '/marketing', icon: Rocket, desc: isRTL ? 'أطلق وصولك' : 'Launch your reach' },
        { name: isRTL ? 'تحسين محركات البحث' : 'SEO & Analytics', href: '/seo', icon: Zap, desc: isRTL ? 'نمو قائم على البيانات' : 'Data-driven growth' },
      ]
    },
    { 
      name: t('navigation.portfolio'), 
      href: '/portfolio' 
    },
    { 
      name: t('navigation.about'), 
      href: '/about' 
    },
    { 
      name: t('navigation.blog'), 
      href: '/blog' 
    },
    { 
      name: t('navigation.contact'), 
      href: '/contact' 
    },
  ]

  const contactInfo = {
    whatsapp: {
      number: '1234567890',
      message: isRTL ? 'مرحباً%20سوالانسر!%20أرغب%20في%20مناقشة%20مشروع.' : 'Hello%20Sawalancer!%20I%20would%20like%20to%20discuss%20a%20project.',
      link: `https://wa.me/1234567890?text=${isRTL ? 'مرحباً%20سوالانسر!%20أرغب%20في%20مناقشة%20مشروع.' : 'Hello%20Sawalancer!%20I%20would%20like%20to%20discuss%20a%20project.'}`
    },
    email: 'hello@sawalancer.com',
    phone: '+1 (234) 567-890',
    address: 'Cosmic HQ, Digital Galaxy'
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  // Quick Contact Button Component
  const QuickContactButton = () => (
    <div className="relative" ref={contactDropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsContactOpen(!isContactOpen)}
        className="relative px-5 py-2.5 rounded-full font-semibold text-sm tracking-wider
                   bg-gradient-to-r from-cosmic-saturated to-cosmic-dark 
                   text-white shadow-lg shadow-cosmic-saturated/30 
                   hover:shadow-cosmic-saturated/50 transition-all duration-300
                   flex items-center gap-2 group overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Zap className="w-4 h-4" />
          {isRTL ? 'تواصل' : 'Contact'}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />
      </motion.button>

      {/* Contact Dropdown */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full ${isRTL ? 'right-0' : 'right-0'} mt-4 w-80 glass rounded-2xl p-5 z-50`}
          >
            <div className={`absolute -top-2 ${isRTL ? 'right-6' : 'right-6'} w-4 h-4 glass rotate-45`} />
            
            {/* Header */}
            <div className={`flex items-center gap-3 mb-5 ${isRTL ? '' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-cosmic-saturated to-cosmic-dark rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cosmic-glow" />
              </div>
              <div>
                <h3 className="text-white font-bold">{isRTL ? 'لنتواصل' : "Let's Connect"}</h3>
                <p className="text-xs text-gray-400">{isRTL ? 'اختر قناتك' : 'Choose your channel'}</p>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-2 mb-5">
              {/* WhatsApp */}
              <motion.a
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: isRTL ? 3 : 3 }}
                className={`flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/30 
                         hover:bg-green-500/20 transition-all group ${isRTL ? '' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-gray-400 text-xs">{isRTL ? 'رد سريع' : 'Quick response'}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: isRTL ? 3 : 3 }}
                className={`flex items-center gap-3 p-3 rounded-xl bg-cosmic-saturated/10 border border-cosmic-saturated/30 
                         hover:bg-cosmic-saturated/20 transition-all group ${isRTL ? '' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-cosmic-saturated/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cosmic-glow" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{isRTL ? 'راسلنا' : 'Email Us'}</p>
                  <p className="text-gray-400 text-xs truncate">{contactInfo.email}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </motion.a>

              {/* Call */}
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ x: isRTL ? 3 : 3 }}
                className={`flex items-center gap-3 p-3 rounded-xl bg-cosmic-sky/10 border border-cosmic-sky/30 
                         hover:bg-cosmic-sky/20 transition-all group ${isRTL ? '' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-cosmic-sky/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cosmic-sky" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{isRTL ? 'اتصل الآن' : 'Call Now'}</p>
                  <p className="text-gray-400 text-xs">{contactInfo.phone}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </motion.a>
            </div>

            {/* Go to Contact Page */}
            <Link
              to="/contact"
              onClick={() => setIsContactOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-cosmic-saturated/20 to-cosmic-dark/20 
                       border border-cosmic-glow/30 text-cosmic-glow text-sm font-semibold hover:bg-cosmic-saturated/30 transition-all"
            >
              {isRTL ? 'اذهب إلى صفحة التواصل' : 'Go to Contact Page'} →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass py-3 shadow-2xl shadow-cosmic-saturated/10' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`flex items-center gap-2 group ${isRTL ? '' : ''}`}
              onMouseEnter={() => setHoveredLink('logo')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-1 rounded-full border border-cosmic-glow/30"
                />
                
                <div className="relative w-10 h-10 bg-gradient-to-br from-cosmic-saturated via-cosmic-medium to-cosmic-dark rounded-xl flex items-center justify-center shadow-lg shadow-cosmic-saturated/30">
                  <Sparkles className="w-5 h-5 text-cosmic-glow" />
                </div>
              </div>
              
              <span className={`text-2xl font-bold text-gradient tracking-tight ${isRTL ? 'font-arabic' : ''}`}>
                {t('siteName')}
              </span>

              <motion.div
                initial={{ opacity: 0, x: isRTL ? -5 : -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-cosmic-saturated/20 to-cosmic-dark/20 
                         border border-cosmic-glow/30 text-[9px] font-semibold text-cosmic-glow uppercase tracking-wider"
              >
                <Star className="w-2.5 h-2.5 inline mr-0.5" />
                {isRTL ? 'مميز' : 'Premium'}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-1 ${isRTL ? '' : ''}`}>
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  ref={link.dropdown ? dropdownRef : null}
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 group
                      ${isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'}
                      ${isRTL ? 'flex-row-reverse' : ''}`}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span className={isRTL ? 'font-arabic' : ''}>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 
                        ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                    
                    {/* Active indicator */}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cosmic-glow to-cosmic-sky"
                      />
                    )}
                    
                    {/* Hover underline */}
                    {!isActive(link.href) && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredLink === link.name ? 1 : 0 }}
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cosmic-saturated/50 to-cosmic-sky/50"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-72 glass rounded-xl p-3 z-50`}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                          >
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cosmic-saturated/20 to-cosmic-dark/20 
                                          flex items-center justify-center group-hover:from-cosmic-saturated/40">
                              <item.icon className="w-4 h-4 text-cosmic-glow" />
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-semibold text-sm">{item.name}</p>
                              <p className="text-gray-400 text-xs">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        
                        <div className="mt-2 pt-2 border-t border-cosmic-saturated/20">
                          <Link 
                            to="/services" 
                            className={`text-cosmic-glow text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all px-3 py-1 ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Quick Contact Button */}
              <div className="ml-2">
                <QuickContactButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className={`lg:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher />
              <QuickContactButton />
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 glass rounded-xl flex items-center justify-center text-white"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="glass m-4 rounded-2xl p-4">
              {/* Mobile Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all
                        ${isActive(link.href) 
                          ? 'bg-cosmic-saturated/20 text-white' 
                          : 'hover:bg-white/5 text-gray-300'}
                        ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span className={isRTL ? 'font-arabic' : ''}>{link.name}</span>
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    
                    {link.dropdown && (
                      <div className={`ml-4 pl-3 border-l border-cosmic-saturated/30 space-y-1 mt-1 ${isRTL ? 'mr-4 pr-3 border-l-0 border-r' : ''}`}>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            <item.icon className="w-3.5 h-3.5 text-cosmic-glow" />
                            <span className="text-gray-300 text-sm">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-cosmic-saturated/20">
                <p className="text-xs text-gray-400 mb-2">{isRTL ? 'تواصل سريع' : 'Quick Contact'}</p>
                <div className="space-y-1.5">
                  <a
                    href={contactInfo.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-2.5 rounded-lg bg-green-500/10 border border-green-500/30 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">{isRTL ? 'محادثة واتساب' : 'Chat on WhatsApp'}</span>
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-2.5 rounded-lg bg-cosmic-saturated/10 border border-cosmic-saturated/30 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <Mail className="w-4 h-4 text-cosmic-glow" />
                    <span className="text-white text-sm">{isRTL ? 'صفحة التواصل' : 'Contact Page'}</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar