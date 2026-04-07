/* eslint-disable no-unused-vars */
import { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Camera,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Globe,
  Layers,
  LineChart,
  Megaphone,
  Menu,
  MonitorSmartphone,
  MousePointerClick,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const navLinks = [
  { label: 'الرؤية', href: '#vision' },
  { label: 'الخدمات', href: '#services' },
  { label: 'المنهج', href: '#process' },
  { label: 'الأعمال', href: '#cases' },
  { label: 'الآراء', href: '#testimonials' },
  { label: 'الأسئلة', href: '#faq' },
];

const servicesByCategory = {
  الاستراتيجية: [
    {
      icon: LineChart,
      title: 'استراتيجية العلامة التجارية',
      desc: 'تحليل السوق والمنافسين وصناعة تموضع ذكي يثبتك في ذهن العميل.',
    },
    {
      icon: Search,
      title: 'SEO وتهيئة المحتوى',
      desc: 'رفع الظهور العضوي لكلمات مفتاحية عالية النية الشرائية.',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'تحليل البيانات والتقارير',
      desc: 'لوحات مؤشرات حية تقيس النمو، CAC، ROAS، ومعدل التحويل.',
    },
  ],
  الأداء: [
    {
      icon: Megaphone,
      title: 'إعلانات Meta وGoogle',
      desc: 'حملات موجهة متعددة المراحل من الوعي حتى إعادة الاستهداف.',
    },
    {
      icon: MousePointerClick,
      title: 'Performance Marketing',
      desc: 'اختبارات A/B مستمرة لتحسين النتائج وخفض تكلفة الاكتساب.',
    },
    {
      icon: Globe,
      title: 'توسّع إقليمي ودولي',
      desc: 'خطط دخول أسواق جديدة برسائل تناسب ثقافة كل سوق.',
    },
  ],
  الإبداع: [
    {
      icon: PenTool,
      title: 'هوية بصرية متكاملة',
      desc: 'شعار، نظام ألوان، دليل هوية، وأسلوب بصري يترك انطباعًا قويًا.',
    },
    {
      icon: Camera,
      title: 'تصوير المنتجات والخدمات',
      desc: 'إخراج بصري يرفع القيمة المدركة ويزيد معدل الإقناع.',
    },
    {
      icon: Clapperboard,
      title: 'فيديوهات إعلانية وموشن',
      desc: 'قصص قصيرة عالية التأثير مصممة خصيصًا للسوشال والمنصات الرقمية.',
    },
  ],
  التقنية: [
    {
      icon: MonitorSmartphone,
      title: 'تجارب صفحات هبوط',
      desc: 'Landing Pages سريعة وذكية ومهيأة للتحويل على كل الأجهزة.',
    },
    {
      icon: Bot,
      title: 'أتمتة التسويق',
      desc: 'سلاسل رسائل وتنبيهات ذكية تربط الإعلان بالمبيعات تلقائيًا.',
    },
    {
      icon: ShieldCheck,
      title: 'حوكمة العلامة الرقمية',
      desc: 'معايير نشر موحدة وضبط جودة يضمن حضورًا متسقًا في كل نقطة تماس.',
    },
  ],
};

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'نغوص في تفاصيل النشاط، شخصية الجمهور، والأهداف التجارية الأساسية.',
  },
  {
    step: '02',
    title: 'Orbit Design',
    desc: 'نصمم خريطة نمو تتضمن القنوات، الرسائل، ونقاط التحويل.',
  },
  {
    step: '03',
    title: 'Launch',
    desc: 'نطلق الحملة بإبداع جريء وبنية أداء قابلة للقياس لحظيًا.',
  },
  {
    step: '04',
    title: 'Optimization',
    desc: 'نحلل الأداء يوميًا وننفذ تحسينات دقيقة ترفع النتائج تدريجيًا.',
  },
  {
    step: '05',
    title: 'Scale',
    desc: 'نضاعف النجاحات إلى أسواق وقنوات جديدة دون التضحية بالهوية.',
  },
];

