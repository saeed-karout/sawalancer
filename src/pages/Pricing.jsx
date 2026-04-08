import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, Star } from '../components/ui/Icons'
import GlowButton from '../components/ui/GlowButton'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small businesses starting their cosmic journey',
      features: [
        'Brand Strategy Session',
        'Logo Design (3 Concepts)',
        '5-Page Website',
        'Basic SEO Setup',
        'Social Media Setup',
        '1 Month Support'
      ],
      color: 'from-cosmic-navy to-cosmic-dark',
      popular: false
    },
    {
      name: 'Cosmic',
      price: '$15,000',
      description: 'For growing brands ready to expand their universe',
      features: [
        'Complete Brand Identity',
        '10-Page Custom Website',
        'Advanced SEO Strategy',
        'Content Creation (10 pieces)',
        'Social Media Management',
        'Email Marketing Setup',
        '3 Months Support',
        'Monthly Analytics Report'
      ],
      color: 'from-cosmic-saturated to-cosmic-mid',
      popular: true
    },
    {
      name: 'Galaxy',
      price: '$35,000+',
      description: 'Enterprise solutions for intergalactic domination',
      features: [
        'Full Brand Overhaul',
        'E-commerce Development',
        'Advanced SEO & PPC',
        'Content Strategy (Unlimited)',
        'Full Social Management',
        'Marketing Automation',
        '12 Months Support',
        'Dedicated Account Manager',
        'Weekly Strategy Calls'
      ],
      color: 'from-cosmic-dark to-cosmic-saturated',
      popular: false
    }
  ]

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
            <span className="text-sm text-gray-300">Simple Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Cosmic</span>
            <br />
            <span className="text-white">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your cosmic journey. All plans include our signature stellar service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative cosmic-card p-8 ${plan.popular ? 'border-cosmic-glow shadow-lg shadow-cosmic-saturated/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cosmic-glow to-cosmic-sky rounded-full text-white text-xs font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gradient mb-2">{plan.price}</div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cosmic-glow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <GlowButton className="w-full">
                Get Started
                <Star className="inline ml-2 w-4 h-4" />
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing