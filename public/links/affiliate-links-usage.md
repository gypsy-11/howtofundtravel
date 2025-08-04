# Affiliate Links System

This system allows you to easily reuse affiliate links across your blog posts.

## Files Included
- `affiliate-links.json` - Contains all the affiliate link data
- `affiliate-links.js` - JavaScript utility to insert links into your pages

## How to Use

### Step 1: Include the Script
Add this script tag to your HTML page:

```html
<script src="/links/affiliate-links.js"></script>
```

### Step 2: Create a Container
Add a div where you want the affiliate links to appear:

```html
<div id="affiliate-links-container"></div>
```

### Step 3: Load the Links
Use one of these methods:

#### Display ALL Affiliate Links (Grouped by Category)
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    loadAffiliateLinks('affiliate-links-container');
  });
</script>
```

#### Display SPECIFIC Affiliate Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display selected affiliate links
    loadAffiliateLinks('affiliate-links-container', { 
      linkIds: ['wise', 'binance', 'duolingo'] 
    });
  });
</script>
```

#### Display Links from a Specific Category
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display crypto affiliate links
    loadAffiliateLinks('crypto-links-container', { 
      category: 'crypto' 
    });
  });
</script>
```

## Available Link Categories
- `finance` - Financial/investment platforms (Flippa, Fiverr, etc.)
- `crypto` - Cryptocurrency services (Binance, Bitrefill, etc.)
- `banking` - Banking services (Wise, N26, etc.)
- `lifestyle` - Lifestyle services (Duolingo, Everand, etc.)
- `tools` - Digital services and tools (Siteground, etc.)
- `travel` - Travel-related services (SafetyWing, etc.)
- `courses` - Educational courses and training programs

## Available Link IDs

### Finance
- `flippa` - Flippa
- `fiverr` - Fiverr
- `tiger-invest` - Tiger Invest

### Crypto
- `bitrefill` - Bitrefill
- `binance` - Binance
- `valora` - Valora
- `wirex` - Wirex
- `1inch` - 1inch
- `zebedee` - ZEBEDEE

### Banking
- `wise` - Wise (formerly TransferWise)
- `n26` - N26

### Lifestyle
- `duolingo` - Duolingo
- `everand` - Everand/Scribd
- `estrid` - Estrid
- `nuud` - Nuud

### Tools
- `siteground` - Siteground web hosting

### Travel
- `safetywing` - SafetyWing nomad insurance

### Courses
- `roadmap-course` - The Roadmap Course

## Manual Usage
If you prefer not to use JavaScript, you can manually copy the HTML from `affiliate-links.json` and format it as needed.
