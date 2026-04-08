import { motion } from 'framer-motion'

const CosmicCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`cosmic-card p-8 group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-saturated/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default CosmicCard