import Hero from '../components/Hero'
import ServicesSection from '../components/Services'
import Portfolio from '../components/Portfolio'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Portfolio />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home