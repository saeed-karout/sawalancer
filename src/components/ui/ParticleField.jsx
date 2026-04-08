import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ParticleField = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cosmic-glow/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: ['0%', '-100%', '0%'],
            x: ['0%', '20%', '-20%', '0%'],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Shooting stars / Meteors */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`meteor-${i}`}
          className="meteor-effect"
          style={{
            top: `${20 + i * 30}%`,
            right: '0%',
          }}
          animate={{
            right: ['0%', '120%'],
            top: [`${20 + i * 30}%`, `${50 + i * 20}%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 7,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField