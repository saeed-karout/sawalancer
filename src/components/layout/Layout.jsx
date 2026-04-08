import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ParticleField from '../ui/ParticleField'
import ScrollToTop from './ScrollToTop'
import SEO from './SEO'

const Layout = ({ children, seoProps = {} }) => {
  return (
    <>
      <SEO {...seoProps} />
      <div className="relative min-h-screen">
        <ParticleField />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main>
            {children}
          </motion.main>
        </AnimatePresence>
        {/* <Footer />   */}
        <ScrollToTop />
      </div>
    </>
  )
}

export default Layout