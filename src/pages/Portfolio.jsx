import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  Sparkles, ExternalLink, Search, X, 
  ChevronRight, Calendar, User, Tag, Award,
  ChevronLeft, ChevronUp, ArrowRight
} from '../components/ui/Icons'
import SectionTitle from '../components/ui/SectionTitle'

const Portfolio = () => {
  const { t, i18n } = useTranslation('portfolio')
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  
  const isRTL = i18n.language === 'ar'
  
  const filters = [
    { id: 'all', name: t('filters.all') },
    { id: 'branding', name: t('filters.branding') },
    { id: 'web', name: t('filters.web') },
    { id: 'marketing', name: t('filters.marketing') },
    { id: 'content', name: t('filters.content') },
  ]
  
  const projects = [
    {
      id: 1,
      title: 'Nebula Finance',
      titleAr: 'نبيولا فاينانس',
      category: 'branding',
      client: 'Nebula FinTech',
      clientAr: 'نبيولا للتقنية المالية',
      year: '2024',
      description: 'Complete brand identity for a next-gen fintech startup revolutionizing digital banking.',
      descriptionAr: 'هوية تجارية متكاملة لشركة ناشئة في مجال التقنية المالية تُحدث ثورة في الخدمات المصرفية الرقمية.',
      challenge: 'Create a distinctive brand identity that conveys trust and innovation in the competitive fintech space.',
      challengeAr: 'إنشاء هوية تجارية مميزة تنقل الثقة والابتكار في مجال التقنية المالية التنافسي.',
      solution: 'Developed a cosmic-inspired brand system with a modern color palette, custom typography, and a versatile logo system.',
      solutionAr: 'تطوير نظام هوية تجارية مستوحى من الفضاء مع لوحة ألوان عصرية وخطوط مخصصة ونظام شعار متعدد الاستخدامات.',
      results: [
        '250% increase in brand recognition',
        '40% growth in user acquisition',
        'Featured in TechCrunch and Forbes'
      ],
      resultsAr: [
        'زيادة بنسبة 250% في التعرف على العلامة التجارية',
        'نمو بنسبة 40% في اكتساب المستخدمين',
        'ظهور في تك كرانش وفوربس'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop',
      ],
      tags: ['Branding', 'Strategy', 'Design'],
      gradient: 'from-purple-600 to-blue-600',
      featured: true
    },
    {
      id: 2,
      title: 'Stellar E-Commerce',
      titleAr: 'ستيلار للتجارة الإلكترونية',
      category: 'web',
      client: 'Stellar Retail Group',
      clientAr: 'مجموعة ستيلار للتجزئة',
      year: '2023',
      description: 'High-performance e-commerce platform with cosmic UX and advanced analytics.',
      descriptionAr: 'منصة تجارة إلكترونية عالية الأداء مع تجربة مستخدم كونية وتحليلات متقدمة.',
      challenge: 'Build a scalable e-commerce solution that handles high traffic while providing an exceptional user experience.',
      challengeAr: 'بناء حل تجارة إلكترونية قابل للتطوير يتعامل مع حركة مرور عالية مع توفير تجربة مستخدم استثنائية.',
      solution: 'Created a headless e-commerce architecture with React and Node.js, featuring real-time inventory and AI-powered recommendations.',
      solutionAr: 'إنشاء بنية تجارة إلكترونية بدون رأس باستخدام React و Node.js، تتميز بالمخزون في الوقت الفعلي والتوصيات المدعومة بالذكاء الاصطناعي.',
      results: [
        '300% increase in conversion rate',
        '50% reduction in load time',
        '$2M+ revenue in first quarter'
      ],
      resultsAr: [
        'زيادة بنسبة 300% في معدل التحويل',
        'انخفاض بنسبة 50% في وقت التحميل',
        'إيرادات تزيد عن 2 مليون دولار في الربع الأول'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      ],
      tags: ['Web', 'E-commerce', 'React'],
      gradient: 'from-blue-600 to-cyan-500',
      featured: true
    },
    {
      id: 3,
      title: 'Galaxy Campaign',
      titleAr: 'حملة جالاكسي',
      category: 'marketing',
      client: 'Galaxy Beverages',
      clientAr: 'مشروبات جالاكسي',
      year: '2024',
      description: 'Viral marketing campaign reaching 10M+ impressions across social platforms.',
      descriptionAr: 'حملة تسويقية انتشرت بشكل واسع ووصلت إلى أكثر من 10 ملايين مشاهدة عبر منصات التواصل الاجتماعي.',
      challenge: 'Launch a new product line and create buzz in a saturated beverage market.',
      challengeAr: 'إطلاق خط إنتاج جديد وخلق ضجة في سوق المشروبات المشبع.',
      solution: 'Executed a multi-channel campaign with influencer partnerships, interactive content, and targeted ads.',
      solutionAr: 'تنفيذ حملة متعددة القنوات مع شراكات المؤثرين والمحتوى التفاعلي والإعلانات المستهدفة.',
      results: [
        '10M+ impressions',
        '500K+ engagements',
        '200% ROI on ad spend'
      ],
      resultsAr: [
        'أكثر من 10 ملايين مشاهدة',
        'أكثر من 500 ألف تفاعل',
        'عائد استثمار 200% على الإنفاق الإعلاني'
      ],
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
      ],
      tags: ['Marketing', 'Social Media', 'Campaign'],
      gradient: 'from-indigo-600 to-purple-600',
      featured: false
    },
    {
      id: 4,
      title: 'Cosmic Content Studio',
      titleAr: 'استوديو المحتوى الكوني',
      category: 'content',
      client: 'Cosmic Media',
      clientAr: 'كوزميك ميديا',
      year: '2023',
      description: 'Award-winning content strategy and production for a media powerhouse.',
      descriptionAr: 'استراتيجية وإنتاج محتوى حائز على جوائز لشركة إعلامية رائدة.',
      challenge: 'Create engaging content that stands out in a crowded digital landscape.',
      challengeAr: 'إنشاء محتوى جذاب يبرز في المشهد الرقمي المزدحم.',
      solution: 'Developed a comprehensive content strategy with video series, blog content, and social media assets.',
      solutionAr: 'تطوير استراتيجية محتوى شاملة مع سلسلة فيديوهات ومحتوى مدونة وأصول وسائل التواصل الاجتماعي.',
      results: [
        '1M+ video views',
        'Top 10 podcast ranking',
        '3 industry awards'
      ],
      resultsAr: [
        'أكثر من مليون مشاهدة فيديو',
        'تصنيف ضمن أفضل 10 بودكاست',
        '3 جوائز صناعية'
      ],
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      ],
      tags: ['Content', 'Video', 'Strategy'],
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 5,
      title: 'Orbit Analytics',
      titleAr: 'أوربت أناليتكس',
      category: 'web',
      client: 'Orbit Data',
      clientAr: 'أوربت داتا',
      year: '2024',
      description: 'Real-time analytics dashboard with stunning visualizations and predictive insights.',
      descriptionAr: 'لوحة تحليلات في الوقت الفعلي مع تصورات مذهلة ورؤى تنبؤية.',
      challenge: 'Transform complex data into actionable insights through an intuitive interface.',
      challengeAr: 'تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ من خلال واجهة بديهية.',
      solution: 'Built a custom dashboard with D3.js visualizations, real-time WebSocket updates, and ML predictions.',
      solutionAr: 'بناء لوحة تحكم مخصصة مع تصورات D3.js وتحديثات WebSocket في الوقت الفعلي وتنبؤات التعلم الآلي.',
      results: [
        '90% user satisfaction',
        '60% faster decision making',
        '$1M+ cost savings'
      ],
      resultsAr: [
        'رضا مستخدم بنسبة 90%',
        'اتخاذ قرار أسرع بنسبة 60%',
        'توفير في التكاليف يزيد عن مليون دولار'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      ],
      tags: ['Analytics', 'Dashboard', 'AI'],
      gradient: 'from-blue-500 to-indigo-600',
      featured: false
    },
    {
      id: 6,
      title: 'Lunar Lifestyle',
      titleAr: 'لايف ستايل القمر',
      category: 'branding',
      client: 'Lunar Brands',
      clientAr: 'لونار براندز',
      year: '2023',
      description: 'Premium lifestyle brand identity and comprehensive brand guidelines.',
      descriptionAr: 'هوية تجارية فاخرة لأسلوب حياة ودليل شامل للعلامة التجارية.',
      challenge: 'Create a cohesive brand identity across multiple product lines and touchpoints.',
      challengeAr: 'إنشاء هوية تجارية متماسكة عبر خطوط إنتاج ونقاط اتصال متعددة.',
      solution: 'Designed a modular brand system with flexible logo variations, color palettes, and photography style.',
      solutionAr: 'تصميم نظام هوية تجارية معياري مع تنوعات شعار مرنة ولوحات ألوان وأسلوب تصوير.',
      results: [
        'Brand value increased 150%',
        'Successful international expansion',
        'Premium market positioning'
      ],
      resultsAr: [
        'زيادة قيمة العلامة التجارية بنسبة 150%',
        'توسع دولي ناجح',
        'تمركز في السوق الفاخر'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      ],
      tags: ['Branding', 'Strategy', 'Design'],
      gradient: 'from-purple-600 to-indigo-600',
      featured: false
    },
  ]

  const filteredProjects = projects
    .filter(p => activeFilter === 'all' || p.category === activeFilter)
    .filter(p => {
      const searchLower = searchTerm.toLowerCase()
      return p.title.toLowerCase().includes(searchLower) ||
             p.titleAr.includes(searchTerm) ||
             p.description.toLowerCase().includes(searchLower) ||
             p.tags.some(tag => tag.toLowerCase().includes(searchLower))
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return parseInt(b.year) - parseInt(a.year)
      if (sortBy === 'oldest') return parseInt(a.year) - parseInt(b.year)
      return 0
    })

  const stats = [
    { value: '250+', label: t('stats.projects'), icon: Award },
    { value: '180+', label: t('stats.clients'), icon: User },
    { value: '25+', label: t('stats.awards'), icon: Award },
    { value: '8+', label: t('stats.years'), icon: Calendar },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className="text-sm text-gray-300">{t('subtitle')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">{t('title')}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cosmic-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-cosmic-glow mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-full capitalize transition-all duration-300 text-sm ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-cosmic-saturated to-cosmic-dark text-white shadow-lg shadow-cosmic-saturated/30'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </motion.div>

            {/* Search and Sort */}
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={isRTL ? "ابحث عن مشروع..." : "Search projects..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full glass text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cosmic-sky w-48"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-full glass text-white text-sm focus:outline-none"
              >
                <option value="newest">{isRTL ? "الأحدث" : "Newest"}</option>
                <option value="oldest">{isRTL ? "الأقدم" : "Oldest"}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  {isRTL ? "لم يتم العثور على مشاريع" : "No projects found"}
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-cosmic-glow to-cosmic-sky rounded-full text-white">
                          {isRTL ? "مميز" : "Featured"}
                        </span>
                      </div>
                    )}
                    
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={isRTL ? project.titleAr : project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                    </div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-cosmic-glow text-sm font-semibold uppercase tracking-wider mb-2">
                          {filters.find(f => f.id === project.category)?.name}
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {isRTL ? project.titleAr : project.title}
                        </h3>
                        <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                          {isRTL ? project.descriptionAr : project.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Load More Button */}
          {filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="glass px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all">
                {t('buttons.viewAll')}
                <ChevronRight className={`inline ml-2 w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="cosmic-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64 md:h-80">
                  <img 
                    src={selectedProject.image} 
                    alt={isRTL ? selectedProject.titleAr : selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-50`} />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs glass rounded-full text-cosmic-glow">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {isRTL ? selectedProject.titleAr : selectedProject.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {t('project.client')}: {isRTL ? selectedProject.clientAr : selectedProject.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {t('project.category')}: {filters.find(f => f.id === selectedProject.category)?.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {t('project.year')}: {selectedProject.year}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{t('project.challenge')}</h3>
                      <p className="text-gray-300">
                        {isRTL ? selectedProject.challengeAr : selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{t('project.solution')}</h3>
                      <p className="text-gray-300">
                        {isRTL ? selectedProject.solutionAr : selectedProject.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{t('project.results')}</h3>
                      <ul className="space-y-2">
                        {(isRTL ? selectedProject.resultsAr : selectedProject.results).map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Award className="w-5 h-5 text-cosmic-glow flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedProject.gallery.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {selectedProject.gallery.map((img, i) => (
                            <img 
                              key={i}
                              src={img} 
                              alt={`Gallery ${i + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio