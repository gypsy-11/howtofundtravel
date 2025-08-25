# HTML to Astro Conversion Guide

A comprehensive guide for converting an existing HTML website to Astro, based on real-world migration experience.

## Table of Contents

1. [Pre-Migration Assessment](#pre-migration-assessment)
2. [Project Setup](#project-setup)
3. [Content Migration Strategy](#content-migration-strategy)
4. [Component Architecture](#component-architecture)
5. [Styling Migration](#styling-migration)
6. [Form Integration](#form-integration)
7. [SEO and Performance](#seo-and-performance)
8. [Testing and Deployment](#testing-and-deployment)
9. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)

## Pre-Migration Assessment

### 1. Content Audit
- **Inventory all content**: List all HTML pages, blog posts, and assets
- **Identify content types**: Separate static pages, blog posts, and dynamic content
- **Map URL structure**: Document current URL patterns for redirect planning
- **Assess dependencies**: Note external services, APIs, and third-party integrations

### 2. Technology Stack Analysis
- **Current stack**: Document existing technologies (CSS frameworks, JavaScript libraries, etc.)
- **Migration complexity**: Identify which features need special attention
- **Third-party services**: List all external integrations (analytics, forms, etc.)

### 3. Content Priority
- **Identify draft files**: Look for files with similar names to actual posts
- **Content relevance**: Determine which version contains the most up-to-date content
- **Migration order**: Prioritize high-traffic pages and core functionality

## Project Setup

### 1. Initialize Astro Project
```bash
# Create new Astro project
npm create astro@latest my-astro-site
cd my-astro-site

# Install necessary dependencies
npm install @astrojs/node
npm install @astrojs/sitemap
npm install @astrojs/rss
```

### 2. Configure Astro
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yoursite.com',
  output: 'server', // For API routes and SSR
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sitemap()
  ]
});
```

### 3. Project Structure
```
src/
├── components/          # Reusable components
├── content/            # MDX content
│   └── blog/          # Blog posts (.mdx files)
├── layouts/           # Page layouts
├── pages/             # Astro pages and API routes
│   └── api/          # Server-side API endpoints
├── styles/            # Global styles
└── utils/             # Utility functions
```

## Content Migration Strategy

### 1. MDX Setup
```bash
# Install MDX integration
npm install @astrojs/mdx
```

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    mdx({
      // Configure MDX options
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: []
    })
  ]
});
```

### 2. Blog Post Migration
- **Convert HTML to MDX**: Transform blog posts from HTML to MDX format for enhanced functionality
- **Preserve frontmatter**: Add Astro frontmatter with metadata
- **Handle images**: Update image paths and add proper attributes
- **Maintain internal links**: Update internal links to match new URL structure
- **Embed components**: Use MDX to include interactive elements like forms and lead magnets

### 2. Static Page Migration
- **Create Astro pages**: Convert HTML pages to `.astro` files
- **Extract components**: Identify reusable sections and create components
- **Preserve functionality**: Ensure all interactive elements work correctly

### 3. Content Organization
```mdx
// Example blog post structure
---
title: "Your Blog Post Title"
description: "SEO description"
publishedDate: 2024-01-01T00:00:00.000Z
author: "Author Name"
image: "/images/post-image.jpg"
category: ["Category"]
tags: ["tag1", "tag2"]
featured: false
draft: false
canonical: "https://yoursite.com/blog/post-url"
---

# Your Blog Post Title

Content here...

<LeadMagnetForm 
  title="Get Your Free Guide"
  description="Download our comprehensive resource"
  formId="blog-post-lead"
/>

<CalloutBox type="tip">
  **Pro Tip:** This is an example of using components in MDX content.
</CalloutBox>
```

## Component Architecture

### What Are Components?

Think of components as **reusable building blocks** for your website. Instead of writing the same code over and over, you create a component once and reuse it wherever you need it.

**Real-world example**: If you have lead magnet forms on multiple blog posts, instead of copying and pasting the same form HTML and JavaScript on every page, you create a `LeadMagnetForm` component. Then you can just add `<LeadMagnetForm />` to any blog post where you want that form to appear.

**Benefits of components:**
- **Save time**: Write once, use everywhere
- **Consistency**: All your forms look and behave the same way
- **Easy updates**: Change the component once, and it updates everywhere
- **Less errors**: Fewer places to make mistakes

### 1. Layout Components
```astro
---
// BaseLayout.astro
export interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 2. Reusable Components

**Common components you'll want to create:**

- **Navigation**: Header and footer that appear on every page
- **Blog cards**: Reusable previews for blog post listings
- **Forms**: Lead magnets, contact forms, newsletter signups
- **Callout boxes**: Special content boxes for tips, warnings, or highlights
- **Image galleries**: Reusable image displays
- **Social sharing**: Share buttons that work the same everywhere

**Example: Lead Magnet Component**
Instead of writing this form code on every blog post:
```html
<div class="lead-magnet">
  <h3>Get Your Free Guide</h3>
  <form>
    <input type="email" placeholder="Your email" />
    <button type="submit">Download</button>
  </form>
</div>
```

You create a component once:
```astro
<!-- LeadMagnet.astro -->
<div class="lead-magnet">
  <h3>{title}</h3>
  <form>
    <input type="email" placeholder="Your email" />
    <button type="submit">{buttonText}</button>
  </form>
</div>
```

Then use it anywhere:
```astro
<LeadMagnet title="Get Your Free Guide" buttonText="Download Now" />
```

### 3. Component Props and Types

**Props** are like parameters you pass to your components to customize them.

```astro
---
// Example component with props
export interface Props {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

const { title, description, image, className = "" } = Astro.props;
---
```

**Using Components in MDX Blog Posts**

Once you have components, you can use them directly in your blog posts:

```mdx
---
title: "My Blog Post"
---

# My Blog Post

Here's my content...

<LeadMagnet 
  title="Get Your Free Guide" 
  description="Download our comprehensive resource"
  formId="blog-post-1"
/>

<CalloutBox type="tip">
  **Pro Tip:** This is a reusable component that looks great on every post!
</CalloutBox>

More content here...
```

**The magic**: You write the component once, then just drop it into any blog post where you need it. No more copying and pasting the same code everywhere!

## Styling Migration

### 1. CSS Strategy
- **Global styles**: Move to `src/styles/global.css`
- **Component styles**: Use Astro's scoped styling
- **CSS variables**: Define design tokens for consistency
- **Responsive design**: Ensure mobile-first approach

### 2. CSS Processing
```css
/* Example global CSS with variables */
:root {
  --color-primary: #3BAEA0;
  --color-secondary: #264653;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
}

/* Component-scoped styles */
<style>
  .blog-card {
    background: white;
    border-radius: 8px;
    padding: var(--space-md);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
</style>
```

### 3. Image Optimization
```astro
<img 
  src="/images/example.jpg" 
  alt="Description" 
  width="800" 
  height="600" 
  loading="lazy" 
  decoding="async"
  class="featured-image"
/>
```

## Form Integration

### 1. API Routes Setup
```javascript
// src/pages/api/contact.js
export async function POST({ request }) {
  try {
    const data = await request.json();
    // Process form data
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

### 2. Form Components
```astro
---
// LeadMagnetBase.astro
export interface Props {
  title: string;
  description: string;
  apiEndpoint: string;
  redirectUrl: string;
}

const { title, description, apiEndpoint, redirectUrl } = Astro.props;
---

<form id="lead-form" class="lead-magnet-form">
  <input type="email" name="email" required />
  <button type="submit">Submit</button>
</form>

<script>
  // Form handling logic
</script>
```

### 3. Environment Variables
```bash
# .env
API_KEY=your_api_key_here
DATABASE_URL=your_database_url
```

## SEO and Performance

### 1. Meta Tags
```astro
---
// SEO component
export interface Props {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}
---

<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<link rel="canonical" href={canonical} />
```

### 2. Sitemap and RSS
- **Automatic sitemap**: Configure `@astrojs/sitemap`
- **RSS feeds**: Set up for blog content
- **Structured data**: Add JSON-LD for better SEO

### 3. Performance Optimization
- **Image optimization**: Use Astro's built-in image optimization
- **Code splitting**: Leverage Astro's automatic code splitting
- **Caching**: Implement proper caching strategies

## Testing and Deployment

### 1. Local Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 2. Testing Checklist
- [ ] All pages load correctly
- [ ] Forms submit and redirect properly
- [ ] Images display correctly
- [ ] Internal links work
- [ ] Mobile responsiveness
- [ ] SEO meta tags are present
- [ ] Performance metrics are acceptable

### 3. Deployment
- **Static hosting**: Netlify, Vercel, or GitHub Pages
- **Server hosting**: For SSR features
- **Environment variables**: Configure production environment
- **Domain and SSL**: Set up custom domain with HTTPS

## Common Pitfalls and Solutions

### 1. Import Path Issues
**Problem**: Incorrect import paths in markdown files
**Solution**: Use relative paths from content directory
```astro
// In blog post markdown
import Component from '../../../components/Component.astro';
```

### 2. API Route Method Names
**Problem**: API routes not working due to method name case
**Solution**: Use uppercase method names
```javascript
// Correct
export async function POST({ request }) { }

// Incorrect
export async function post({ request }) { }
```

### 3. Environment Variables
**Problem**: Environment variables not loading
**Solution**: Ensure proper file location and format
```bash
# .env file should be in project root
# No spaces around equals sign
API_KEY=your_key_here
```

### 4. Component Props
**Problem**: Props not passing correctly
**Solution**: Define proper TypeScript interfaces
```astro
---
export interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default description" } = Astro.props;
---
```

### 5. Styling Conflicts
**Problem**: Global styles affecting components
**Solution**: Use scoped styles and CSS variables
```astro
<style scoped>
  .component {
    /* Styles only apply to this component */
  }
</style>
```

## Migration Checklist

### Phase 1: Setup
- [ ] Initialize Astro project
- [ ] Configure build settings
- [ ] Set up project structure
- [ ] Install necessary dependencies

### Phase 2: Content Migration
- [ ] Migrate blog posts to MDX
- [ ] Convert static pages to Astro
- [ ] Update internal links
- [ ] Optimize images
- [ ] Set up MDX components for interactive elements

### Phase 3: Components
- [ ] Create layout components
- [ ] Build reusable components
- [ ] Implement navigation
- [ ] Add form components

### Phase 4: Functionality
- [ ] Set up API routes
- [ ] Integrate third-party services
- [ ] Implement forms
- [ ] Add analytics

### Phase 5: Optimization
- [ ] Optimize performance
- [ ] Add SEO meta tags
- [ ] Configure sitemap
- [ ] Test thoroughly

### Phase 6: Deployment
- [ ] Build production version
- [ ] Deploy to hosting platform
- [ ] Configure domain and SSL
- [ ] Monitor performance

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro Components Guide](https://docs.astro.build/en/core-concepts/astro-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [API Routes](https://docs.astro.build/en/guides/server-side-rendering/)

---

*This guide is based on real-world migration experience. Adapt the steps to your specific project requirements and constraints.*
