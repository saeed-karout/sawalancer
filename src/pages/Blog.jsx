import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles, Calendar, User, ArrowRight } from '../components/ui/Icons'
import { Link } from 'react-router-dom'

const Blog = () => {
  const { t, i18n } = useTranslation('blog')
  const isArabic = i18n.language === 'ar'
  const posts = [
    {
      id: 1,
      title: isArabic ? 'مستقبل التسويق الرقمي في 2024' : 'The Future of Digital Marketing in 2024',
      excerpt: isArabic ? 'اكتشف أحدث الاتجاهات التي تشكل مشهد التسويق الرقمي وكيف تتقدم بخطوة.' : 'Discover the latest trends shaping the digital marketing landscape and how to stay ahead.',
      date: 'Jan 15, 2024',
      author: isArabic ? 'سارة جونسون' : 'Sarah Johnson',
      category: t('categories.marketing'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: isArabic ? 'بناء هوية علامة تجارية كونية' : 'Building a Cosmic Brand Identity',
      excerpt: isArabic ? 'تعلّم كيف تبني هوية علامة تجارية مميزة في العالم الرقمي المزدحم.' : 'Learn how to create a brand identity that stands out in the crowded digital universe.',
      date: 'Jan 10, 2024',
      author: isArabic ? 'مايكل تشين' : 'Michael Chen',
      category: t('categories.design'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: isArabic ? 'استراتيجيات SEO فعّالة حقاً' : 'SEO Strategies That Actually Work',
      excerpt: isArabic ? 'تقنيات SEO مجربة لرفع ترتيب موقعك وزيادة الزيارات العضوية.' : 'Proven SEO techniques to boost your website rankings and drive organic traffic.',
      date: 'Jan 5, 2024',
      author: isArabic ? 'إيميلي رودريغيز' : 'Emily Rodriguez',
      category: t('categories.strategy'),
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop'
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
            <span className={`text-sm text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>{t('hero.badge')}</span>
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            <span className="text-gradient">{t('hero.title')}</span>
            <br />
            <span className="text-white">{t('hero.title2')}</span>
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {t('hero.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cosmic-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold glass rounded-full text-cosmic-glow">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cosmic-glow transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className={`inline-flex items-center gap-1 text-cosmic-glow text-sm font-semibold hover:gap-2 transition-all ${isArabic ? 'font-arabic' : ''}`}
                >
                  {t('post.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
