import { motion } from 'framer-motion'
import { Sparkles, Star, Rocket, Target, Users, Award } from '../components/ui/Icons'
import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
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
            <span className="text-sm text-gray-300">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">We Are</span>
            <br />
            <span className="text-white">Sawalancer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A cosmic creative agency dedicated to transforming brands through innovative design, 
            strategic thinking, and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To launch brands into new dimensions through creative excellence and strategic innovation.' },
            { icon: Star, title: 'Our Vision', desc: 'To be the leading cosmic creative force that shapes the future of digital experiences.' },
            { icon: Rocket, title: 'Our Values', desc: 'Creativity, Innovation, Excellence, and Client Success drive everything we do.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cosmic-card p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-cosmic-saturated to-cosmic-dark flex items-center justify-center">
                <item.icon className="w-8 h-8 text-cosmic-glow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About