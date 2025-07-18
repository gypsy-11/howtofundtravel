# How to Fund Travel - Site Structure

This document provides an overview of the website structure and how to use the different components.

## Folder Structure

```
howtofundtravel/
├── blogs/                 - Blog HTML files
│   ├── fundtravelaffliliateincomes.html
│   ├── fundtravelbuildonlinebusiness.html
│   ├── ...
│   └── blog-template.html - Template for new blog posts
│
├── links/                 - Link management system
│   ├── job-links.json     - Remote work job links data
│   ├── job-links.js       - Job links display utility
│   ├── course-links.json  - Course links data
│   ├── course-links.js    - Course links display utility
│   ├── book-links.json    - Book links data
│   ├── book-links.js      - Book links display utility
│   ├── affiliate-links.json - Affiliate links data
│   ├── affiliate-links.js - Affiliate links display utility
│   ├── disclaimer.html    - Disclaimer text
│   ├── include-disclaimer.js - Disclaimer inclusion utility
│   └── links-management.md - Documentation for links system
│
└── examples/              - Example files
    ├── example-usage.html
    ├── update-example-usage.html
    ├── complete-example.html
    ├── folder-structure-example.html
    └── affiliate-links-example.html
```

## How to Use

### Creating New Blog Posts

1. Copy `blogs/blog-template.html` to a new file in the `blogs/` folder
2. Edit the content and title
3. Use the links system as needed for your specific blog post

### Adding Links to Blog Posts

Include the necessary scripts in your HTML file:

```html
<script src="/links/job-links.js"></script>
<script src="/links/course-links.js"></script>
<script src="/links/book-links.js"></script>
<script src="/links/affiliate-links.js"></script>
```

Create container elements where you want the links to appear:

```html
<div id="job-links-container"></div>
<div id="course-links-container"></div>
<div id="book-links-container"></div>
<div id="affiliate-links-container"></div>
```

Load the links with JavaScript:

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Load all links
    loadJobLinks('job-links-container');
    loadCourseLinks('course-links-container');
    loadBookLinks('book-links-container');
    loadAffiliateLinks('affiliate-links-container');
    
    // Or load specific links
    loadJobLinks('specific-jobs', ['upwork', 'fiverr']);
    loadCourseLinks('free-courses', ['google-digital-marketing', 'hubspot-certifications']);
    loadBookLinks('tony-books', ['money-master-game', 'unshakeable']);
    loadAffiliateLinks('crypto-services', { category: 'crypto' });
  });
</script>
```

Include the disclaimer:

```html
<script src="/links/include-disclaimer.js"></script>
```

### Available Link Collections

1. **Job Links** - Remote work and freelancing opportunities
2. **Course Links** - Educational resources and courses
3. **Book Links** - Recommended books for money mindset shift
4. **Affiliate Links** - Various affiliate links organized by category:
   - Finance (Flippa, Fiverr, etc.)
   - Crypto (Binance, Bitrefill, etc.)
   - Banking (Wise, N26, etc.)
   - Lifestyle (Duolingo, Everand, etc.)

### Further Documentation

For more detailed information on using the links system, see:
- `/links/links-management.md` - Overview of all link systems
- `/links/job-links-usage.md` - Job links documentation
- `/links/course-links-usage.md` - Course links documentation
- `/links/book-links-usage.md` - Book links documentation
- `/links/affiliate-links-usage.md` - Affiliate links documentation

For working examples, see the files in the `/examples/` directory.
