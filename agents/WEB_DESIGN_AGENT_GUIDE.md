# Web Design Agent Guide - Astro Site

## 🎯 **Quick Start Checklist**

### **Before Starting Any New Page:**
- [ ] Check existing components in `src/components/`
- [ ] Review similar pages for patterns
- [ ] Use existing color scheme and fonts
- [ ] Plan responsive design (mobile-first)
- [ ] Consider SEO and accessibility
- [ ] **NEW**: Consider image lightbox for important images
- [ ] **NEW**: Test mobile menu functionality

---

## 🧩 **Component Architecture**

### **Always Use Existing Components When Possible**

```astro
<!-- Image optimization with lightbox -->
<LightboxImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={400} 
  height={300}
  caption="Optional caption for lightbox"
/>

<!-- Page layout with optimizations -->
<OptimizedPage 
  title="Page Title | How to Fund Travel"
  description="Compelling description with keywords"
  canonical="https://howtofund.travel/page-url"
>
  <!-- Content here -->
</OptimizedPage>

<!-- Lead magnets -->
<AIToolsBookmarks formId="unique-id" />
<VibeNomadsCommunity formId="unique-id" />
<JobSitesBookmarks formId="unique-id" />
<FamilyVisaGuide formId="unique-id" />
```

### **NEW: Interactive Components**
```astro
<!-- Enhanced mobile menu (automatic) -->
<!-- Smooth scrolling (automatic) -->
<!-- Image lightbox (use LightboxImage component) -->
<!-- Lazy loading (automatic with OptimizedImage) -->
```

---

## 🖼️ **Image Optimization Best Practices**

### **Loading Strategies**
- **Above-the-fold images**: Use `priority={true}` or `loading="eager"`
- **Below-the-fold images**: Use `loading="lazy"` (default)
- **Always include alt text** for accessibility
- **Use WebP format** when possible for better compression
- **Specify width/height** to prevent layout shift

### **NEW: Lightbox Integration**
```astro
<!-- For images that benefit from lightbox viewing -->
<LightboxImage 
  src="/images/example.webp" 
  alt="Detailed description of image content"
  width={400} 
  height={300}
  caption="Optional caption shown in lightbox"
/>

<!-- For regular images (no lightbox) -->
<OptimizedImage 
  src="/images/example.webp" 
  alt="Detailed description of image content"
  width={400} 
  height={300}
  priority={false} // true for hero images
/>
```

### **When to Use Lightbox:**
- ✅ **Screenshots** and detailed images
- ✅ **Case study images** and results
- ✅ **Portfolio images** and designs
- ✅ **Any image** users might want to view larger
- ❌ **Icons** and small decorative images
- ❌ **Background images** and patterns

---

## 🎨 **Styling Guidelines**

### **Color Scheme (CSS Variables)**
```css
--primary-color: #2A9D8F;    /* Teal */
--dark: #2C3E50;             /* Dark blue-gray */
--white: #FFFFFF;            /* White */
--light-gray: #F8F9FA;       /* Light background */
--text-gray: #666666;        /* Body text */
```

### **Typography**
- **Headings**: System fonts (fallback to sans-serif)
- **Highlights**: `font-family: 'Lemon Tuesday', 'Shadows Into Light', cursive`
- **Body text**: System fonts for readability

### **Common CSS Classes**
```css
.container           /* Page width container */
.hero               /* Hero section styling */
.content-section    /* Content wrapper */
.btn.btn-primary    /* Primary button */
.btn.btn-secondary  /* Secondary button */
.highlight          /* Lemon Tuesday font */
```

---

## 🔍 **SEO Optimization**

### **Required Meta Tags**
```astro
<BaseLayout 
  title="Page Title | How to Fund Travel"
  description="Compelling description with specific keywords and benefits"
  canonical="https://howtofund.travel/page-url"
  type="website"
>
```

### **Content Structure**
- **Use semantic HTML**: `<article>`, `<section>`, `<nav>`
- **Proper heading hierarchy**: H1 → H2 → H3
- **Internal linking** to related blog posts
- **FAQ sections** with schema markup

