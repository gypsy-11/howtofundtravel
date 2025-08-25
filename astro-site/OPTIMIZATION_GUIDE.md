# Optimization Guide - How to Fund Travel

## Overview

This guide covers the CSS & JavaScript optimization tools and scripts implemented for the Astro site.

## Available Optimization Scripts

### 1. CSS Optimization Analysis
```bash
npm run optimize-css
```
**What it does:**
- Analyzes all CSS files in `src/styles/`
- Reports file sizes, line counts, and selector counts
- Identifies potential duplicate rules
- Provides optimization recommendations

### 2. JavaScript Optimization Analysis
```bash
npm run optimize-js
```
**What it does:**
- Analyzes all JavaScript files in `public/js/`
- Reports file sizes, function counts, and event listeners
- Identifies potential optimization opportunities
- Provides code splitting recommendations

### 3. Comprehensive Optimization Analysis
```bash
npm run optimize-all
```
**What it does:**
- Runs complete analysis of CSS, JS, and images
- Generates comprehensive optimization report
- Provides prioritized recommendations
- Shows overall optimization status

### 4. Bundle Analysis
```bash
npm run build:analyze
```
**What it does:**
- Builds the project
- Analyzes bundle sizes and dependencies
- Identifies large chunks and optimization opportunities

## Astro Configuration Optimizations

### CSS Optimization
- ✅ **Minification**: Enabled in production builds
- ✅ **Source Maps**: Enabled in development
- ✅ **Critical CSS Inlining**: Automatic for above-the-fold content
- ✅ **CSS Variables**: Optimized and tree-shaken

### JavaScript Optimization
- ✅ **Minification**: Terser minification in production
- ✅ **Tree Shaking**: Automatic removal of unused code
- ✅ **Code Splitting**: Automatic chunk splitting
- ✅ **Bundle Analysis**: Available with `npm run build:analyze`

### Build Optimizations
- ✅ **Asset Optimization**: Automatic file naming with hashes
- ✅ **Chunk Optimization**: Manual chunk configuration
- ✅ **Source Maps**: Disabled in production for smaller bundles

## Performance Targets

### CSS Targets
- **Total CSS Size**: < 100KB
- **Selectors**: < 1000 total
- **Media Queries**: Optimized for mobile-first

### JavaScript Targets
- **Total JS Size**: < 50KB
- **Functions**: < 50 total
- **Event Listeners**: Optimized for performance

### Image Targets
- **Large Images**: < 500KB each
- **Total Image Size**: < 10MB
- **Format**: WebP where possible

## Optimization Recommendations

### CSS Optimization
1. **Remove Unused CSS**
   - Use PurgeCSS or similar tools
   - Review and remove unused selectors
   - Consider CSS-in-JS for component-specific styles

2. **Optimize Selectors**
   - Use efficient selectors
   - Avoid deep nesting
   - Implement BEM methodology

3. **Media Query Optimization**
   - Use mobile-first approach
   - Combine similar breakpoints
   - Optimize for critical rendering path

### JavaScript Optimization
1. **Code Splitting**
   - Use dynamic imports for non-critical features
   - Split vendor libraries
   - Implement lazy loading

2. **Bundle Optimization**
   - Remove unused dependencies
   - Use tree shaking effectively
   - Optimize import statements

3. **Performance Optimization**
   - Minimize DOM queries
   - Use event delegation
   - Implement debouncing/throttling

## Monitoring and Maintenance

### Regular Checks
- Run `npm run optimize-all` weekly
- Monitor bundle sizes after each build
- Check Core Web Vitals scores
- Review Lighthouse reports

### Performance Metrics
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## Troubleshooting

### Common Issues
1. **Large CSS Bundle**
   - Check for duplicate rules
   - Review unused selectors
   - Consider splitting into modules

2. **Large JavaScript Bundle**
   - Identify large dependencies
   - Implement code splitting
   - Use dynamic imports

3. **Slow Build Times**
   - Optimize image processing
   - Review build configuration
   - Consider parallel processing

### Debugging Tools
- Browser DevTools Performance tab
- Lighthouse audits
- Bundle analyzer (`npm run build:analyze`)
- Network tab for asset loading

## Next Steps

1. **Core Web Vitals Optimization**
   - Implement lazy loading for images
   - Optimize font loading
   - Reduce layout shifts

2. **Advanced SEO**
   - Implement structured data
   - Add Open Graph meta tags
   - Create XML sitemap

3. **Analytics Integration**
   - Set up Google Analytics 4
   - Configure conversion tracking
   - Implement privacy-compliant tracking

## Resources

- [Astro Performance Documentation](https://docs.astro.build/en/guides/performance/)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [CSS Optimization Best Practices](https://web.dev/fast/)
