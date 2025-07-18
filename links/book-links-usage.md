# Book Links System

This system allows you to easily reuse book recommendation links across your blog posts.

## Files Included
- `book-links.json` - Contains all the book link data
- `book-links.js` - JavaScript utility to insert links into your pages

## How to Use

### Step 1: Include the Script
Add this script tag to your HTML page:

```html
<script src="book-links.js"></script>
```

### Step 2: Create a Container
Add a div where you want the book links to appear:

```html
<div id="book-links-container"></div>
```

### Step 3: Load the Links
Use one of these methods:

#### Display ALL Book Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    loadBookLinks('book-links-container');
  });
</script>
```

#### Display SPECIFIC Book Links
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display selected books
    loadBookLinks('book-links-container', ['psychology-of-money', 'millionaire-mind']);
  });
</script>
```

#### Display Books by Author
```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Only display Tony Robbins books
    loadBookLinks('tony-robbins-books', ['money-master-game', 'unshakeable']);
  });
</script>
```

## Available Link IDs
- `law-of-attraction` - The Key to Living the Law of Attraction by Jack Canfield
- `happy-pocket-money` - A Happy Pocket Full of Money by David Cameron Gikandi
- `psychology-of-money` - The Psychology of Money by Morgan Housel
- `millionaire-mind` - The Secrets of the Millionaire Mind by T. Harv Eker
- `money-master-game` - Money: Master the Game by Tony Robbins
- `unshakeable` - Unshakable by Tony Robbins

## Manual Usage
If you prefer not to use JavaScript, you can manually copy the HTML from `book-links.json` and format it as needed.
