export const siteConfig = {
  name: 'Sawalancer',
  title: 'Sawalancer | Cosmic Creative Agency',
  fullTitle: 'Sawalancer | Cosmic Creative Agency - Branding, Web Development & Digital Marketing',
  description: 'Sawalancer is a cosmic creative agency specializing in brand identity, web development, digital marketing, and SEO. Transform your brand with stellar design and interstellar strategy. Get a free consultation today.',
  url: 'https://sawalancer.com',
  ogImage: 'https://sawalancer.com/og-image.jpg',
  twitterHandle: '@sawalancer',
  locale: 'en_US',
  alternateLocale: 'ar_SA',
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
    'digital transformation',
    'Sawalancer',
    'cosmic creative agency'
  ],
  foundingDate: '2016',
  email: 'hello@sawalancer.com',
  phone: '+1-234-567-890',
  address: {
    street: 'Digital Galaxy, Cosmic Sector 7',
    locality: 'Digital Space',
    country: 'US'
  }
}

export const pageSEO = {
  home: {
    title: 'Sawalancer | Cosmic Creative Agency - Branding, Web Development & Digital Marketing',
    description: 'Transform your brand with Sawalancer. We blend stellar design, strategic thinking, and cutting-edge technology to launch your business into new dimensions. Branding, Web Dev, SEO & Digital Marketing.',
    keywords: 'creative agency, digital marketing, web development, branding, SEO, cosmic design, Sawalancer',
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
        availableLanguage: ['English', 'Arabic']
      }
    }
  },
  about: {
    title: 'About Sawalancer | Cosmic Creative Team & Our Story',
    description: 'Learn about Sawalancer - an award-winning cosmic creative agency. Meet our team of designers, developers, and strategists dedicated to transforming brands through innovative digital solutions.',
    keywords: 'about sawalancer, creative team, digital agency team, design studio, cosmic agency'
  },
  services: {
    title: 'Our Services | Branding, Web Development & Digital Marketing Agency',
    description: 'Explore Sawalancer\'s comprehensive cosmic services: brand identity, web development, SEO, digital marketing, and content creation. Launch your brand into new dimensions.',
    keywords: 'branding services, web development, digital marketing, SEO services, content creation, creative services'
  },
  portfolio: {
    title: 'Portfolio | Our Cosmic Creative Projects & Case Studies',
    description: 'Browse Sawalancer\'s portfolio of award-winning projects. See how we\'ve helped brands achieve stellar results through creative design and strategic marketing.',
    keywords: 'portfolio, case studies, creative projects, design portfolio, web design projects, branding portfolio'
  },
  blog: {
    title: 'Blog | Cosmic Insights on Digital Marketing, Design & SEO',
    description: 'Read Sawalancer\'s latest articles on digital marketing trends, design inspiration, SEO strategies, and creative insights. Expert advice for your brand\'s cosmic journey.',
    keywords: 'digital marketing blog, design blog, SEO tips, creative insights, marketing trends'
  },
  contact: {
    title: 'Contact Sawalancer | Let\'s Create Something Cosmic Together',
    description: 'Get in touch with Sawalancer. We\'re ready to help you launch your brand into new dimensions. Contact us for a free consultation and quote.',
    keywords: 'contact sawalancer, get in touch, creative agency contact, free consultation, project quote'
  },
  pricing: {
    title: 'Pricing | Transparent Pricing for Cosmic Creative Services',
    description: 'Explore Sawalancer\'s transparent pricing plans for branding, web development, and digital marketing services. Choose the perfect package for your cosmic journey.',
    keywords: 'pricing, packages, service pricing, digital agency pricing, creative services cost'
  }
}

export const generateSchema = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: 'Sawalancer Creative Agency',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.jpg`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'Worldwide'
    },
    sameAs: [
      'https://twitter.com/sawalancer',
      'https://linkedin.com/company/sawalancer',
      'https://instagram.com/sawalancer',
      'https://facebook.com/sawalancer'
    ],
    knowsAbout: [
      'Brand Identity',
      'Web Development',
      'Digital Marketing',
      'SEO',
      'Content Creation',
      'UI/UX Design',
      'Social Media Marketing'
    ],
    slogan: 'Cosmic Creativity Meets Digital Excellence',
    foundingDate: siteConfig.foundingDate
  }),
  
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: 'Sawalancer Cosmic Creative Agency',
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en', 'ar']
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
      name: siteConfig.name,
      url: siteConfig.url
    },
    serviceType: service.type,
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD'
    }
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
  }),
  
  review: (review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: review.body,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Person',
      name: review.author
    },
    itemReviewed: {
      '@type': 'Organization',
      name: siteConfig.name
    }
  })
}

// Schema for Service Pages
export const servicePageSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url
  },
  serviceType: service.type,
  areaServed: 'Worldwide',
  offers: {
    '@type': 'Offer',
    price: service.startingPrice,
    priceCurrency: 'USD'
  }
})

// Schema for Portfolio Item
export const portfolioItemSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  image: project.image,
  creator: {
    '@type': 'Organization',
    name: siteConfig.name
  },
  datePublished: project.year,
  keywords: project.tags?.join(', ')
})