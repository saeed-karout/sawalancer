import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  image = '/og-image.jpg',
  url = 'https://sawalancer.com',
  type = 'website',
  schema = null,
  keywords = '',
  author = 'Sawalancer Agency'
}) => {
  const siteTitle = 'Sawalancer | Cosmic Creative Agency'
  const fullTitle = title ? `${title} | Sawalancer` : siteTitle
  const defaultDescription = 'Transform your brand with Sawalancer. We blend stellar design, strategic thinking, and cutting-edge technology to launch your business into new dimensions.'
  const defaultImage = 'https://sawalancer.com/og-image.jpg'
  const defaultKeywords = 'creative agency, digital marketing, web development, branding, SEO, cosmic design, advertising agency'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Sawalancer" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image || defaultImage} />
      <meta name="twitter:creator" content="@sawalancer" />
      <meta name="twitter:site" content="@sawalancer" />

      {/* Mobile Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#0A0828" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO