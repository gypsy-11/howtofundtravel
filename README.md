# Nomad AI Marketing Landing Page

A modern, responsive landing page for AI marketing services targeting digital nomads and location-independent entrepreneurs.

## Features

- Responsive design optimized for all devices
- Modern gradient design with smooth animations
- Lead capture forms integrated with MailerLite
- SEO-optimized structure
- Fast loading static HTML

## Deployment

This project is configured for deployment on Vercel with custom domain support.

### Local Development

```bash
# Install Vercel CLI
npm i -g vercel

# Start development server
vercel dev
```

### Production Deployment

```bash
# Deploy to Vercel
vercel --prod
```

## Custom Domain Setup

1. Deploy to Vercel first
2. Go to your Vercel dashboard
3. Select your project
4. Go to Settings > Domains
5. Add your custom domain
6. Update your domain's DNS settings as instructed by Vercel

## Environment Variables

Make sure to update the MailerLite API key in the HTML file:
- Replace `YOUR_API_KEY_HERE` with your actual MailerLite API key
- Update the `GROUP_ID` if needed

## Project Structure

```
├── nomad-ai-marketing-landing.html  # Main landing page
├── vercel.json                      # Vercel configuration
├── package.json                     # Project metadata
├── README.md                        # This file
└── images/                          # Image assets (if any)
``` 