### **Blog Post Frontmatter**
```mdx
---
title: "Post Title"
description: "Post description with keywords"
publishedDate: 2025-01-01
category: ["Remote Work"]
tags: ["digital nomad", "remote work", "travel"]
image: "/images/post-image.jpg"
---
```

---

## ⚡ **Performance Tips**

### **Image Optimization**
- **Lazy load images** below the fold
- **Use WebP format** when possible
- **Optimize file sizes** (compress images)
- **Specify dimensions** to prevent layout shift
- **NEW**: Use lightbox for detailed images

### **Code Optimization**
- **Minimize JavaScript** - prefer CSS solutions
- **Use Astro's built-in optimizations**
- **Optimize fonts** with `font-display: swap`
- **Bundle CSS efficiently**

### **Loading Strategies**
```astro
<!-- Critical images (above fold) -->
<OptimizedImage priority={true} />

<!-- Non-critical images (below fold) -->
<OptimizedImage loading="lazy" />

<!-- Images with lightbox -->
<LightboxImage loading="lazy" />
```

---

## ♿ **Accessibility Guidelines**

### **Required Elements**
- **Alt text** for all images
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Color contrast** compliance (WCAG AA)

### **NEW: Enhanced Accessibility Features**
- **Mobile menu** with proper focus management
- **Lightbox** with keyboard navigation (Escape, arrow keys)
- **Touch gestures** for mobile users
- **Screen reader** friendly components

### **Examples**
```astro
<!-- Good alt text -->
<img src="/image.jpg" alt="Family kayaking on calm river in Vietnam" />

<!-- ARIA labels -->
<button aria-label="Toggle mobile menu" aria-expanded="false">
  <span class="hamburger"></span>
</button>

<!-- Lightbox image with caption -->
<LightboxImage 
  src="/image.jpg" 
  alt="Detailed description"
  caption="Additional context for screen readers"
/>
```

---

## 📱 **Responsive Design**

### **Mobile-First Approach**
- **Start with mobile** (320px width)
- **Progressive enhancement** for larger screens
- **Test on multiple devices** and browsers
- **Touch-friendly** interactive elements

### **NEW: Enhanced Mobile Experience**
- **Smooth mobile menu** with backdrop blur
- **Touch gestures** for lightbox navigation
- **Responsive lightbox** with mobile-optimized controls
- **Body scroll prevention** when modals are open

### **Breakpoints**
```css
/* Mobile: 320px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

---

## 🧪 **Testing Checklist**

### **Before Publishing**
- [ ] **Mobile responsiveness** (320px - 1200px)
- [ ] **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- [ ] **Performance testing** (Lighthouse score > 90)
- [ ] **Accessibility testing** (axe-core)
- [ ] **Form functionality** testing
- [ ] **Image loading** and optimization
- [ ] **Internal links** working correctly
- [ ] **SEO meta tags** properly set
- [ ] **NEW**: Mobile menu functionality
- [ ] **NEW**: Lightbox image interactions
- [ ] **NEW**: Touch gestures on mobile
- [ ] **NEW**: Keyboard navigation

### **Performance Targets**
- **Lighthouse Score**: > 90
- **Page Load Time**: < 3 seconds
- **Core Web Vitals**: Pass
- **Image Optimization**: WebP format, lazy loading

---

## 📁 **File Organization**

### **Project Structure**
```
astro-site/
├── src/
│   ├── components/          # Reusable components
│   │   ├── lead-magnets/    # Form components
│   │   ├── ImageLightbox.astro    # NEW: Lightbox component
│   │   ├── LightboxImage.astro    # NEW: Simple lightbox wrapper
│   │   ├── OptimizedImage.astro   # Image optimization
│   │   └── OptimizedPage.astro    # Page optimization
│   ├── layouts/             # Page layouts
│   ├── pages/               # Route pages
│   ├── styles/              # CSS files
│   ├── utils/               # Utility functions
│   │   ├── formValidation.js    # Form validation utilities
│   │   └── lazyLoading.js       # Lazy loading utilities
│   └── content/             # Blog posts (MDX)
├── public/
│   ├── images/              # Static images
│   └── ...
└── ...
```

### **Naming Conventions**
- **Components**: PascalCase (`OptimizedImage.astro`)
- **Pages**: kebab-case (`about.astro`)
- **Images**: descriptive names (`family-kayaking-vietnam.webp`)
- **CSS classes**: kebab-case (`hero-section`)

---

## 🎯 **Common Page Patterns**

### **Hero Section**
```astro
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-icon">🎯</span>
        Category Badge
      </div>
      <h1>Main Headline</h1>
      <p class="hero-subtitle">Compelling subtitle with benefits</p>
    </div>
  </div>
