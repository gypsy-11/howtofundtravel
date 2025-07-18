# Job Links System

This system allows you to easily reuse job links across your blog posts.

## Files Included
- `job-links.json` - Contains all the job link data
- `job-links.js` - JavaScript utility to insert links into your pages

## How to Use

### Step 1: Include the Script
Add this script tag to your HTML page:

```html
<script src="job-links.js"></script>
```

### Step 2: Create a Container
Add a div where you want the links to appear:

```html
<div id="job-links-container"></div>
```

### Step 3: Load the Links
Use one of these methods:

#### Display ALL Job Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    loadJobLinks('job-links-container');
  });
</script>
```

#### Display SPECIFIC Job Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display Upwork, Fiverr and FlexJobs
    loadJobLinks('job-links-container', ['upwork', 'fiverr', 'flexjobs']);
  });
</script>
```

## Available Link IDs
- `upwork` - Upwork
- `fiverr` - Fiverr
- `flexjobs` - FlexJobs
- `remote` - Remote.co
- `bitcoinerjobs` - Bitcoinerjobs.com
- `cryptojobslist` - CryptoJobsList
- `cryptocurrencyjobs` - Cryptocurrency Jobs

## Manual Usage
If you prefer not to use JavaScript, you can manually copy the HTML from `job-links.json` and format it as needed.
