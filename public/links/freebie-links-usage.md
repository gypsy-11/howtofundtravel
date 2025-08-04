# Freebie Links System

This system allows you to easily share free resources and courses across your blog posts.

## Files Included
- `freebie-links.json` - Contains all the freebie link data
- `freebie-links.js` - JavaScript utility to insert links into your pages

## How to Use

### Step 1: Include the Script
Add this script tag to your HTML page:

```html
<script src="/links/freebie-links.js"></script>
```

### Step 2: Create a Container
Add a div where you want the freebie links to appear:

```html
<div id="freebie-links-container"></div>
```

### Step 3: Load the Links
Use one of these methods:

#### Display ALL Freebie Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    loadFreebieLinks('freebie-links-container');
  });
</script>
```

#### Display SPECIFIC Freebie Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display specific freebies
    loadFreebieLinks('freebie-links-container', ['sixty-k-four-weeks-free', 'copy-that-sells-free']);
  });
</script>
```

## Available Link IDs
- `sixty-k-four-weeks-free` - FREE $60k in 4 weeks
- `new-system-online-business-free` - The New System To Launch An Online Business
- `first-1000-online-free` - How to make your first $1,000 Online
- `hundred-per-day-email-free` - How to Make $100 Per Day with Your Email List
- `copy-that-sells-free` - How to Write Copy that Sells
- `launch-it-course-free` - Launch it!
- `financial-freedom-free` - Financial Freedom For the Rest of Us
- `business-coach-free` - Business Coach
- `fasttrack-holiday-letting` - The Fasttrack Method for High Income Holiday Letting
- `make-11k-7days` - How to make $11k in 7 days with systeme.io

## Manual Usage
If you prefer not to use JavaScript, you can manually copy the HTML from `freebie-links.json` and format it as needed. 