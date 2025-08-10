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
    loadFreebieLinks('freebie-links-container', []);
  });
</script>
```

## Available Link IDs
*No freebie links currently available*

## Manual Usage
If you prefer not to use JavaScript, you can manually copy the HTML from `freebie-links.json` and format it as needed. 