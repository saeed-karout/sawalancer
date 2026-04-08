import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Nebula Tech',
      content: 'Sawalancer transformed our brand identity completely. Their cosmic approach to design is truly out of this world. The team\'s creativity and professionalism exceeded all expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616f7010333?w=100&h=100&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Stellar Apps',
      content: 'Working with Sawalancer was like launching a rocket to success. Their strategic insights and execution helped us reach new heights in our industry. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Cosmos',
      content: 'The team at Sawalancer doesn\'t just deliver projects; they deliver experiences. Their attention to detail and innovative solutions set them apart from any agency we\'ve worked with.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ]

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle 
          subtitle="Testimonials"
          title="What Our Clients Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cosmic-card p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cosmic-saturated/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cosmic-glow text-cosmic-glow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cosmic-saturated/50"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials