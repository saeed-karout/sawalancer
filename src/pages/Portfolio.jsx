import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionTitle from '../components/ui/SectionTitle'
import { pageSEO, generateSchema } from '../utils/seoConfig'
import { 
  Sparkles, ExternalLink, Search, X, 
  ChevronRight, Calendar, User, Tag, Award,
  Filter, Grid, List, Eye, Heart, Share2,
  ChevronLeft, ChevronUp, Trophy, Users, Target,
  Rocket, Star, Zap, Crown, Globe, Code2, Megaphone,
  TrendingUp, Video, Palette
} from '../components/ui/Icons'

const Portfolio = () => {
  const { t, i18n } = useTranslation('portfolio')
  const isRTL = i18n.language === 'ar'
  
  const seoProps = {
    ...pageSEO.portfolio,
    schema: generateSchema.organization()
  }

  // States
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [showFilters, setShowFilters] = useState(false)
  const [likedProjects, setLikedProjects] = useState([])

  // Filter options
  const filterOptions = [
    { id: 'all', label: t('filters.all'), icon: Grid },
    { id: 'branding', label: t('filters.branding'), icon: Palette },
    { id: 'web', label: t('filters.web'), icon: Code2 },
    { id: 'marketing', label: t('filters.marketing'), icon: Megaphone },
    { id: 'content', label: t('filters.content'), icon: Video },
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: isRTL ? 'نبيولا فاينانس' : 'Nebula Finance',
      category: 'branding',
      client: isRTL ? 'نبيولا للتقنية المالية' : 'Nebula FinTech',
      year: '2024',
      description: isRTL 
        ? 'هوية تجارية متكاملة لشركة ناشئة في مجال التقنية المالية تُحدث ثورة في الخدمات المصرفية الرقمية.'
        : 'Complete brand identity for a next-gen fintech startup revolutionizing digital banking.',
      challenge: isRTL 
        ? 'إنشاء هوية تجارية مميزة تنقل الثقة والابتكار في مجال التقنية المالية التنافسي.'
        : 'Create a distinctive brand identity that conveys trust and innovation in the competitive fintech space.',
      solution: isRTL
        ? 'تطوير نظام هوية تجارية مستوحى من الفضاء مع لوحة ألوان عصرية وخطوط مخصصة ونظام شعار متعدد الاستخدامات.'
        : 'Developed a cosmic-inspired brand system with a modern color palette, custom typography, and a versatile logo system.',
      results: isRTL ? [
        'زيادة بنسبة 250% في التعرف على العلامة التجارية',
        'نمو بنسبة 40% في اكتساب المستخدمين',
        'ظهور في تك كرانش وفوربس'
      ] : [
        '250% increase in brand recognition',
        '40% growth in user acquisition',
        'Featured in TechCrunch and Forbes'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop',
      ],
      tags: ['Branding', 'Strategy', 'Design'],
      gradient: 'from-purple-600 to-blue-600',
      featured: true,
      likes: 245,
      views: 1890
    },
    {
      id: 2,
      title: isRTL ? 'ستيلار للتجارة الإلكترونية' : 'Stellar E-Commerce',
      category: 'web',
      client: isRTL ? 'مجموعة ستيلار للتجزئة' : 'Stellar Retail Group',
      year: '2023',
      description: isRTL
        ? 'منصة تجارة إلكترونية عالية الأداء مع تجربة مستخدم كونية وتحليلات متقدمة.'
        : 'High-performance e-commerce platform with cosmic UX and advanced analytics.',
      challenge: isRTL
        ? 'بناء حل تجارة إلكترونية قابل للتطوير يتعامل مع حركة مرور عالية مع توفير تجربة مستخدم استثنائية.'
        : 'Build a scalable e-commerce solution that handles high traffic while providing an exceptional user experience.',
      solution: isRTL
        ? 'إنشاء بنية تجارة إلكترونية بدون رأس باستخدام React و Node.js، تتميز بالمخزون في الوقت الفعلي والتوصيات المدعومة بالذكاء الاصطناعي.'
        : 'Created a headless e-commerce architecture with React and Node.js, featuring real-time inventory and AI-powered recommendations.',
      results: isRTL ? [
        'زيادة بنسبة 300% في معدل التحويل',
        'انخفاض بنسبة 50% في وقت التحميل',
        'إيرادات تزيد عن 2 مليون دولار في الربع الأول'
      ] : [
        '300% increase in conversion rate',
        '50% reduction in load time',
        '$2M+ revenue in first quarter'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      ],
      tags: ['Web', 'E-commerce', 'React'],
      gradient: 'from-blue-600 to-cyan-500',
      featured: true,
      likes: 189,
      views: 1450
    },
    {
      id: 3,
      title: isRTL ? 'حملة جالاكسي' : 'Galaxy Campaign',
      category: 'marketing',
      client: isRTL ? 'مشروبات جالاكسي' : 'Galaxy Beverages',
      year: '2024',
      description: isRTL
        ? 'حملة تسويقية انتشرت بشكل واسع ووصلت إلى أكثر من 10 ملايين مشاهدة عبر منصات التواصل الاجتماعي.'
        : 'Viral marketing campaign reaching 10M+ impressions across social platforms.',
      challenge: isRTL
        ? 'إطلاق خط إنتاج جديد وخلق ضجة في سوق المشروبات المشبع.'
        : 'Launch a new product line and create buzz in a saturated beverage market.',
      solution: isRTL
        ? 'تنفيذ حملة متعددة القنوات مع شراكات المؤثرين والمحتوى التفاعلي والإعلانات المستهدفة.'
        : 'Executed a multi-channel campaign with influencer partnerships, interactive content, and targeted ads.',
      results: isRTL ? [
        'أكثر من 10 ملايين مشاهدة',
        'أكثر من 500 ألف تفاعل',
        'عائد استثمار 200% على الإنفاق الإعلاني'
      ] : [
        '10M+ impressions',
        '500K+ engagements',
        '200% ROI on ad spend'
      ],
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
      ],
      tags: ['Marketing', 'Social Media', 'Campaign'],
      gradient: 'from-indigo-600 to-purple-600',
      featured: false,
      likes: 312,
      views: 2200
    },
    {
      id: 4,
      title: isRTL ? 'استوديو المحتوى الكوني' : 'Cosmic Content Studio',
      category: 'content',
      client: isRTL ? 'كوزميك ميديا' : 'Cosmic Media',
      year: '2023',
      description: isRTL
        ? 'استراتيجية وإنتاج محتوى حائز على جوائز لشركة إعلامية رائدة.'
        : 'Award-winning content strategy and production for a media powerhouse.',
      challenge: isRTL
        ? 'إنشاء محتوى جذاب يبرز في المشهد الرقمي المزدحم.'
        : 'Create engaging content that stands out in a crowded digital landscape.',
      solution: isRTL
        ? 'تطوير استراتيجية محتوى شاملة مع سلسلة فيديوهات ومحتوى مدونة وأصول وسائل التواصل الاجتماعي.'
        : 'Developed a comprehensive content strategy with video series, blog content, and social media assets.',
      results: isRTL ? [
        'أكثر من مليون مشاهدة فيديو',
        'تصنيف ضمن أفضل 10 بودكاست',
        '3 جوائز صناعية'
      ] : [
        '1M+ video views',
        'Top 10 podcast ranking',
        '3 industry awards'
      ],
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      ],
      tags: ['Content', 'Video', 'Strategy'],
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
      likes: 156,
      views: 1200
    },
    {
      id: 5,
      title: isRTL ? 'أوربت أناليتكس' : 'Orbit Analytics',
      category: 'web',
      client: isRTL ? 'أوربت داتا' : 'Orbit Data',
      year: '2024',
      description: isRTL
        ? 'لوحة تحليلات في الوقت الفعلي مع تصورات مذهلة ورؤى تنبؤية.'
        : 'Real-time analytics dashboard with stunning visualizations and predictive insights.',
      challenge: isRTL
        ? 'تحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ من خلال واجهة بديهية.'
        : 'Transform complex data into actionable insights through an intuitive interface.',
      solution: isRTL
        ? 'بناء لوحة تحكم مخصصة مع تصورات D3.js وتحديثات WebSocket في الوقت الفعلي وتنبؤات التعلم الآلي.'
        : 'Built a custom dashboard with D3.js visualizations, real-time WebSocket updates, and ML predictions.',
      results: isRTL ? [
        'رضا مستخدم بنسبة 90%',
        'اتخاذ قرار أسرع بنسبة 60%',
        'توفير في التكاليف يزيد عن مليون دولار'
      ] : [
        '90% user satisfaction',
        '60% faster decision making',
        '$1M+ cost savings'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      ],
      tags: ['Analytics', 'Dashboard', 'AI'],
      gradient: 'from-blue-500 to-indigo-600',
      featured: false,
      likes: 278,
      views: 2100
    },
    {
      id: 6,
      title: isRTL ? 'لايف ستايل القمر' : 'Lunar Lifestyle',
      category: 'branding',
      client: isRTL ? 'لونار براندز' : 'Lunar Brands',
      year: '2023',
      description: isRTL
        ? 'هوية تجارية فاخرة لأسلوب حياة ودليل شامل للعلامة التجارية.'
        : 'Premium lifestyle brand identity and comprehensive brand guidelines.',
      challenge: isRTL
        ? 'إنشاء هوية تجارية متماسكة عبر خطوط إنتاج ونقاط اتصال متعددة.'
        : 'Create a cohesive brand identity across multiple product lines and touchpoints.',
      solution: isRTL
        ? 'تصميم نظام هوية تجارية معياري مع تنوعات شعار مرنة ولوحات ألوان وأسلوب تصوير.'
        : 'Designed a modular brand system with flexible logo variations, color palettes, and photography style.',
      results: isRTL ? [
        'زيادة قيمة العلامة التجارية بنسبة 150%',
        'توسع دولي ناجح',
        'تمركز في السوق الفاخر'
      ] : [
        'Brand value increased 150%',
        'Successful international expansion',
        'Premium market positioning'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      ],
      tags: ['Branding', 'Strategy', 'Design'],
      gradient: 'from-purple-600 to-indigo-600',
      featured: false,
      likes: 134,
      views: 980
    }
  ]

  // Filter and sort projects
  const filteredProjects = projects
    .filter(p => activeFilter === 'all' || p.category === activeFilter)
    .filter(p => {
      const searchLower = searchTerm.toLowerCase()
      return p.title.toLowerCase().includes(searchLower) ||
             p.description.toLowerCase().includes(searchLower) ||
             p.tags.some(tag => tag.toLowerCase().includes(searchLower))
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return parseInt(b.year) - parseInt(a.year)
      if (sortBy === 'oldest') return parseInt(a.year) - parseInt(b.year)
      if (sortBy === 'popular') return b.views - a.views
      if (sortBy === 'liked') return b.likes - a.likes
      return 0
    })

  // Stats
  const stats = [
    { value: '250+', label: t('stats.projects'), icon: Trophy },
    { value: '180+', label: t('stats.clients'), icon: Users },
    { value: '25+', label: t('stats.awards'), icon: Award },
    { value: '8+', label: t('stats.years'), icon: Calendar }
  ]

  const toggleLike = (projectId) => {
    setLikedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  return (
    <Layout seoProps={seoProps}>
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
              <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.badge')}
              </span>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.description')}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-cosmic-glow/50" />
        </motion.div>
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
                whileHover={{ y: -5 }}
                className={`cosmic-card p-6 text-center ${isRTL ? 'rtl' : ''}`}
              >
                <stat.icon className="w-8 h-8 text-cosmic-glow mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className={`text-gray-400 text-sm ${isRTL ? 'font-arabic' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 sticky top-20 z-30 bg-cosmic-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`flex flex-col lg:flex-row gap-4 justify-between items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 text-sm flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-cosmic-saturated to-cosmic-dark text-white shadow-lg shadow-cosmic-saturated/30'
                      : 'glass text-gray-400 hover:text-white'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <filter.icon className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : ''}>{filter.label}</span>
                </button>
              ))}
            </div>

            {/* Search, Sort, View Controls */}
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Search */}
              <div className="relative">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400`} />
                <input
                  type="text"
                  placeholder={isRTL ? 'ابحث عن مشروع...' : 'Search projects...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 rounded-full glass text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cosmic-sky w-56`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-400 hover:text-white`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-4 py-2 rounded-full glass text-white text-sm focus:outline-none ${isRTL ? 'font-arabic' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="newest">{isRTL ? 'الأحدث' : 'Newest'}</option>
                <option value="oldest">{isRTL ? 'الأقدم' : 'Oldest'}</option>
                <option value="popular">{isRTL ? 'الأكثر مشاهدة' : 'Most Viewed'}</option>
                <option value="liked">{isRTL ? 'الأكثر إعجاباً' : 'Most Liked'}</option>
              </select>

              {/* View Mode */}
              <div className="flex gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    viewMode === 'grid' ? 'bg-cosmic-saturated/30 text-cosmic-glow' : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    viewMode === 'list' ? 'bg-cosmic-saturated/30 text-cosmic-glow' : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
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
                <p className={`text-gray-400 text-lg ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'لم يتم العثور على مشاريع' : 'No projects found'}
                </p>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isRTL ? 'rtl' : ''}`}>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isRTL={isRTL}
                    isLiked={likedProjects.includes(project.id)}
                    onLike={() => toggleLike(project.id)}
                    onView={() => setSelectedProject(project)}
                    t={t}
                  />
                ))}
              </div>
            ) : (
              <div className={`space-y-4 ${isRTL ? 'rtl' : ''}`}>
                {filteredProjects.map((project, index) => (
                  <ProjectListItem
                    key={project.id}
                    project={project}
                    index={index}
                    isRTL={isRTL}
                    isLiked={likedProjects.includes(project.id)}
                    onLike={() => toggleLike(project.id)}
                    onView={() => setSelectedProject(project)}
                    t={t}
                  />
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
              <button className={`glass px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className={isRTL ? 'font-arabic' : ''}>
                  {isRTL ? 'تحميل المزيد' : 'Load More'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform group-hover:translate-y-1`} />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isRTL={isRTL}
        t={t}
        filterOptions={filterOptions}
      />
    </Layout>
  )
}

// Project Card Component
const ProjectCard = ({ project, index, isRTL, isLiked, onLike, onView, t }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={onView}
    >
      {project.featured && (
        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-10`}>
          <span className={`px-3 py-1 text-xs font-bold bg-gradient-to-r from-cosmic-glow to-cosmic-sky rounded-full text-white ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'مميز' : 'Featured'}
          </span>
        </div>
      )}

      <div className="relative h-80 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
      </div>

      <div className={`absolute inset-0 p-6 flex flex-col justify-end ${isRTL ? 'text-right' : ''}`}>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-cosmic-glow text-sm font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </p>
          <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
            {project.title}
          </h3>
          <p className={`text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
            {project.description}
          </p>
        </div>
      </div>

      <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
        <button 
          className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); onLike(); }}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
        <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  )
}

