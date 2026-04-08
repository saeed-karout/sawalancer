import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Trophy, Users, Target, Award } from 'lucide-react'

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [counts, setCounts] = useState({ projects: 0, clients: 0, satisfaction: 0, awards: 0 })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const targetCounts = { projects: 250, clients: 180, satisfaction: 98, awards: 25 }
      let step = 0

      const timer = setInterval(() => {
        step++
        setCounts({
          projects: Math.min(Math.round((targetCounts.projects / steps) * step), targetCounts.projects),
          clients: Math.min(Math.round((targetCounts.clients / steps) * step), targetCounts.clients),
          satisfaction: Math.min(Math.round((targetCounts.satisfaction / steps) * step), targetCounts.satisfaction),
          awards: Math.min(Math.round((targetCounts.awards / steps) * step), targetCounts.awards),
        })

        if (step >= steps) clearInterval(timer)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [inView])

  const statItems = [
    { icon: Trophy, value: counts.projects, suffix: '+', label: 'Projects Completed', color: 'from-cosmic-glow to-cosmic-medium' },
    { icon: Users, value: counts.clients, suffix: '+', label: 'Happy Clients', color: 'from-cosmic-sky to-cosmic-mid' },
    { icon: Target, value: counts.satisfaction, suffix: '%', label: 'Satisfaction Rate', color: 'from-cosmic-saturated to-cosmic-dark' },
    { icon: Award, value: counts.awards, suffix: '+', label: 'Industry Awards', color: 'from-cosmic-medium to-cosmic-navy' },
  ]

  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="glass rounded-3xl p-12 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cosmic-saturated/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cosmic-sky/20 rounded-full blur-[100px]" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {statItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} p-4`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {item.value}{item.suffix}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats