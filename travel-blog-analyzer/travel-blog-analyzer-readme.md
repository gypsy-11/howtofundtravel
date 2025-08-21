# Travel Blog Analyzer

Quick SEO analysis tool for Howtofund.travel blog posts.

## Quick Start

```bash
# 1. Navigate to the tool directory
cd travel-blog-analyzer

# 2. Run the analyzer
node analyzer.js

# 3. Check results
# - Terminal report shows issues to fix
# - blog-analysis.json contains full data
```

## What It Analyzes

- ✅ Missing meta descriptions
- ✅ Short posts (under 300 words)
- ✅ Images without alt tags
- ✅ Word count per post
- ✅ Internal vs external link counts

## Output Files

- `blog-analysis.json` - Complete data for all analyzed posts
- Terminal report - Summary of issues needing attention

## Configuration

Edit `analyzer.js` to customize:

```javascript
const baseUrl = 'https://howtofund.travel';  // Your blog URL
await page.goto(`${baseUrl}/blog`);          // Path to your posts
.slice(0, 10);                               // Number of posts to analyze
```

## Common Issues & Fixes

**"Found 0 blog posts"**
- Check the path in `page.goto()` matches your blog structure
- Try `/posts`, `/`, or `/articles` instead of `/blog`

**Connection errors**
- Check your internet connection
- Make sure your blog URL is correct and accessible

**Slow performance**
- Reduce the number of posts analyzed: change `.slice(0, 10)` to `.slice(0, 5)`

## Useful Cursor Prompts for Enhancements

**Add features:**
- "Add a feature that finds posts about the same country that should link to each other"
- "Check for posts that mention funding methods but don't link to the main funding guide"
- "Find posts that haven't been updated in over 6 months"
- "Analyze which destination posts are missing budget information"

**Fix issues:**
- "Help me modify this to work with my specific blog structure"
- "Add error handling for posts that fail to load"
- "Make the output more readable/colorful"

**Export options:**
- "Export results to CSV instead of JSON"
- "Create an HTML report I can view in browser"
- "Send results to a Google Sheet"

## Dependencies

- Node.js (v14+)
- puppeteer (for web crawling)

## Installation Reminder

If setting up on a new machine:
```bash
npm install puppeteer
```

## Tips

- Run weekly to catch new posts with issues
- Focus on fixing missing meta descriptions first (biggest SEO impact)
- Use the JSON file to track improvements over time