// Project List Item Component
const ProjectListItem = ({ project, index, isRTL, isLiked, onLike, onView, t }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isRTL ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="cosmic-card p-4 group cursor-pointer"
      onClick={onView}
    >
      <div className={`flex flex-col md:flex-row gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
        <div className="relative w-full md:w-48 h-32 overflow-hidden rounded-xl flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {project.featured && (
            <div className="absolute top-2 left-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-cosmic-glow to-cosmic-sky rounded-full text-white">
                ★
              </span>
            </div>
          )}
        </div>

        <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-cosmic-glow uppercase">{project.category}</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>
          <h3 className={`text-xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
            {project.title}
          </h3>
          <p className={`text-gray-400 text-sm mb-3 line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 text-xs glass rounded-full text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex items-center gap-2 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <button 
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); onLike(); }}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
          <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Eye className="w-4 h-4" />
            <span>{project.views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Project Modal Component
const ProjectModal = ({ project, onClose, isRTL, t, filterOptions }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`cosmic-card max-w-4xl w-full max-h-[90vh] overflow-y-auto ${isRTL ? 'rtl' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 md:h-80">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50`} />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs glass rounded-full text-cosmic-glow">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {project.title}
              </h2>

              <div className={`flex flex-wrap gap-6 text-sm text-gray-400 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {t('project.client')}: {project.client}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {t('project.category')}: {filterOptions.find(f => f.id === project.category)?.label || project.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {t('project.year')}: {project.year}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-semibold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('project.challenge')}
                  </h3>
                  <p className={`text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('project.solution')}
                  </h3>
                  <p className={`text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t('project.results')}
                  </h3>
                  <ul className={`space-y-2 ${isRTL ? 'pr-5' : 'pl-5'}`}>
                    {project.results.map((result, i) => (
                      <li key={i} className={`flex items-start gap-2 text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Award className="w-5 h-5 text-cosmic-glow flex-shrink-0 mt-0.5" />
                        <span className={isRTL ? 'font-arabic' : ''}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.gallery && project.gallery.length > 0 && (
                  <div>
                    <h3 className={`text-xl font-semibold text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                      {t('project.gallery')}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {project.gallery.map((img, i) => (
                        <img 
                          key={i}
                          src={img} 
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-24 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Share and Like buttons */}
              <div className={`flex gap-3 mt-8 pt-6 border-t border-cosmic-saturated/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button className="glass px-4 py-2 rounded-full text-white text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
                  <Share2 className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : ''}>{isRTL ? 'مشاركة' : 'Share'}</span>
                </button>
                <button className="glass px-4 py-2 rounded-full text-white text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
                  <Heart className="w-4 h-4" />
                  <span className={isRTL ? 'font-arabic' : ''}>{isRTL ? 'إعجاب' : 'Like'}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ChevronDown Icon (add to Icons.jsx if not exists)
const ChevronDown = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)



export default Portfolio