const caseStudies = [
  {
    title: 'إطلاق منصة SaaS خليجية',
    result: '+312% نمو في الاشتراكات خلال 90 يومًا',
    tag: 'B2B',
  },
  {
    title: 'إعادة تموضع علامة تجميل',
    result: '4.8x ROAS مع هوية جديدة بالكامل',
    tag: 'E-commerce',
  },
  {
    title: 'توسّع سلسلة مطاعم',
    result: '+220% زيادة زيارات الفروع من الحملات المحلية',
    tag: 'Retail',
  },
];

const testimonials = [
  {
    quote: 'Sawalancer حولت التسويق لدينا من حملات متفرقة إلى محرك نمو واضح ومتصاعد.',
    name: 'ليان الشمري',
    role: 'Chief Growth Officer',
  },
  {
    quote: 'أكثر شيء أبهرني هو المزج بين الإبداع والبيانات. كل قرار مدعوم برقم.',
    name: 'محمد البلوشي',
    role: 'CEO - NOVA Commerce',
  },
  {
    quote: 'فريق سريع، منظم، وجرئ بصريًا. النتائج ظهرت من أول شهر بشكل واضح.',
    name: 'سارة العتيبي',
    role: 'Marketing Director',
  },
];

const faqs = [
  {
    question: 'هل تناسب خدماتكم الشركات الناشئة فقط؟',
    answer:
      'نخدم الشركات الناشئة والمتوسطة والكبيرة. نضبط نطاق العمل حسب المرحلة وحجم السوق والأهداف.',
  },
  {
    question: 'هل يمكن تنفيذ المشروع بنظام شهري؟',
    answer:
      'نعم، نوفر باقات اشتراك شهرية، كما نوفر مشاريع خاصة للحملات الموسمية أو إطلاقات المنتجات.',
  },
  {
    question: 'متى تظهر النتائج عادة؟',
    answer:
      'نتائج الأداء الإعلاني تبدأ بالظهور خلال أسابيع، بينما النتائج التراكمية للعلامة والـSEO تحتاج 2-4 أشهر.',
  },
  {
    question: 'هل تتكفلون بالإبداع + التنفيذ + التحليل؟',
    answer:
      'نعم، نقدم دورة كاملة من الاستراتيجية وصناعة المحتوى وحتى إدارة الحملة والتحسين والتقارير.',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('الاستراتيجية');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroShift = useTransform(scrollYProgress, [0, 0.4], [0, -110]);

  const activeServices = useMemo(
    () => servicesByCategory[activeCategory],
    [activeCategory]
  );

  const nextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveTestimonial(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative">
      <motion.div className="progress-line" style={{ scaleX: progressScale }} />

      <div className="space-grid" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0828]/75 backdrop-blur-xl">
        <div className="mx-auto flex w-[min(1200px,92%)] items-center justify-between py-4">
          <a href="#top" className="group flex items-center gap-3">
            <div className="rounded-2xl border border-[#A4A0E4]/30 bg-[#20155C]/50 p-2">
              <Rocket className="h-5 w-5 rotate-45 text-[#A4A0E4]" />
            </div>
            <div>
              <p className="font-space text-lg font-bold tracking-[0.2em] text-[#A4A0E4]">
                SAWALANCER
              </p>
              <p className="text-xs text-[#A4A0E4]/70">Creative Growth Agency</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition hover:text-[#A4A0E4]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-2xl border border-[#368FDF]/40 bg-[#1D45B3]/40 px-5 py-2 text-sm font-semibold transition hover:border-[#A4A0E4] hover:bg-[#368FDF]/40 lg:inline-flex"
          >
            احجز استشارة
          </a>

          <button
            type="button"
            aria-label="menu"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded-xl border border-white/15 p-2 text-[#A4A0E4] lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[#0A0828]/95 lg:hidden">
            <div className="mx-auto grid w-[min(1200px,92%)] gap-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/85 transition hover:text-[#A4A0E4]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#4319B9] px-4 py-3 text-center font-semibold"
              >
                ابدأ مشروعك
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pb-24 pt-28">
        <section className="relative overflow-hidden" id="vision">
          <motion.div
            style={{ y: heroShift }}
            className="mx-auto grid w-[min(1200px,92%)] items-center gap-12 py-16 lg:grid-cols-2"
          >
            <div className="text-right">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A4A0E4]/30 bg-white/5 px-4 py-2 text-xs text-[#A4A0E4]">
                <Sparkles className="h-4 w-4" />
                وكالة إعلانات تفاعلية من الفضاء الرقمي
              </div>
              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                نصنع حملات
                <span className="hero-gradient block">خارقة وملفتة</span>
                تنقل علامتك إلى مدار جديد
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75 md:text-xl">
                Sawalancer وكالة متكاملة تقدم جميع خدمات الإعلان الحديثة: استراتيجية،
                إبداع، أداء، وتقنية. ندمج الفن مع البيانات لننتج نتائج واقعية قابلة للنمو.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-end gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-[#4319B9] to-[#368FDF] px-7 py-4 text-base font-bold shadow-[0_0_40px_rgba(54,143,223,0.35)] transition hover:scale-[1.03]"
                >
                  اطلب عرض سعر
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#cases"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#A4A0E4]/35 bg-white/5 px-7 py-4 text-base font-semibold text-[#A4A0E4] transition hover:bg-white/10"
                >
                  شاهد أعمالنا
                </a>
              </div>
            </div>

            <div className="section-glow rounded-[2rem] border border-white/10 bg-[#20155C]/35 p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: '+280%', label: 'متوسط نمو المبيعات' },
                  { value: '120+', label: 'عميل تم إطلاقه' },
                  { value: '11', label: 'سوقًا إقليميًا' },
                  { value: '4.6x', label: 'أفضل عائد إعلاني' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#7055CA]/35 bg-[#0A0828]/80 p-5"
                  >
                    <p className="font-space text-3xl font-bold text-[#A4A0E4]">{item.value}</p>
                    <p className="mt-2 text-sm text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-[#368FDF]/35 bg-gradient-to-l from-[#1D45B3]/30 to-[#4319B9]/25 p-5">
                <p className="text-sm leading-7 text-white/80">
                  نعمل بطريقة Sprint أسبوعية: فكرة، تنفيذ، قياس، تحسين. هذا يعطيك سرعة
                  إطلاق عالية وتحكمًا كاملًا بالأداء.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-8 w-[min(1200px,92%)] rounded-[2rem] border border-white/10 bg-[#20155C]/25 p-6">
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/60">
            {['META', 'GOOGLE', 'TIKTOK', 'SNAP', 'LINKEDIN', 'X', 'YOUTUBE'].map(
              (platform) => (
                <span key={platform} className="font-space tracking-[0.2em]">
                  {platform}
                </span>
              )
            )}
          </div>
        </section>

        <section id="services" className="mx-auto mt-28 w-[min(1200px,92%)]">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#368FDF]/35 px-4 py-2 text-xs text-[#A4A0E4]">
              <Star className="h-3.5 w-3.5" />
              جميع الخدمات التي تحتاجها في وكالة واحدة
            </p>
            <h2 className="text-4xl font-black md:text-5xl">خدمات Sawalancer المتكاملة</h2>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {Object.keys(servicesByCategory).map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  activeCategory === category
                    ? 'border-[#A4A0E4] bg-[#4319B9]/45 text-white'
                    : 'border-white/20 bg-white/5 text-white/70 hover:border-[#7055CA]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="rounded-[1.7rem] border border-[#7055CA]/35 bg-[#20155C]/25 p-6 backdrop-blur-sm transition hover:-translate-y-1.5 hover:border-[#A4A0E4] hover:shadow-[0_12px_60px_rgba(67,25,185,0.25)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-[#368FDF]/35 bg-[#1D45B3]/30 p-3">
                    <Icon className="h-5 w-5 text-[#A4A0E4]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="text-white/70">{service.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="process" className="mx-auto mt-28 w-[min(1200px,92%)]">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black md:text-5xl">منهجنا في إدارة الحملات</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              نظام واضح بخمس مراحل يحوّل الفكرة إلى نتائج نمو مستدامة.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-[#0A0828]/65 p-5"
              >
                <p className="font-space text-4xl font-bold text-[#4319B9]">{item.step}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="mx-auto mt-28 w-[min(1200px,92%)]">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-black md:text-5xl">أعمالنا الأخيرة</h2>
            <p className="max-w-sm text-left text-sm text-white/65">
              حالات نجاح حقيقية من قطاعات مختلفة، بنتائج قابلة للقياس.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, idx) => (
              <motion.article
                key={study.title}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[#4319B9]/35 bg-gradient-to-tl from-[#1D45B3]/30 via-[#20155C]/70 to-[#4319B9]/35 p-6"
              >
                <p className="mb-14 inline-block rounded-full border border-white/20 px-3 py-1 text-xs text-[#A4A0E4]">
                  {study.tag}
                </p>
                <h3 className="text-2xl font-bold leading-snug">{study.title}</h3>
                <p className="mt-4 text-white/75">{study.result}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#A4A0E4]">
                  شاهد التفاصيل <ArrowRight className="h-4 w-4" />
                </div>
                <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-[#A4A0E4]/20 blur-3xl transition group-hover:bg-[#368FDF]/30" />
                <div className="absolute left-4 top-4 font-space text-sm text-white/40">0{idx + 1}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto mt-28 w-[min(1200px,92%)]">
          <div className="rounded-[2rem] border border-[#7055CA]/35 bg-[#20155C]/30 p-6 md:p-10">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-black md:text-4xl">ماذا يقول عملاؤنا</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  className="rounded-xl border border-white/15 p-2 text-[#A4A0E4] transition hover:border-[#A4A0E4]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="rounded-xl border border-white/15 p-2 text-[#A4A0E4] transition hover:border-[#A4A0E4]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>
            </div>

            <motion.div
              key={testimonials[activeTestimonial].name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/10 bg-[#0A0828]/80 p-7 md:p-9"
            >
              <p className="text-2xl leading-relaxed text-white/90">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="mt-8">
                <p className="text-lg font-bold">{testimonials[activeTestimonial].name}</p>
                <p className="text-sm text-[#A4A0E4]/70">{testimonials[activeTestimonial].role}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="faq" className="mx-auto mt-28 w-[min(1000px,92%)]">
          <h2 className="mb-8 text-center text-4xl font-black md:text-5xl">أسئلة متكررة</h2>
          <div className="grid gap-3">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/12 bg-[#20155C]/25 px-5 py-4"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-right"
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#A4A0E4] transition ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto mt-28 w-[min(1200px,92%)]">
          <div className="grid gap-8 rounded-[2rem] border border-[#368FDF]/30 bg-gradient-to-l from-[#1D45B3]/25 to-[#4319B9]/20 p-6 md:p-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-[#A4A0E4]">
                <Layers className="h-4 w-4" />
                لنصمم لك رحلة نمو كاملة
              </p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                جاهز لتأسيس حضور لا يُنسى؟
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                أرسل تفاصيل مشروعك، وفريق Sawalancer سيعود لك بخطة مخصصة تتناسب
                مع قطاعك وميزانيتك وأهدافك.
              </p>
            </div>

            <form className="grid gap-3 rounded-3xl border border-white/12 bg-[#0A0828]/70 p-5">
              <input
                type="text"
                placeholder="الاسم"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/40 focus:border-[#A4A0E4]"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/40 focus:border-[#A4A0E4]"
              />
              <input
                type="text"
                placeholder="نوع الخدمة المطلوبة"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/40 focus:border-[#A4A0E4]"
              />
              <textarea
                rows="4"
                placeholder="اكتب تفاصيل المشروع"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/40 focus:border-[#A4A0E4]"
              />
              <button
                type="button"
                className="mt-1 rounded-xl bg-gradient-to-l from-[#4319B9] to-[#368FDF] px-5 py-3 font-bold transition hover:opacity-90"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>© 2026 Sawalancer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;