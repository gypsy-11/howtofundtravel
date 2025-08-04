# Template System - How to Fund Travel

This directory contains templates to ensure consistency across all pages of the How to Fund Travel website.

## Template Files

### `page-template.html` - Complete Page Template
**Use this for new pages to ensure consistency.**

- ✅ Includes all necessary CSS files
- ✅ Includes Google Fonts
- ✅ Includes template include system
- ✅ Proper HTML structure
- ✅ SEO meta tags template

### `header-template.html` - Header Partial
**Automatically included by template-includes.js**

- Navigation menu
- Search functionality
- Mobile menu toggle
- Automatic active state management

### `footer-template.html` - Footer Partial
**Automatically included by template-includes.js**

- Brand information
- Navigation links
- Newsletter signup
- Social media links
- Copyright notice
- SVG icon sprite

## How to Use

### For New Pages:
1. **Copy `page-template.html`** as your starting point
2. **Update the meta tags** (title, description, etc.)
3. **Add your content** in the `<main>` section
4. **Uncomment any additional scripts** you need

### For Existing Pages:
1. **Ensure CSS is loaded**: `styles/main.css` and `styles/blog.css`
2. **Include template-includes.js**: `<script src="js/template-includes.js" defer></script>`
3. **Remove manual header/footer** - they'll be loaded automatically

## CSS Requirements

Every page must include these CSS files for consistent styling:

```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Stylesheets -->
<link rel="stylesheet" href="styles/main.css">
<link rel="stylesheet" href="styles/blog.css">
```

## Path Adjustments

The template system automatically adjusts paths based on page location:
- **Root pages** (`/`): Uses `./` paths
- **Blog pages** (`/blog/`): Uses `../` paths
- **Other pages**: Uses `./` paths

## Scripts

### Required:
- `js/template-includes.js` - Loads header and footer

### Optional (uncomment as needed):
- `js/main.js` - Main site functionality
- `links/affiliate-links.js` - Affiliate link management
- `links/course-links.js` - Course link management
- `links/book-links.js` - Book link management
- `links/include-disclaimer.js` - Disclaimer inclusion

## Best Practices

1. **Always use `page-template.html`** for new pages
2. **Don't manually include header/footer** - let the system handle it
3. **Keep CSS loading consistent** across all pages
4. **Test on different page depths** to ensure paths work correctly
5. **Use the template include system** rather than copying HTML manually

## Troubleshooting

### Footer not styled?
- Ensure `styles/main.css` is loaded
- Check that `template-includes.js` is included

### Images not loading?
- The system automatically adjusts paths
- Check browser console for 404 errors

### Navigation not working?
- Ensure `js/main.js` is loaded for mobile menu
- Check that `template-includes.js` loaded successfully 