# Google Analytics 4 Setup

## Overview
Google Analytics 4 (GA4) has been added to your website to enable comprehensive tracking and analytics.

## What's Been Done

### ✅ Template Integration
- **Page Template Updated**: `templates/page-template.html` now includes GA4 code
- **Automatic Inclusion**: All new pages created from this template will automatically include GA4

### ✅ Key Pages Updated
- `index.html` (Homepage)
- `blog/index.html` (Blog homepage)
- `about.html` (About page)
- `book-a-call.html` (Booking page)

### ✅ Helper Script Created
- `js/add-gtm.js` - A utility script to add GA4 to any page programmatically

## Next Steps

### 1. GA4 Measurement ID
**COMPLETED**: Your GA4 measurement ID `G-DPJ8XP3RBD` has been added to all files:

- `templates/page-template.html`
- `index.html`
- `blog/index.html`
- `about.html`
- `book-a-call.html`

### 2. Add to Remaining Pages
For any other pages that don't use the template, add the GA4 code manually:

**In the `<head>` section:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DPJ8XP3RBD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DPJ8XP3RBD');
</script>
```

### 3. Using the Helper Script
For quick addition to any page, you can use the helper script:

1. Include the script: `<script src="js/add-gtm.js"></script>`
2. Call the function: `<script>addGA4('G-DPJ8XP3RBD');</script>`

## Verification

### How to Test
1. Open your website in a browser
2. Open Developer Tools (F12)
3. Check the Console for any GA4-related errors
4. Verify that the `dataLayer` object exists in the Console
5. Check the Network tab to see if GA4 requests are being sent

### Google Analytics Real-Time Reports
1. Go to your Google Analytics account
2. Navigate to Reports > Realtime
3. Visit your website
4. You should see your visit appear in real-time

## Benefits

- **Comprehensive Tracking**: Track page views, events, conversions, and user behavior
- **Real-Time Data**: See visitor activity as it happens
- **Performance**: GA4 loads asynchronously, so it won't slow down your site
- **Advanced Analytics**: Get insights into user engagement, demographics, and more

## Support

If you need help with GA4 setup or configuration, refer to:
- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Community](https://support.google.com/analytics/community)

---

**Last Updated**: [Current Date]
**Status**: ✅ Complete - GA4 tracking active 