# How to Fund Travel Links Management System

This document provides an overview of the complete links management system for your blog.

## Available Links Collections

The system currently manages five types of links:

1. **Job Links** - Remote work and freelancing opportunities
2. **Course Links** - Educational resources and courses
3. **Book Links** - Recommended books for money mindset shift
4. **Affiliate Links** - Various affiliate links organized by category
5. **Freebie Links** - Free resources, guides, and courses

## File Structure

```
links/
├── job-links.json           - Job links data
├── job-links.js             - Job links display utility
├── job-links-usage.md       - Job links documentation
├── course-links.json        - Course links data
├── course-links.js          - Course links display utility
├── course-links-usage.md    - Course links documentation
├── book-links.json          - Book links data
├── book-links.js            - Book links display utility
├── book-links-usage.md      - Book links documentation
├── affiliate-links.json     - Affiliate links data
├── affiliate-links.js       - Affiliate links display utility
├── affiliate-links-usage.md - Affiliate links documentation
├── freebie-links.json       - Freebie links data
├── freebie-links.js         - Freebie links display utility
├── freebie-links-usage.md   - Freebie links documentation
├── disclaimer.html          - Disclaimer text
├── include-disclaimer.js    - Disclaimer inclusion utility
└── links-management.md      - This file
```

## How to Add New Links

### Adding a New Job Link

1. Open `job-links.json`
2. Add a new entry to the `remoteWorkLinks` array:

```json
{
  "id": "unique-id",
  "title": "Link Title",
  "url": "https://example.com",
  "description": "Description of the link."
}
```

### Adding a New Course Link

1. Open `course-links.json`
2. Add a new entry to the `courseLinks` array:

```json
{
  "id": "unique-id",
  "title": "Course Title",
  "url": "https://example.com",
  "description": "Description of the course.",
  "icon": "📚"
}
```

### Adding a New Book Link

1. Open `book-links.json`
2. Add a new entry to the `bookLinks` array:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "url": "https://example.com",
  "description": "",
  "icon": "🌸"
}
```

### Adding a New Affiliate Link

1. Open `affiliate-links.json`
2. Add a new entry to the `affiliateLinks` array:

```json
{
  "id": "unique-id",
  "title": "Link Title",
  "url": "https://example.com",
  "description": "Description of the service.",
  "category": "finance" // Choose: finance, crypto, banking, or lifestyle
}
```

### Adding a New Freebie Link

1. Open `freebie-links.json`
2. Add a new entry to the `freebieLinks` array:

```json
{
  "id": "unique-id",
  "title": "Freebie Title",
  "url": "https://example.com",
  "description": "Description of the free resource.",
  "icon": "🎁"
}
```

## Using in Your Blog Posts

### Basic Implementation

1. Include the necessary script(s):
   ```html
   <script src="/links/job-links.js"></script>
   <script src="/links/course-links.js"></script>
   <script src="/links/book-links.js"></script>
   <script src="/links/affiliate-links.js"></script>
   <script src="/links/freebie-links.js"></script>
   ```

2. Create container elements:
   ```html
   <div id="my-job-links"></div>
   <div id="my-course-links"></div>
   <div id="my-book-links"></div>
   <div id="my-affiliate-links"></div>
   <div id="my-freebie-links"></div>
   ```

3. Load the links with JavaScript:
   ```html
   <script>
     document.addEventListener('DOMContentLoaded', function() {
       loadJobLinks('my-job-links');
       loadCourseLinks('my-course-links');
       loadBookLinks('my-book-links');
       loadAffiliateLinks('my-affiliate-links');
       loadFreebieLinks('my-freebie-links');
     });
   </script>
   ```

4. Add the disclaimer:
   ```html
   <script src="/links/include-disclaimer.js"></script>
   ```

### Advanced Usage Examples

#### Filter Links by Specific IDs or Categories
```javascript
// Only crypto job sites
loadJobLinks('crypto-job-container', ['bitcoinerjobs', 'cryptojobslist', 'cryptocurrencyjobs']);

// Only free courses
loadCourseLinks('free-courses-container', ['google-digital-marketing', 'hubspot-certifications']);

// Only Tony Robbins books
loadBookLinks('tony-robbins-container', ['money-master-game', 'unshakeable']);

// Only crypto affiliate links
loadAffiliateLinks('crypto-links-container', { category: 'crypto' });

// Only specific affiliate links
loadAffiliateLinks('selected-links', { linkIds: ['wise', 'binance', 'duolingo'] });

// Only free email marketing resources
loadFreebieLinks('email-marketing-freebies', ['sixty-k-four-weeks-free', 'hundred-per-day-email-free']);
```

## Examples

See the files in the `/examples/` directory for comprehensive working examples that demonstrate how to use all link types with different filtering options and styled presentation.