</section>
```

### **Content Section with Lightbox Images**
```astro
<section class="content-section">
  <div class="container">
    <article class="content">
      <h2>Section Title</h2>
      <p>Content here...</p>
      
      <!-- Lightbox image for detailed viewing -->
      <LightboxImage 
        src="/images/screenshot.png" 
        alt="Website screenshot showing results"
        caption="The final website design with improved user experience"
      />
      
      <!-- Lead magnet integration -->
      <AIToolsBookmarks formId="section-lead" />
    </article>
  </div>
</section>
```

### **Blog Post Layout**
```astro
<BaseLayout 
  title="Post Title | How to Fund Travel"
  description="Post description"
  canonical="https://howtofund.travel/blog/post-slug"
>
  <!-- Hero section -->
  <section class="hero">
    <!-- Hero content -->
  </section>
  
  <!-- Main content -->
  <section class="content-section">
    <div class="container">
      <article class="blog-post">
        <!-- Post content with lightbox images -->
        <LightboxImage 
          src="/images/post-image.jpg" 
          alt="Description"
          caption="Optional caption"
        />
      </article>
    </div>
  </section>
</BaseLayout>
```

---

## 🔗 **Form Integration**

### **Available Lead Magnets**
- **AIToolsBookmarks** - AI tools collection
- **VibeNomadsCommunity** - Community signup
- **JobSitesBookmarks** - Remote work sites
- **FamilyVisaGuide** - Visa research guide

### **Form Best Practices**
- **Unique formId** for each instance
- **Strategic placement** in content flow
- **Compelling copy** with specific benefits
- **Clear call-to-action**

### **Example Integration**
```astro
<!-- Top of post -->
<AIToolsBookmarks formId="post-intro" />

<!-- Middle of content -->
<VibeNomadsCommunity formId="post-middle" />

<!-- End of post -->
<JobSitesBookmarks formId="post-conclusion" />
```

---

## 📝 **Content Guidelines**

### **Writing Style**
- **Personal stories** and experiences
- **Actionable advice** with specific steps
- **Internal linking** to related content
- **Call-to-actions** throughout content
- **Lead magnets** strategically placed

### **Content Structure**
- **Compelling headline** with keywords
- **Introduction** that hooks the reader
- **Main content** with clear sections
- **Conclusion** with next steps
- **Related content** suggestions

### **Internal Linking**
```astro
<!-- Link to related blog posts -->
<a href="/blog/remote-work-strategies">remote work strategies</a>

<!-- Link to case studies -->
<a href="/case-studies/">case studies</a>

<!-- Link to about page -->
<a href="/about">about Melissa</a>
```

---

## 🚀 **Performance Monitoring**

### **Key Metrics**
- **Core Web Vitals** (LCP, FID, CLS)
- **Page load speed** (target: < 3 seconds)
- **Image optimization** (WebP, lazy loading)
- **JavaScript bundle** size

### **Tools to Use**
- **Lighthouse** for performance audit
- **PageSpeed Insights** for real-world data
- **WebPageTest** for detailed analysis
- **axe-core** for accessibility testing

---

## ⚠️ **Common Pitfalls to Avoid**

### **Don't:**
- ❌ Duplicate components - use existing ones
- ❌ Hardcode colors - use CSS variables
- ❌ Skip alt text - always include it
- ❌ Forget responsive design - test on mobile
- ❌ Ignore performance - optimize images and code
- ❌ Use generic meta descriptions
- ❌ Forget internal linking opportunities
- ❌ **NEW**: Use lightbox for icons or decorative images
- ❌ **NEW**: Forget to test mobile menu functionality

### **Do:**
- ✅ Check existing components first
- ✅ Use semantic HTML
- ✅ Optimize images (WebP, lazy loading)
- ✅ Test on multiple devices
- ✅ Include proper meta tags
- ✅ Add internal links to related content
- ✅ Use existing color scheme and fonts
- ✅ **NEW**: Use lightbox for detailed images and screenshots
- ✅ **NEW**: Test mobile menu and touch interactions

---

## 🔧 **Quick Reference**

### **Common Imports**
```astro
import BaseLayout from '../layouts/BaseLayout.astro';
import OptimizedImage from '../components/OptimizedImage.astro';
import OptimizedPage from '../components/OptimizedPage.astro';
import LightboxImage from '../components/LightboxImage.astro';
import AIToolsBookmarks from '../components/lead-magnets/AIToolsBookmarks.astro';
import VibeNomadsCommunity from '../components/lead-magnets/VibeNomadsCommunity.astro';
```

### **Common CSS Classes**
```css
.container           /* Page width container */
.hero               /* Hero section */
.content-section    /* Content wrapper */
.btn.btn-primary    /* Primary button */
.btn.btn-secondary  /* Secondary button */
.highlight          /* Lemon Tuesday font */
.blog-post          /* Blog post styling */
.lead-magnet        /* Lead magnet container */
```

### **Environment Variables**
```bash
MAILERLITE_API_KEY=your_api_key_here
```

---

## 📞 **When to Ask for Help**

### **Contact the Developer When:**
- **New component needed** that doesn't exist
- **API integration** required
- **Performance issues** that can't be resolved
- **Complex functionality** beyond basic pages
- **Database or backend** changes needed
- **NEW**: Lightbox customization needed
- **NEW**: Mobile menu modifications required

### **Self-Service Solutions:**
- **Styling adjustments** - modify CSS
- **Content updates** - edit text and images
- **Page creation** - use existing patterns
- **Basic SEO** - update meta tags
- **Image optimization** - use OptimizedImage component
- **NEW**: Add lightbox to images - use LightboxImage component

---

## 📚 **Resources**

### **Documentation**
- [Astro Documentation](https://docs.astro.build/)
- [MDX Documentation](https://mdxjs.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- **NEW**: [Lightbox Usage Guide](../LIGHTBOX_USAGE.md)

### **Tools**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [axe-core](https://github.com/dequelabs/axe-core)

---

*Last updated: January 2025*
*Version: 2.0*

---

## 📝 **Notes Section**

### **Recent Updates**
- **January 2025** - Added ImageLightbox and LightboxImage components
- **January 2025** - Enhanced mobile menu with backdrop and smooth animations
- **January 2025** - Implemented lazy loading and smooth scrolling
- **January 2025** - Created lead magnet components with form validation
- **January 2025** - Added OptimizedImage and OptimizedPage components

### **Interactive Features Now Available**
- ✅ **Enhanced Mobile Menu** - Smooth slide-in with backdrop
- ✅ **Image Lightbox** - Professional image viewing experience
- ✅ **Smooth Scrolling** - For anchor links and navigation
- ✅ **Lazy Loading** - Automatic image optimization
- ✅ **Touch Gestures** - Swipe navigation in lightbox
- ✅ **Keyboard Navigation** - Full accessibility support

### **Future Improvements**
- [ ] Implement search functionality
- [ ] Add clickable tags functionality
- [ ] Enhance blog post filtering
- [ ] Add more interactive components

### **Custom Notes**
*Add your own notes, tips, and observations here as you work with the site.*

### **Testing Reminders**
- **Mobile menu**: Test on various screen sizes
- **Lightbox**: Test with multiple images on same page
- **Touch gestures**: Test swipe navigation on mobile
- **Keyboard navigation**: Test with Tab, Escape, Arrow keys
- **Form validation**: Test all lead magnet forms
