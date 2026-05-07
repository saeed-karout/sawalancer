# Sawalancer Project Documentation

A modern, cosmos-themed creative agency website built with **React**, **Vite**, and **Tailwind CSS**. Designed for a company specializing in acquiring projects and contracting with freelancers.

## 🌟 Features

### Core Features
- **Multi-language Support**: English and Arabic with full RTL support
- **Responsive Design**: Mobile-first approach with modern CSS
- **Modern UI/UX**: Cosmic-themed design system with smooth animations
- **SEO Optimized**: Built-in meta tags and structured data
- **Accessibility**: WCAG-compliant components

### Pages & Sections
- **Home**: Hero, Services, Portfolio, Stats, Testimonials, CTA
- **About**: Company mission, vision, values, and team
- **Services**: Detailed service offerings with category pages
- **Portfolio**: Project showcase with filtering
- **Blog**: Article listing and individual post pages
- **Contact**: Comprehensive contact form and info
- **Pricing**: Service tier pricing display
- **Careers**: Job listings and team values
- **Legal**: Privacy Policy, Terms of Service, Cookie Policy

## 📁 Project Structure

```
sawalancer/
├── src/
│   ├── api/
│   │   └── client.js                 # API client & endpoints
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx            # Main layout wrapper
│   │   │   ├── SEO.jsx               # SEO meta tags
│   │   │   └── ScrollToTop.jsx       # Route scroll behavior
│   │   ├── sections/
│   │   │   └── ContactForm.jsx       # Contact form component
│   │   ├── ui/
│   │   │   ├── CosmicCard.jsx        # Reusable card component
│   │   │   ├── GlowButton.jsx        # CTA button component
│   │   │   ├── Icons.jsx             # Icon exports
│   │   │   ├── ParticleField.jsx     # Background animation
│   │   │   └── SectionTitle.jsx      # Section title component
│   │   ├── CTA.jsx                   # Call-to-action section
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Hero.jsx                  # Hero banner
│   │   ├── LanguageSwitcher.jsx      # Language toggle
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── Portfolio.jsx             # Portfolio section
│   │   ├── Services.jsx              # Services section
│   │   ├── Stats.jsx                 # Statistics section
│   │   └── Testimonials.jsx          # Testimonials section
│   ├── pages/
│   │   ├── About.jsx                 # About page
│   │   ├── Blog.jsx                  # Blog listing
│   │   ├── BlogPost.jsx              # Blog post detail
│   │   ├── Careers.jsx               # Careers page
│   │   ├── Contact.jsx               # Contact page
│   │   ├── Cookies.jsx               # Cookie policy
│   │   ├── Home.jsx                  # Home page
│   │   ├── NotFound.jsx              # 404 page
│   │   ├── Portfolio.jsx             # Portfolio page
│   │   ├── Pricing.jsx               # Pricing page
│   │   ├── Privacy.jsx               # Privacy policy
│   │   ├── Services.jsx              # Services page
│   │   └── Terms.jsx                 # Terms of service
│   ├── utils/
│   │   └── seoConfig.js              # SEO configuration
│   ├── App.jsx                       # Main app router
│   ├── i18n.js                       # i18n configuration
│   ├── index.css                     # Global styles
│   └── main.jsx                      # App entry point
├── public/
│   ├── locales/
│   │   ├── en/                       # English translations
│   │   │   ├── about.json
│   │   │   ├── blog.json
│   │   │   ├── common.json
│   │   │   ├── contact.json
│   │   │   ├── home.json
│   │   │   ├── legal.json
│   │   │   ├── portfolio.json
│   │   │   ├── pricing.json
│   │   │   ├── services.json
│   │   │   └── translation.json
│   │   └── ar/                       # Arabic translations
│   │       └── [same structure]
│   ├── icons/                        # Brand assets
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── .env.example                      # Environment variables template
├── .gitignore
├── eslint.config.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sawalancer.git
   cd sawalancer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Update environment variables** (optional)
   ```bash
   VITE_API_BASE_URL=https://your-api.com
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### API Integration

