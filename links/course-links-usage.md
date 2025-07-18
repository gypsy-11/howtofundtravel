# Course Links System

This system allows you to easily reuse course recommendation links across your blog posts.

## Files Included
- `course-links.json` - Contains all the course link data
- `course-links.js` - JavaScript utility to insert links into your pages

## How to Use

### Step 1: Include the Script
Add this script tag to your HTML page:

```html
<script src="course-links.js"></script>
```

### Step 2: Create a Container
Add a div where you want the course links to appear:

```html
<div id="course-links-container"></div>
```

### Step 3: Load the Links
Use one of these methods:

#### Display ALL Course Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    loadCourseLinks('course-links-container');
  });
</script>
```

#### Display SPECIFIC Course Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display Google and HubSpot courses
    loadCourseLinks('course-links-container', ['google-digital-marketing', 'hubspot-certifications']);
  });
</script>
```

## Available Link IDs
- `google-digital-marketing` - Google course on Digital Marketing
- `hubspot-certifications` - HubSpot Certifications
- `linkedin-digital-marketing` - LinkedIn Learning - Master Digital Marketing
- `systemeio-academy` - SystemeIO Academy
- `the-roadmap` - The Roadmap

## Manual Usage
If you prefer not to use JavaScript, you can manually copy the HTML from `course-links.json` and format it as needed.
