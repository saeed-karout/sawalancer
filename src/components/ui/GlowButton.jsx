import { motion } from 'framer-motion'

const GlowButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-cosmic-saturated to-cosmic-dark text-white shadow-lg shadow-cosmic-saturated/30 hover:shadow-cosmic-saturated/50',
    secondary: 'glass text-cosmic-glow border-cosmic-saturated/50 hover:bg-cosmic-saturated/20',
    outline: 'border-2 border-cosmic-sky text-cosmic-sky hover:bg-cosmic-sky/10',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-3 rounded-full font-semibold text-sm tracking-wider
        transition-all duration-300 overflow-hidden group
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />
    </motion.button>
  )
}

export default GlowButton