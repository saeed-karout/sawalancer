import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { 
  Menu, X, Sparkles, MessageCircle, Phone, 
  Mail, Send, ExternalLink, ChevronDown,
  Zap, Star, Crown, Rocket, Globe, Home,
  ChevronRight
} from './ui/Icons'

const Navbar = () => {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [expandedMobileItems, setExpandedMobileItems] = useState([])
  
  const location = useLocation()
  const navRef = useRef(null)
  const contactDropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const hoverTimeoutRef = useRef(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close contact dropdown if clicking outside
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) {
        setIsContactOpen(false)
      }
      
      // Close mobile menu if clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
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
    setExpandedMobileItems([])
  }, [location.pathname])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle dropdown hover with delay for better UX
  const handleDropdownEnter = useCallback((name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setActiveDropdown(name)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  // Toggle mobile submenu
  const toggleMobileSubmenu = (name) => {
    setExpandedMobileItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  const navLinks = [
    { 
      name: t('navigation.home'), 
      href: '/',
      icon: Home
    },
    { 
      name: t('navigation.services'), 
      href: '/services',
      hasDropdown: true,
      dropdown: [
        { 
          name: isRTL ? 'الهوية التجارية' : 'Brand Identity', 
          href: '/branding', 
          icon: Crown, 
          desc: isRTL ? 'تحويل العلامة التجارية الكونية' : 'Cosmic brand transformation' 
        },
        { 
          name: isRTL ? 'تطوير الويب' : 'Web Development', 
          href: '/web', 
          icon: Globe, 
          desc: isRTL ? 'حلول ويب نجمية' : 'Stellar web solutions' 
        },
        { 
          name: isRTL ? 'التسويق الرقمي' : 'Digital Marketing', 
          href: '/marketing', 
          icon: Rocket, 
          desc: isRTL ? 'أطلق وصولك' : 'Launch your reach' 
        },
        { 
          name: isRTL ? 'تحسين محركات البحث' : 'SEO & Analytics', 
          href: '/seo', 
          icon: Zap, 
          desc: isRTL ? 'نمو قائم على البيانات' : 'Data-driven growth' 
        },
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
      number: '+963957608833',
      message: isRTL 
        ? 'مرحباً%20سوالانسر!%20أرغب%20في%20مناقشة%20مشروع.' 
        : 'Hello%20Sawalancer!%20I%20would%20like%20to%20discuss%20a%20project.',
      link: `https://wa.me/963957608833?text=${isRTL ? 'مرحباً%20سوالانسر!%20أرغب%20في%20مناقشة%20مشروع.' : 'Hello%20Sawalancer!%20I%20would%20like%20to%20discuss%20a%20project.'}`
    },
    email: 'info@sawalancer.com',
    phone: '+963 957 608 833',
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  // Quick Contact Button Component
  const QuickContactButton = ({ isMobile = false }) => (
    <div className="relative" ref={isMobile ? null : contactDropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsContactOpen(!isContactOpen)}
        className={`relative rounded-full font-semibold text-sm tracking-wider
                   bg-gradient-to-r from-cosmic-saturated to-cosmic-dark 
                   text-white shadow-lg shadow-cosmic-saturated/30 
                   hover:shadow-cosmic-saturated/50 transition-all duration-300
                   flex items-center gap-2 group overflow-hidden
                   ${isMobile ? 'px-4 py-2 w-full justify-center' : 'px-5 py-2.5'}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span className={isRTL ? 'font-arabic' : ''}>
            {isRTL ? 'تواصل' : 'Contact'}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8 }}
        />
      </motion.button>

      {/* Contact Dropdown - Desktop only */}
      {!isMobile && (
        <AnimatePresence>
          {isContactOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} mt-3 w-80 glass rounded-2xl p-5 z-50`}
            >
              <div className={`absolute -top-2 ${isRTL ? 'left-6' : 'right-6'} w-4 h-4 glass rotate-45`} />
              
              {/* Header */}
              <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-cosmic-saturated to-cosmic-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-cosmic-glow" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <h3 className="text-white font-bold">{isRTL ? 'لنتواصل' : "Let's Connect"}</h3>
                  <p className="text-xs text-gray-400">{isRTL ? 'اختر قناتك المفضلة' : 'Choose your preferred channel'}</p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-2 mb-4">
                {/* WhatsApp */}
                <motion.a
                  href={contactInfo.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: isRTL ? -3 : 3 }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/30 
                           hover:bg-green-500/20 transition-all group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-gray-400 text-xs">{isRTL ? 'رد سريع خلال دقائق' : 'Quick response within minutes'}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white flex-shrink-0" />
                </motion.a>

                {/* Email */}
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ x: isRTL ? -3 : 3 }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-cosmic-saturated/10 border border-cosmic-saturated/30 
                           hover:bg-cosmic-saturated/20 transition-all group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-cosmic-saturated/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-cosmic-glow" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <p className="text-white font-semibold text-sm">{isRTL ? 'البريد الإلكتروني' : 'Email Us'}</p>
                    <p className="text-gray-400 text-xs truncate">{contactInfo.email}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white flex-shrink-0" />
                </motion.a>

                {/* Call */}
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: isRTL ? -3 : 3 }}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-cosmic-sky/10 border border-cosmic-sky/30 
                           hover:bg-cosmic-sky/20 transition-all group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-cosmic-sky/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cosmic-sky" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <p className="text-white font-semibold text-sm">{isRTL ? 'اتصل بنا' : 'Call Now'}</p>
                    <p className="text-gray-400 text-xs">{contactInfo.phone}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white flex-shrink-0" />
                </motion.a>
              </div>

              {/* Go to Contact Page */}
              <Link
                to="/contact"
                onClick={() => setIsContactOpen(false)}
                className={`block w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-cosmic-saturated/20 to-cosmic-dark/20 
                         border border-cosmic-glow/30 text-cosmic-glow text-sm font-semibold hover:bg-cosmic-saturated/30 transition-all
                         ${isRTL ? 'font-arabic' : ''}`}
              >
                {isRTL ? 'اذهب إلى صفحة التواصل' : 'Go to Contact Page'} 
                <ChevronRight className={`inline w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass py-2 shadow-2xl shadow-cosmic-saturated/10' 
            : 'bg-transparent py-3'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`flex items-center gap-2 group `}
            >
              
             

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden sm:block "
              >
              <img src="/icons/Sawalancer logo brand-16.png" width={200} alt="" />
                
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-0.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={link.href}
                    className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 group whitespace-nowrap
                      ${isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'}
                      ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span className={isRTL ? 'font-arabic' : ''}>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 
                        ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                    
                    {/* Active indicator */}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cosmic-glow to-cosmic-sky"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-72 glass rounded-xl p-2 z-50`}
                        onMouseEnter={() => handleDropdownEnter(link.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                          >
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cosmic-saturated/20 to-cosmic-dark/20 
                                          flex items-center justify-center group-hover:from-cosmic-saturated/40 flex-shrink-0">
                              <item.icon className="w-4 h-4 text-cosmic-glow" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-semibold text-sm">{item.name}</p>
                              <p className="text-gray-400 text-xs truncate">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        
                        <div className="mt-2 pt-2 border-t border-cosmic-saturated/20">
                          <Link 
                            to="/services" 
                            className={`text-cosmic-glow text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all px-3 py-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
                            <ChevronRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Language Switcher */}
              <div className="mx-1">
                <LanguageSwitcher />
              </div>

              {/* Quick Contact Button */}
              <div className={isRTL ? 'mr-1' : 'ml-1'}>
                <QuickContactButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className={`lg:hidden flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher />
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mobile-menu-button relative w-10 h-10 glass rounded-xl flex items-center justify-center text-white"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: isRTL ? 300 : -300 }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? 300 : -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-16 ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-[85%] max-w-sm z-50 lg:hidden`}
            >
              <div className="h-full glass m-3 rounded-2xl p-4 overflow-y-auto">
                {/* Mobile Contact Button */}
                <div className="mb-4">
                  <QuickContactButton isMobile />
                </div>

                {/* Mobile Links */}
                <div className="space-y-0.5">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-cosmic-saturated/10 last:border-0">
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all
                              ${isActive(link.href) ? 'bg-cosmic-saturated/20 text-white' : 'text-gray-300'}
                              ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            <span className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              {link.icon && <link.icon className="w-5 h-5 text-cosmic-glow" />}
                              <span className={`font-medium ${isRTL ? 'font-arabic' : ''}`}>{link.name}</span>
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 
                              ${expandedMobileItems.includes(link.name) ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {expandedMobileItems.includes(link.name) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className={`${isRTL ? 'pr-4 mr-2 border-r' : 'pl-4 ml-2 border-l'} border-cosmic-saturated/30 space-y-0.5 pb-2`}>
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                                    >
                                      <item.icon className="w-4 h-4 text-cosmic-glow flex-shrink-0" />
                                      <div className={isRTL ? 'text-right' : ''}>
                                        <p className="text-white text-sm font-medium">{item.name}</p>
                                        <p className="text-gray-400 text-xs">{item.desc}</p>
                                      </div>
                                    </Link>
                                  ))}
                                  <Link
                                    to="/services"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-2 p-2.5 text-cosmic-glow text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                                  >
                                    {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
                                    <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all
                            ${isActive(link.href) ? 'bg-cosmic-saturated/20 text-white' : 'text-gray-300 hover:bg-white/5'}
                            ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          {link.icon && <link.icon className="w-5 h-5 text-cosmic-glow" />}
                          <span className={`font-medium ${isRTL ? 'font-arabic' : ''}`}>{link.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-cosmic-saturated/20">
                  <p className={`text-xs text-gray-400 mb-2 ${isRTL ? 'text-right font-arabic' : ''}`}>
                    {isRTL ? 'تواصل سريع' : 'Quick Contact'}
                  </p>
                  <div className="space-y-1.5">
                    <a
                      href={contactInfo.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/30 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className={`text-white text-sm ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'محادثة واتساب' : 'Chat on WhatsApp'}
                      </span>
                    </a>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-cosmic-saturated/10 border border-cosmic-saturated/30 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Mail className="w-5 h-5 text-cosmic-glow flex-shrink-0" />
                      <span className={`text-white text-sm ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'صفحة التواصل' : 'Contact Page'}
                      </span>
                    </Link>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-cosmic-sky/10 border border-cosmic-sky/30 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Phone className="w-5 h-5 text-cosmic-sky flex-shrink-0" />
                      <span className="text-white text-sm">{contactInfo.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-cosmic-saturated/20">
                  <p className={`text-xs text-gray-400 mb-2 ${isRTL ? 'text-right font-arabic' : ''}`}>
                    {isRTL ? 'تواصل معنا' : 'Connect with us'}
                  </p>
                  <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <a href={contactInfo.whatsapp.link} target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 glass rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${contactInfo.email}`} 
                       className="w-10 h-10 glass rounded-full flex items-center justify-center text-cosmic-glow hover:bg-cosmic-saturated/20 transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={`tel:${contactInfo.phone}`} 
                       className="w-10 h-10 glass rounded-full flex items-center justify-center text-cosmic-sky hover:bg-cosmic-sky/20 transition-all">
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-4 pt-4 border-t border-cosmic-saturated/20">
                  <p className={`text-xs text-gray-500 text-center ${isRTL ? 'font-arabic' : ''}`}>
                    © 2024 {t('siteName')}. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar