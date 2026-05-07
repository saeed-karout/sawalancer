import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles, Rocket, Target, Users, Heart, Briefcase, ArrowRight } from '../components/ui/Icons'
import Layout from '../components/layout/Layout'
import GlowButton from '../components/ui/GlowButton'

const Careers = () => {
  const { t, i18n } = useTranslation('common')
  const isRTL = i18n.language === 'ar'

  const values = [
    { icon: Rocket, title: isRTL ? 'الابتكار' : 'Innovation', description: isRTL ? 'ندفع الحدود ونتبنى الأفكار الجديدة' : 'We push boundaries and embrace new ideas' },
    { icon: Target, title: isRTL ? 'التميّز' : 'Excellence', description: isRTL ? 'نسعى للإتقان في كل ما نقوم به' : 'We strive for perfection in everything we do' },
    { icon: Users, title: isRTL ? 'التعاون' : 'Collaboration', description: isRTL ? 'نؤمن بقوة العمل الجماعي' : 'We believe in the power of teamwork' },
    { icon: Heart, title: isRTL ? 'الشغف' : 'Passion', description: isRTL ? 'نحب ما نقوم به ويظهر ذلك في عملنا' : 'We love what we do and it shows in our work' }
  ]

  const jobs = [
    {
      title: isRTL ? 'استراتيجي علامة تجارية أول' : 'Senior Brand Strategist',
      type: isRTL ? 'دوام كامل' : 'Full-time',
      location: isRTL ? 'عن بُعد' : 'Remote',
      description: isRTL ? 'قيادة استراتيجية العلامة التجارية لعملائنا' : 'Lead brand strategy for our cosmic clients'
    },
    {
      title: isRTL ? 'مطور فل ستاك' : 'Full Stack Developer',
      type: isRTL ? 'دوام كامل' : 'Full-time',
      location: isRTL ? 'عن بُعد' : 'Remote',
      description: isRTL ? 'بناء تجارب ويب مميزة بتقنيات حديثة' : 'Build stellar web experiences with modern technologies'
    },
    {
      title: isRTL ? 'مصمم UI/UX' : 'UI/UX Designer',
      type: isRTL ? 'دوام كامل' : 'Full-time',
      location: isRTL ? 'عن بُعد' : 'Remote',
      description: isRTL ? 'تصميم واجهات مستخدم جميلة وسهلة' : 'Design beautiful and intuitive user interfaces'
    },
    {
      title: isRTL ? 'أخصائي تسويق رقمي' : 'Digital Marketing Specialist',
      type: isRTL ? 'دوام كامل' : 'Full-time',
      location: isRTL ? 'عن بُعد' : 'Remote',
      description: isRTL ? 'إنشاء حملات رقمية ذات أثر' : 'Create impactful digital campaigns'
    }
  ]

  return (
    <Layout seoProps={{ title: isRTL ? 'وظائف في سوالانسر' : 'Careers at Sawalancer', description: isRTL ? 'انضم إلى فريقنا' : 'Join our cosmic team' }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-saturated/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-sky/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cosmic-glow" />
              <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>{isRTL ? 'انضم إلى فريقنا' : 'Join Our Team'}</span>
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              <span className="text-gradient">{isRTL ? 'وظائف كونية' : 'Cosmic Careers'}</span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'انضم إلى فريقنا الإبداعي وساعدنا في بناء مستقبل التجارب الرقمية' : 'Join our creative team and help us build the future of digital experiences'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'لماذا تنضم إلى سوالانسر؟' : 'Why Join Sawalancer?'}
              </h2>
              <p className={`text-gray-400 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'نحن أكثر من مجرد فريق، نحن عائلة من العقول الإبداعية تعمل معاً لصنع التأثير.' : 'We\'re more than just a team. We\'re a family of creative minds working together to create magic.'}
              </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cosmic-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-cosmic-saturated to-cosmic-dark flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-cosmic-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-cosmic-saturated/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
               {isRTL ? 'الوظائف المتاحة' : 'Open Positions'}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`cosmic-card p-6 group cursor-pointer transition-all hover:border-cosmic-glow/50 ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`flex items-start justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className={`flex gap-4 text-sm text-gray-400 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="text-gray-400">{job.description}</p>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-cosmic-glow transition-transform group-hover:${isRTL ? '-translate-x' : 'translate-x'}-1 flex-shrink-0 ${isRTL ? 'ml-4 rotate-180' : 'ml-4'}`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className={`text-gray-400 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'لم تجد الوظيفة المناسبة؟ أرسل لنا سيرتك الذاتية!' : 'Don\'t see the role you\'re looking for? Send us your resume!'}
            </p>
            <GlowButton className="inline-block">
              {isRTL ? 'قدّم الآن' : 'Apply Now'}
              <Rocket className="inline ml-2 w-4 h-4" />
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default Careers
