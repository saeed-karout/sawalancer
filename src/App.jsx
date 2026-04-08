import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

// Layout
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import NotFound from './pages/NotFound'

// SEO
import { pageSEO } from './utils/seoConfig'
import Footer from './components/Footer'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <Layout seoProps={pageSEO.home}>
              <Home />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout seoProps={pageSEO.about}>
              <About />
            </Layout>
          } />
          <Route path="/services" element={
            <Layout seoProps={pageSEO.services}>
              <Services />
            </Layout>
          } />
          <Route path="/portfolio" element={
            <Layout seoProps={pageSEO.portfolio}>
              <Portfolio />
            </Layout>
          } />
          <Route path="/blog" element={
            <Layout seoProps={pageSEO.blog}>
              <Blog />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout seoProps={pageSEO.contact}>
              <Contact />
            </Layout>
          } />
          <Route path="/pricing" element={
            <Layout seoProps={pageSEO.pricing}>
              <Pricing />
            </Layout>
          } />
          <Route path="/branding" element={
            <Layout seoProps={{ title: 'Brand Identity Services' }}>
              <Services serviceType="branding" />
            </Layout>
          } />
          <Route path="/web" element={
            <Layout seoProps={{ title: 'Web Development Services' }}>
              <Services serviceType="web" />
            </Layout>
          } />
          <Route path="/marketing" element={
            <Layout seoProps={{ title: 'Digital Marketing Services' }}>
              <Services serviceType="marketing" />
            </Layout>
          } />
          <Route path="/seo" element={
            <Layout seoProps={{ title: 'SEO & Analytics Services' }}>
              <Services serviceType="seo" />
            </Layout>
          } />
          
          {/* 404 Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App