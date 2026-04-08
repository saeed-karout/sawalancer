import { motion } from 'framer-motion'
import { Sparkles } from '../components/ui/Icons'
import SectionTitle from '../components/ui/SectionTitle'
import CosmicCard from '../components/ui/CosmicCard'
import { 
  Palette, Code2, Megaphone, TrendingUp, 
  Video, Search, Rocket 
} from '../components/ui/Icons'

const Services = ({ serviceType }) => {
  const allServices = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Crafting unique brand identities that resonate with your audience and stand out in the cosmos.',
      color: 'from-cosmic-glow to-cosmic-medium',
      type: 'branding'
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and applications with cutting-edge technology.',
      color: 'from-cosmic-sky to-cosmic-mid',
      type: 'web'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that amplify your reach and drive meaningful engagement.',
      color: 'from-cosmic-saturated to-cosmic-dark',
      type: 'marketing'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to boost your visibility and dominate search rankings.',
      color: 'from-cosmic-mid to-cosmic-navy',
      type: 'seo'
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Compelling visual content that tells your story and captivates your target audience.',
      color: 'from-cosmic-medium to-cosmic-saturated',
      type: 'content'
    },
    {
      icon: Search,
      title: 'Analytics & Insights',
      description: 'Deep analytics and actionable insights to optimize your digital presence.',
      color: 'from-cosmic-dark to-cosmic-glow',
      type: 'analytics'
    },
  ]

  const displayServices = serviceType 
    ? allServices.filter(s => s.type === serviceType)
    : allServices

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cosmic-glow" />
            <span className="text-sm text-gray-300">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Cosmic</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive creative solutions to launch your brand into new dimensions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <CosmicCard key={index} delay={index * 0.1}>
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 flex items-center justify-center`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </CosmicCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services