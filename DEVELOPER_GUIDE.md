# Sawalancer Developer Quick Reference

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Common Tasks

### Add a New Page

1. Create component in `src/pages/PageName.jsx`
2. Import it in `src/App.jsx`
3. Add route with SEO props:
```jsx
<Route path="/page-name" element={
  <Layout seoProps={pageSEO.pageName}>
    <PageName />
  </Layout>
} />
```

### Add Translations

1. Add key to `public/locales/en/namespace.json`
2. Add key to `public/locales/ar/namespace.json`
3. Use in component:
```jsx
const { t } = useTranslation('namespace')
<h1>{t('key.subkey')}</h1>
```

### Integrate API Endpoint

```jsx
import { serviceService } from '../api/client'

// In component
const response = await serviceService.getAll()
```

### Create Responsive Component

```jsx
<div className="
  grid grid-cols-1        // Mobile: 1 column
  md:grid-cols-2          // Tablet: 2 columns
  lg:grid-cols-3          // Desktop: 3 columns
  gap-6                   // Spacing
">
```

### RTL Support

```jsx
const { i18n } = useTranslation()
const isRTL = i18n.language === 'ar'

<div className={isRTL ? 'text-right' : 'text-left'}>
<div className={isRTL ? 'flex-row-reverse' : ''}>
```

---

## 🎨 Design System

### Colors
```css
cosmic-background   /* Main bg */
cosmic-navy        /* Dark blue */
cosmic-saturated   /* Brand color */
cosmic-sky         /* Accent blue */
cosmic-glow        /* Neon accent */
```

### Components

**GlowButton**
```jsx
<GlowButton className="w-full">
  Click Me
  <Star className="inline ml-2 w-4 h-4" />
</GlowButton>
```

**CosmicCard**
```jsx
<CosmicCard delay={index * 0.1}>
  <h3>Title</h3>
  <p>Content</p>
</CosmicCard>
```

**SectionTitle**
```jsx
<SectionTitle 
  subtitle="Cosmic Subtitle"
  title="Main Title"
/>
```

---

## 📱 Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 🔐 Environment Variables

```env
# Add to .env.local (not committed)
VITE_API_BASE_URL=https://api.example.com
```

Then access in code:
```jsx
import.meta.env.VITE_API_BASE_URL
```

---

## 🐛 Debugging

### Console Logs
```jsx
// API calls
console.log('Form data:', formData)

// Router debug
console.log('Location:', location.pathname)

// i18n debug
console.log('Language:', i18n.language)
```

### Network Requests
- Open DevTools > Network tab
- Check form submissions to API
- Verify response status codes

### i18n Issues
- Check translation keys exist
- Verify namespace spelling
- Check JSON syntax in translation files

---

## 📋 Checklist for New Features

- [ ] Component created
- [ ] Translations added (EN & AR)
- [ ] Route added with SEO
- [ ] Mobile responsive tested
- [ ] RTL support verified
- [ ] Error states handled
- [ ] Accessibility considered
- [ ] Documentation updated

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main routing |
| `src/api/client.js` | API configuration |
| `src/i18n.js` | i18n setup |
| `tailwind.config.js` | Theme colors |
| `vite.config.js` | Build config |
| `public/locales/` | Translations |
| `.env.example` | Environment template |

---

## 💡 Tips & Tricks

### Animation Tips
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}      // Start state
  animate={{ opacity: 1, y: 0 }}       // End state
  whileHover={{ scale: 1.05 }}         // Hover state
  transition={{ duration: 0.3 }}
/>
```

### Form Validation
```jsx
const validateEmail = (email) => 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validatePhone = (phone) =>
  /^\+?[0-9\s\-()]+$/.test(phone)
```

### Image Optimization
```jsx
<img
  src={url}
  alt="Description"
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

---

## 🆘 Common Issues

### Translations Not Updating
- Clear browser cache
- Restart dev server
- Check JSON syntax in files

### Routes Not Working
- Verify import in App.jsx
- Check path spelling
- Ensure SEO props exist

### Styles Not Applying
- Check Tailwind class spelling
- Verify breakpoint syntax
- Clear Next.js cache if used

---

## 📞 Support

- **Email**: info@sawalancer.com
- **WhatsApp**: +963957608833
- **Website**: https://sawalancer.com

---

**Last Updated**: 2024
**For Latest Info**: See PROJECT_DOCUMENTATION.md
