# How to Fund Travel - Website

A static website built for location independence and family travel funding strategies.

## Project Structure

```
howtofundtravel/
├── public/                    # Static website files (served by Vercel)
│   ├── index.html            # Homepage
│   ├── about.html            # About page
│   ├── blog/                 # Blog posts and index
│   ├── styles/               # CSS files
│   ├── js/                   # JavaScript files
│   ├── images/               # Images and assets
│   ├── fonts/                # Custom fonts
│   ├── templates/            # HTML templates
│   ├── AI Marketing/         # AI marketing landing pages
│   ├── lead-magnets/         # Lead magnet pages
│   └── links/                # Affiliate and link management
├── api/                      # Vercel serverless functions
├── server/                   # Additional server functions
├── vercel.json              # Vercel configuration
└── package.json             # Node.js dependencies
```

## Development

### Local Development
1. Navigate to the `public` directory
2. Start a local server: `python3 -m http.server 8000`
3. Open `http://localhost:8000` in your browser

### Deployment
The site is deployed on Vercel with the following configuration:
- Static files are served from the `public` directory
- API functions are in the `api` directory
- Server functions are in the `server` directory

## Key Features

- **Template System**: Dynamic header/footer inclusion with automatic path adjustment
- **Responsive Design**: Mobile-first approach with modern CSS
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Performance**: Optimized images, CSS, and JavaScript loading
- **Accessibility**: ARIA labels, semantic markup, and keyboard navigation

## File Organization

### Templates
- `templates/header-template.html` - Site navigation
- `templates/footer-template.html` - Site footer
- `templates/page-template.html` - Page template with all includes

### JavaScript
- `js/template-includes.js` - Template loading and path adjustment
- `js/main.js` - Main site functionality
- `js/global-search.js` - Search functionality
- `js/blog-search.js` - Blog-specific search

### Styles
- `styles/main.css` - Main site styles
- `styles/blog.css` - Blog-specific styles
- `styles/digital-nomad-parents.css` - Specialized page styles

## API Functions

- `api/health.js` - Health check endpoint
- `api/subscribe.js` - Newsletter subscription
- `api/test.js` - Testing endpoint

## Server Functions

- `server/visa-guide-handler.js` - Visa guide form processing
- `server/waitlist-handler.js` - Waitlist management
- `server/create-checkout-session.js` - Payment processing

## Notes

- All static assets are now in the `public` directory
- The template system automatically adjusts paths based on page location
- API and server functions remain in the root for Vercel deployment
- CSS and JavaScript files use relative paths that work from any page depth 