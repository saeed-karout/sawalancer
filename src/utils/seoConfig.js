export const siteConfig = {
  name: 'Sawalancer',
  title: 'Sawalancer | Cosmic Creative Agency',
  description: 'Transform your brand with Sawalancer. We blend stellar design, strategic thinking, and cutting-edge technology to launch your business into new dimensions.',
  url: 'https://sawalancer.com',
  ogImage: 'https://sawalancer.com/og-image.jpg',
  twitterHandle: '@sawalancer',
  locale: 'en_US',
  keywords: [
    'creative agency',
    'digital marketing',
    'web development',
    'branding',
    'SEO',
    'cosmic design',
    'advertising agency',
    'UI/UX design',
    'social media marketing',
    'content creation',
    'brand strategy',
    'digital transformation'
  ]
}

export const pageSEO = {
  home: {
    title: 'Cosmic Creative Agency | Digital Marketing & Web Development',
    description: 'Sawalancer is a cosmic creative agency specializing in brand identity, web development, digital marketing, and SEO. Launch your brand into new dimensions.',
    keywords: 'creative agency, digital marketing, web development, branding, SEO, cosmic design',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Sawalancer',
      url: 'https://sawalancer.com',
      logo: 'https://sawalancer.com/logo.png',
      sameAs: [
        'https://twitter.com/sawalancer',
        'https://linkedin.com/company/sawalancer',
        'https://instagram.com/sawalancer'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-234-567-890',
        contactType: 'customer service',
        email: 'hello@sawalancer.com',
        availableLanguage: ['English']
      }
    }
  },
  about: {
    title: 'About Us | Meet the Cosmic Team Behind Sawalancer',
    description: 'Learn about Sawalancer - a team of creative designers, developers, and strategists dedicated to transforming brands through innovative digital solutions.',
    keywords: 'about sawalancer, creative team, digital agency team, design studio'
  },
  services: {
    title: 'Our Services | Branding, Web Development & Digital Marketing',
    description: 'Explore our comprehensive range of services including brand identity, web development, SEO, digital marketing, and content creation.',
    keywords: 'branding services, web development, digital marketing, SEO services, content creation'
  },
  portfolio: {
    title: 'Portfolio | Our Cosmic Creative Projects',
    description: 'Browse our portfolio of successful projects. See how we\'ve helped brands achieve stellar results through creative design and strategic marketing.',
    keywords: 'portfolio, case studies, creative projects, design portfolio, web design projects'
  },
  blog: {
    title: 'Blog | Cosmic Insights on Digital Marketing & Design',
    description: 'Read our latest articles on digital marketing trends, design inspiration, SEO strategies, and creative insights from the Sawalancer team.',
    keywords: 'digital marketing blog, design blog, SEO tips, creative insights'
  },
  contact: {
    title: 'Contact Us | Let\'s Create Something Cosmic Together',
    description: 'Get in touch with Sawalancer. We\'re ready to help you launch your brand into new dimensions. Contact us for a free consultation.',
    keywords: 'contact sawalancer, get in touch, creative agency contact'
  },
  pricing: {
    title: 'Pricing | Transparent Pricing for Cosmic Services',
    description: 'Explore our transparent pricing plans for branding, web development, and digital marketing services. Choose the perfect package for your needs.',
    keywords: 'pricing, packages, service pricing, digital agency pricing'
  }
}

export const generateSchema = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Digital Space',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'customer service',
      email: 'hello@sawalancer.com',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://twitter.com/sawalancer',
      'https://linkedin.com/company/sawalancer',
      'https://instagram.com/sawalancer'
    ]
  }),
  
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }),
  
  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  }),
  
  faq: (questions) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  }),
  
  service: (service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    serviceType: service.type,
    areaServed: 'Worldwide'
  }),
  
  article: (article) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    }
  })
}