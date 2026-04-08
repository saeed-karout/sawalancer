import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="text-cosmic-sky text-sm font-semibold tracking-[0.3em] uppercase">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-cosmic-saturated to-cosmic-sky rounded-full mt-4 mx-auto" />
    </motion.div>
  )
}

export default SectionTitle