The project includes a centralized API client in `src/api/client.js`. To set up backend integration:

1. Update `VITE_API_BASE_URL` in `.env.local`
2. The form submissions will automatically use the configured API endpoints
3. Available services:
   - `contactService.submitForm(formData)` - Contact form submission
   - `newsletterService.subscribe(email)` - Newsletter signup
   - `projectService.getAll()` / `getById(id)` - Portfolio projects
   - `blogService.getAll()` / `getById(id)` - Blog posts
   - `servicesService.getAll()` / `getById(id)` - Services
   - `careersService.getJobs()` - Job listings

### Internationalization (i18n)

Add translations in `public/locales/{lang}/{namespace}.json`. The system supports:
- English (`en`)
- Arabic (`ar`) with RTL support

To add a new language:
1. Create folder: `public/locales/{lang_code}/`
2. Create namespace files (copy from `en/`)
3. Update `src/i18n.js` to include the new language

### SEO Configuration

SEO metadata is configured in `src/utils/seoConfig.js`. Each page passes:
```javascript
<Layout seoProps={pageSEO.home}>
  <Home />
</Layout>
```

## 🎨 Styling & Theme

### Tailwind CSS Configuration

Custom cosmic theme colors in `tailwind.config.js`:
- `cosmic-background`, `cosmic-navy`, `cosmic-dark`
- `cosmic-saturated`, `cosmic-mid`, `cosmic-sky`
- `cosmic-medium`, `cosmic-glow`

### Dark Mode

The design uses a dark cosmic theme throughout. Customize colors in:
- `tailwind.config.js` - Color definitions
- `src/index.css` - Global styles and animations

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔄 Form Handling

### Contact Form
- Located in `src/components/sections/ContactForm.jsx`
- Validates email format and message length
- Integrates with API client (or logs locally if API not configured)
- Multi-language support with Arabic numerals for budgets

### Newsletter
- Footer newsletter subscription
- Email validation
- Graceful error handling

## 📊 Analytics & SEO

- Robots.txt and Sitemap.xml included
- Structured data (Schema.org) support
- Open Graph meta tags for social sharing
- Mobile-friendly design

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## 📦 Dependencies

**Core**:
- React 19.2.4
- React Router 7.14.0
- Vite 8.0.4

**Styling**:
- Tailwind CSS 4.2.2
- PostCSS 8.5.9

**Animations**:
- Framer Motion 12.38.0

**Internationalization**:
- i18next 26.0.4
- react-i18next 17.0.2

**SEO**:
- React Helmet Async 3.0.0

**UI**:
- Lucide React 1.7.0

## 🔐 Security Considerations

- Environment variables never committed (.env not in git)
- No sensitive data in frontend code
- API calls use secure HTTPS in production
- CORS headers configured on backend
- Input validation on all forms
- XSS protection via React's built-in escaping

## 📝 Development Workflow

### Code Style
- ESLint configured for code quality
- Use `npm run build` to check for errors
- Follow existing component patterns

### Adding Features
1. Create component in appropriate folder
2. Add translations for i18n support
3. Add SEO metadata where applicable
4. Test on mobile viewports
5. Build and verify production output

### Committing Changes
```bash
git add .
git commit -m "Feature: description"
git push origin branch-name
```

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Custom Domain
1. Update deployment script in `package.json`
2. Configure custom domain in hosting provider
3. Update `homepage` in `package.json`

### Environment Variables
1. Set `VITE_API_BASE_URL` in hosting platform
2. Ensure SSL/TLS is enabled
3. Configure CORS on backend if needed

## 📧 Support & Contact

For questions or issues:
- Email: info@sawalancer.com
- WhatsApp: +963957608833
- Website: https://sawalancer.com

## 📄 License

This project is proprietary software of Sawalancer. All rights reserved.

---

**Last Updated**: 2024
**Version**: 1.0.0
