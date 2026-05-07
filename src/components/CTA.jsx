import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import GlowButton from "./ui/GlowButton";
import { Link } from "react-router-dom";

const CTA = () => {
  const { t, i18n } = useTranslation('home')
  const isArabic = i18n.language === 'ar'

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
          {/* Decorative Elements */}
          <Rocket className="absolute top-8 left-8 w-12 h-12 text-cosmic-glow/20 rotate-45" />
          <Sparkles className="absolute bottom-8 right-8 w-10 h-10 text-cosmic-sky/20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
              <span className="text-gradient">{t('cta.title1')}</span>
              <br />
              <span className="text-white">{t('cta.title2')}</span>
              <br />
              <span className="text-gradient">{t('cta.title3')}</span>
            </h2>

            <p className={`text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/contact"}>
                <GlowButton className={`text-lg px-8 md:px-10 py-4 group ${isArabic ? 'font-arabic' : ''}`}>
                  {t('cta.button1')}
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </GlowButton>
              </Link>
              <GlowButton variant="secondary" className={`text-lg px-8 md:px-10 py-4 ${isArabic ? 'font-arabic' : ''}`}>
                {t('cta.button2')}
              </GlowButton>
            </div>

            <p className={`text-gray-400 text-sm mt-8 ${isArabic ? 'font-arabic' : ''}`}>
              {t('cta.footnote')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
