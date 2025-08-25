# Vercel Deployment Guide for Astro Site

This guide will walk you through deploying a test version of your Astro site to Vercel.

## Prerequisites

- Node.js installed (version 18 or higher)
- Git repository set up
- Vercel account (free tier available)

## Step 1: Prepare Your Astro Site for Vercel

### 1.1 Install Vercel Adapter for Astro

First, you need to install the Vercel adapter for Astro:

```bash
cd astro-site
npm install @astrojs/vercel
```

### 1.2 Update Astro Configuration

Update your `astro.config.mjs` to use the Vercel adapter instead of the Node adapter:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Vercel-specific configuration
    includeFiles: ['./src/content/**/*'],
    maxDuration: 30
  }),
  site: 'https://howtofund.travel',
  integrations: [mdx()],
  
  // Keep your existing build optimization settings
  build: {
    inlineStylesheets: 'auto',
    split: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['astro']
        }
      }
    }
  },
  
  // Keep your existing Vite configuration
  vite: {
    css: {
      minify: true,
      devSourcemap: true
    },
    build: {
      minify: 'terser',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },
    assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
  },
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    quality: 80,
    format: ['webp', 'avif'],
    densities: [1, 2],
    loading: 'eager'
  }
});
```

### 1.3 Create Vercel Configuration

Create a `vercel.json` file in your `astro-site` directory:

```json
{
  "public": true,
  "cleanUrls": true,
  "redirects": [
    {
      "source": "/:path*.html",
      "destination": "/:path*",
      "permanent": true
    }
  ],
  "functions": {
    "api/*.js": {
      "runtime": "@vercel/node@5.0.0"
    }
  },
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

## Step 2: Test Locally

### 2.1 Build and Test Locally

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Test the build locally
npm run preview
```

Make sure everything works correctly before deploying.

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended for Testing)

#### 3.1 Install Vercel CLI

```bash
npm install -g vercel
```

#### 3.2 Login to Vercel

```bash
vercel login
```

#### 3.3 Deploy from Astro Site Directory

```bash
cd astro-site
vercel
```

Follow the prompts:
- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N`
- What's your project's name? `howtofundtravel-astro-test` (or any name you prefer)
- In which directory is your code located? `./` (current directory)
- Want to override the settings? `N`

#### 3.4 Deploy with Custom Settings (Optional)

For more control, you can deploy with specific settings:

```bash
vercel --prod
```

### Option B: Deploy via GitHub Integration

#### 3.1 Push to GitHub

```bash
# Add your changes
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

#### 3.2 Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: `Astro`
   - Root Directory: `astro-site`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Step 4: Configure Environment Variables (If Needed)

If your site uses environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add any required environment variables

## Step 5: Set Up Preview Deployments

### 5.1 Automatic Preview Deployments

Vercel automatically creates preview deployments for:
- Pull requests
- Feature branches
- Development branches

### 5.2 Manual Preview Deployment

```bash
# Deploy to preview (not production)
vercel --debug
```

## Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Configure DNS settings as instructed

### 6.2 Test Domain

For testing, you can use the default Vercel domain (e.g., `your-project.vercel.app`)

## Step 7: Monitor and Debug

### 7.1 View Deployment Logs

```bash
# View recent deployments
vercel ls

# View specific deployment logs
vercel logs [deployment-url]
```

### 7.2 Check Function Logs

For server-side functions, check the Vercel dashboard:
1. Go to your project dashboard
2. Navigate to Functions tab
3. View logs for any errors

## Step 8: Performance Optimization

### 8.1 Enable Analytics

1. Go to your Vercel project dashboard
2. Navigate to Analytics
3. Enable Web Analytics (free tier available)

### 8.2 Monitor Core Web Vitals

Your existing optimization scripts can be run as part of the build process:

```json
{
  "scripts": {
    "build": "npm run optimize-all && astro build",
    "vercel-build": "npm run build"
  }
}
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Image Optimization Issues**
   - Ensure Sharp is properly installed
   - Check image paths and formats

3. **API Routes Not Working**
   - Verify the `api/` directory structure
   - Check function runtime configuration

4. **Environment Variables**
   - Ensure all required env vars are set in Vercel dashboard
   - Check for typos in variable names

### Debug Commands

```bash
# Test build locally
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Analyze bundle size
npm run analyze-bundle

# Test API routes locally
npm run dev
```

## Next Steps

1. **Set up CI/CD**: Configure automatic deployments from your main branch
2. **Performance monitoring**: Set up Core Web Vitals monitoring
3. **SEO optimization**: Verify meta tags and structured data
4. **Analytics**: Connect Google Analytics or other tracking tools

## Useful Vercel Commands

```bash
# List all projects
vercel ls

# Switch between projects
vercel switch

# Remove project
vercel remove

# View project info
vercel inspect

# Pull environment variables
vercel env pull .env.local
```

## Production Deployment

When ready for production:

1. Deploy to production: `vercel --prod`
2. Set up custom domain
3. Configure SSL certificates (automatic with Vercel)
4. Set up monitoring and alerts
5. Configure backup and recovery procedures

---

**Note**: This guide assumes you're deploying from the `astro-site` directory. Adjust paths and commands accordingly if your project structure differs.
