import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft, Share2 } from '../components/ui/Icons'
import Layout from '../components/layout/Layout'

const BlogPost = () => {
  const { t, i18n } = useTranslation('blog')
  const isArabic = i18n.language === 'ar'
  const { id } = useParams()

  // Mock blog posts - in a real app, this would come from an API or database
  const blogPosts = {
    '1': {
      title: isArabic ? 'مستقبل التسويق الرقمي في 2024' : 'The Future of Digital Marketing in 2024',
      excerpt: isArabic ? 'اكتشف أبرز الاتجاهات التي تشكل التسويق الرقمي وكيف تتقدم على المنافسين.' : 'Discover the latest trends shaping the digital marketing landscape and how to stay ahead.',
      date: 'Jan 15, 2024',
      author: isArabic ? 'سارة جونسون' : 'Sarah Johnson',
      category: isArabic ? 'التسويق' : 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      content: isArabic ? `
        <h2>مقدمة</h2>
        <p>يتطور التسويق الرقمي بسرعة كبيرة، وخلال 2024 تحتاج الشركات إلى التكيف مع أدوات جديدة وسلوكيات مستخدم مختلفة وخوارزميات منصات متغيرة باستمرار.</p>
        <h2>التخصيص بالذكاء الاصطناعي</h2>
        <p>يساعد الذكاء الاصطناعي على فهم العملاء بدقة أكبر، مما يتيح حملات تسويقية مخصصة ترفع معدلات التحويل وتحسن تجربة العميل بشكل واضح.</p>
        <h2>هيمنة محتوى الفيديو</h2>
        <p>لا يزال الفيديو يتصدر الأداء عبر المنصات. المحتوى القصير والطويل يحقق تفاعلاً أعلى وعائداً أفضل مقارنة بالمحتوى الثابت.</p>
        <h2>الخلاصة</h2>
        <p>متابعة الاتجاهات وتطبيقها بذكاء هو ما يصنع الفارق في 2024. الشركات الأسرع في التكيف هي الأكثر قدرة على النمو.</p>
      ` : `
        <h2>Introduction</h2>
        <p>Digital marketing is evolving at an unprecedented pace. In 2024, businesses that want to stay competitive must adapt to new technologies, consumer behaviors, and platform algorithms. This comprehensive guide covers the most impactful trends shaping the digital marketing landscape.</p>

        <h2>AI-Powered Personalization</h2>
        <p>Artificial intelligence is revolutionizing how brands interact with customers. Machine learning algorithms can now predict customer behavior with remarkable accuracy, enabling hyper-personalized marketing campaigns that significantly improve conversion rates and customer satisfaction.</p>

        <h2>Video Marketing Dominance</h2>
        <p>Video content continues to dominate across all platforms. From short-form TikTok videos to long-form YouTube content, video marketing generates higher engagement rates and better ROI than static content. Brands investing in video production are seeing substantial returns on their marketing investments.</p>

        <h2>Authenticity Over Perfection</h2>
        <p>Consumers are tired of overly polished, artificial content. Authentic, behind-the-scenes content that shows the real side of your brand resonates much better with audiences. This shift toward authenticity is reshaping content strategies across industries.</p>

        <h2>Conclusion</h2>
        <p>The digital marketing landscape in 2024 is dynamic and full of opportunities. By staying informed about these trends and adapting your strategies accordingly, your business can thrive in this evolving environment.</p>
      `
    },
    '2': {
      title: isArabic ? 'بناء هوية علامة تجارية كونية' : 'Building a Cosmic Brand Identity',
      excerpt: isArabic ? 'تعلّم كيف تبني هوية علامة تجارية تبرز بقوة في سوق رقمي مزدحم.' : 'Learn how to create a brand identity that stands out in the crowded digital universe.',
      date: 'Jan 10, 2024',
      author: isArabic ? 'مايكل تشين' : 'Michael Chen',
      category: isArabic ? 'الهوية' : 'Branding',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      content: isArabic ? `
        <h2>مقدمة</h2>
        <p>في سوق مليء بالعلامات الجديدة، لا يكفي شعار جميل فقط. الهوية القوية تجمع بين التصميم، الرسائل، والقيم لتقديم تجربة متماسكة ومقنعة.</p>
        <h2>تحديد هدف العلامة</h2>
        <p>ابدأ بسؤال: لماذا توجد علامتك؟ وضوح الهدف يساعدك على بناء رسالة أصيلة تلامس جمهورك وتُكسبك الثقة.</p>
        <h2>التصميم البصري</h2>
        <p>الشعار، الألوان، الخطوط، والصور يجب أن تعمل كنظام واحد متكامل ليكون حضورك واضحاً وسهل التذكر.</p>
        <h2>صوت العلامة</h2>
        <p>طريقة تواصلك مع الجمهور لا تقل أهمية عن شكلك البصري. الاتساق في نبرة الخطاب يعزز الهوية في كل نقطة تواصل.</p>
        <h2>الخلاصة</h2>
        <p>بناء الهوية رحلة مستمرة تتطلب وضوحاً والتزاماً وتطويراً دائماً مع نمو السوق.</p>
      ` : `
        <h2>Introduction</h2>
        <p>In a world where thousands of new brands launch every day, standing out requires more than just a nice logo. A cosmic brand identity encompasses everything from your visual design to your company values and messaging. It's about creating a cohesive experience that resonates with your target audience.</p>

        <h2>Define Your Brand Purpose</h2>
        <p>Before you can build a strong brand identity, you need to understand your why. What problem does your brand solve? What values do you stand for? Your brand purpose should be clear, authentic, and compelling.</p>

        <h2>Visual Identity Design</h2>
        <p>Your visual identity includes your logo, color palette, typography, and imagery. These elements should work together to create a memorable and recognizable brand that stands out in the marketplace.</p>

        <h2>Brand Voice and Messaging</h2>
        <p>How you communicate is just as important as what you look like. Develop a consistent brand voice that reflects your values and resonates with your audience. This voice should be evident in all your communications, from social media posts to customer service interactions.</p>

        <h2>Conclusion</h2>
        <p>Building a strong brand identity is a journey, not a destination. It requires consistent effort, clear vision, and willingness to adapt as your business and market evolve.</p>
      `
    },
    '3': {
      title: isArabic ? 'استراتيجيات SEO فعّالة فعلاً' : 'SEO Strategies That Actually Work',
      excerpt: isArabic ? 'تقنيات SEO مجربة لرفع ترتيب موقعك وزيادة الزيارات العضوية.' : 'Proven SEO techniques to boost your website rankings and drive organic traffic.',
      date: 'Jan 5, 2024',
      author: isArabic ? 'إيميلي رودريغيز' : 'Emily Rodriguez',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop',
      content: isArabic ? `
        <h2>مقدمة</h2>
        <p>تحسين محركات البحث لم يعد يعتمد على الحيل القديمة. اليوم، الجودة وتجربة المستخدم هما العاملان الأكثر تأثيراً في النتائج.</p>
        <h2>البحث عن الكلمات المفتاحية</h2>
        <p>ابدأ بفهم ما يبحث عنه جمهورك، ثم اختر كلمات مناسبة وادمجها بشكل طبيعي داخل محتوى مفيد.</p>
        <h2>جودة المحتوى</h2>
        <p>المحتوى العميق والدقيق الذي يجيب على أسئلة المستخدم بوضوح يحقق أداءً أفضل على المدى الطويل.</p>
        <h2>SEO التقني</h2>
        <p>سرعة الموقع، التوافق مع الجوال، هيكل الروابط، والربط الداخلي عوامل تقنية أساسية لتحسين الظهور.</p>
        <h2>الخلاصة</h2>
        <p>SEO استراتيجية مستمرة تحتاج صبراً وتطويراً دائماً، لكن نتائجها التراكمية قوية جداً.</p>
      ` : `
        <h2>Introduction</h2>
        <p>Search engine optimization has evolved significantly over the years. The old black-hat techniques don't work anymore, and Google's algorithms are smarter than ever. If you want to rank well in search results, you need to focus on creating valuable content and providing an excellent user experience.</p>

        <h2>Keyword Research and Optimization</h2>
        <p>Start by understanding what your target audience is searching for. Use tools like Google Keyword Planner to identify relevant keywords with good search volume and manageable competition. Then, optimize your content naturally around these keywords.</p>

        <h2>Content Quality and Relevance</h2>
        <p>Google prioritizes content that is authoritative, relevant, and helpful. Focus on creating comprehensive, well-researched content that genuinely answers user questions. Long-form content tends to perform better in search results.</p>

        <h2>Technical SEO</h2>
        <p>Your website's technical foundation matters. Ensure fast loading times, mobile responsiveness, clean URL structures, and proper internal linking. These technical factors significantly impact your search rankings.</p>

        <h2>Conclusion</h2>
        <p>SEO is a long-term strategy that requires patience and consistency. By focusing on user experience and creating valuable content, you'll see improvements in your search rankings over time.</p>
      `
    }
  }

  const post = blogPosts[id]

  if (!post) {
    return (
      <Layout seoProps={{ title: isArabic ? 'المقال غير موجود' : 'Post Not Found' }}>
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className={`text-4xl font-bold text-white mb-4 ${isArabic ? 'font-arabic' : ''}`}>{isArabic ? 'المقال غير موجود' : 'Post Not Found'}</h1>
            <Link to="/blog" className="text-cosmic-glow hover:text-cosmic-sky transition-colors">
              {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
            </Link>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout seoProps={{ title: post.title, description: post.excerpt }}>
      <article className="relative pt-32 pb-20">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl cosmic-card">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-background via-transparent to-transparent" />
          </div>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12">
          <Link to="/blog" className={`inline-flex items-center gap-2 text-cosmic-glow hover:text-cosmic-sky transition-colors mb-8 ${isArabic ? 'font-arabic' : ''}`}>
            <ArrowLeft className="w-4 h-4" />
            {isArabic ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* Category */}
            <span className="px-3 py-1 text-xs font-semibold glass rounded-full text-cosmic-glow mb-4 inline-block">
              {post.category}
            </span>

            {/* Title */}
            <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 leading-tight ${isArabic ? 'font-arabic' : ''}`}>
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-gray-400 mb-12 pb-8 border-b border-cosmic-saturated/20">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cosmic-sky" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-cosmic-sky" />
                <span>{post.author}</span>
              </div>
                <button className={`flex items-center gap-2 hover:text-cosmic-glow transition-colors ml-auto ${isArabic ? 'font-arabic' : ''}`}>
                  <Share2 className="w-4 h-4" />
                 {t('post.share')}
                </button>
              </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-white mt-8 mb-4">')
                  .replace(/<p>/g, '<p class="text-gray-300 leading-relaxed mb-4">')
              }}
            />

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-cosmic-saturated/20 cosmic-card p-6"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-saturated to-cosmic-dark flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">{post.author}</h4>
                   <p className="text-gray-400 text-sm">
                     {isArabic ? 'شغوف بالتسويق الرقمي وصناعة القصص الإبداعية، مع خبرة تتجاوز 8 سنوات في المجال.' : 'Passionate about digital marketing and creative storytelling. With over 8 years of experience in the industry.'}
                   </p>
                </div>
              </div>
            </motion.div>

            {/* Related Posts CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                to="/blog"
                className={`inline-flex items-center gap-2 glass px-8 py-3 rounded-full text-white hover:bg-white/10 transition-all ${isArabic ? 'font-arabic' : ''}`}
              >
                {isArabic ? 'اقرأ مقالات أكثر' : 'Read More Articles'}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
