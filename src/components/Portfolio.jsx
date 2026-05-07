import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, ChevronRight } from './ui/Icons'
import SectionTitle from './ui/SectionTitle'
import { Link, Navigate } from 'react-router-dom'

const Portfolio = () => {
  const { t, i18n } = useTranslation('portfolio')
  const isRTL = i18n.language === 'ar'
  const [activeFilter, setActiveFilter] = useState('all')
  
  // استخدام الفلاتر من الترجمة
  const filterKeys = ['all', 'branding', 'web', 'marketing', 'content']
  const filters = filterKeys.map(key => ({
    id: key,   
    label: t(`filters.${key}`)
  }))
  
  // استخدام المشاريع من الترجمة
  const projects = t('projects', { returnObjects: true }) || []

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cosmic-saturated/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cosmic-sky/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionTitle 
          subtitle={t('section.subtitle')}
          title={t('section.title')}
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex flex-wrap justify-center gap-3 mb-12 ${isRTL ? 'rtl' : ''}`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 text-sm font-medium ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cosmic-saturated to-cosmic-dark text-white shadow-lg shadow-cosmic-saturated/30'
                  : 'glass text-gray-400 hover:text-white'
              } ${isRTL ? 'font-arabic' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isRTL ? 'rtl' : ''}`}>
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <p className={`text-gray-400 text-lg ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'لا توجد مشاريع في هذه الفئة' : 'No projects in this category'}
                </p>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  </div>

                  {/* Overlay Content */}
                  <div className={`absolute inset-0 p-6 flex flex-col justify-end ${isRTL ? 'text-right' : ''}`}>
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-cosmic-glow text-sm font-semibold uppercase tracking-wider mb-2">
                        {filters.find(f => f.id === project.category)?.label || project.category}
                      </p>
                      <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                        {project.title}
                      </h3>
                      <p className={`text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isRTL ? 'font-arabic' : ''}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Icons */}
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <button 
                      className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label={t('buttons.viewProject')}
                    >
                      <ExternalLink size={18} />
                    </button>
                  </div>

                  {/* Featured Badge for first project */}
                  {index === 0 && (
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                      <span className={`px-3 py-1 text-xs font-bold bg-gradient-to-r from-cosmic-glow to-cosmic-sky rounded-full text-white ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'مميز' : 'Featured'}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
            <Link 
          to="/portfolio" className={`glass px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}
           
          >
            <span className={isRTL ? 'font-arabic' : ''}>{t('buttons.viewAll')}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: '250+', label: t('stats.projects') },
            { value: '180+', label: t('stats.clients') },
            { value: '25+', label: t('stats.awards') },
            { value: '8+', label: t('stats.years') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`cosmic-card p-6 text-center ${isRTL ? 'rtl' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className={`text-gray-400 text-sm ${isRTL ? 'font-arabic' : ''}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio