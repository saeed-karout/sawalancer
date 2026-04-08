import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'  // إزالة Github
import SectionTitle from './ui/SectionTitle'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = ['all', 'branding', 'web', 'marketing', 'content']
  
  const projects = [
    {
      id: 1,
      title: 'Nebula Finance',
      category: 'branding',
      description: 'Complete brand identity for a next-gen fintech startup',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      id: 2,
      title: 'Stellar E-Commerce',
      category: 'web',
      description: 'High-performance e-commerce platform with cosmic UX',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 3,
      title: 'Galaxy Campaign',
      category: 'marketing',
      description: 'Viral marketing campaign reaching 10M+ impressions',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      id: 4,
      title: 'Cosmic Content Studio',
      category: 'content',
      description: 'Award-winning content strategy and production',
      image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Orbit Analytics',
      category: 'web',
      description: 'Real-time analytics dashboard with stunning visuals',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 6,
      title: 'Lunar Lifestyle',
      category: 'branding',
      description: 'Premium lifestyle brand identity and guidelines',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      gradient: 'from-purple-600 to-indigo-600',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle 
          subtitle="Our Work"
          title="Projects That Shine"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cosmic-saturated to-cosmic-dark text-white shadow-lg shadow-cosmic-saturated/30'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
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
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-cosmic-glow text-sm font-semibold uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="glass px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio