const puppeteer = require('puppeteer');
const fs = require('fs');

async function analyzeTravelBlog() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Your blog's sitemap or main page
  const baseUrl = 'https://howtofund.travel';
  
  const results = [];
  
  try {
    // Start from your blog's main page or posts page
    await page.goto(`${baseUrl}/public/blog`); // adjust path as needed
    
    // Get all blog post links
    const postLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*="/"]'));
      return links
        .map(link => link.href)
        .filter(href => href.includes('blog') || href.includes('post'))
        .slice(0, 10); // Start with just 10 posts
    });
    
    console.log(`Found ${postLinks.length} blog posts to analyze...`);
    
    // Analyze each post
    for (const url of postLinks) {
      try {
        await page.goto(url);
        
        const postData = await page.evaluate(() => {
          return {
            title: document.querySelector('h1')?.textContent?.trim() || 'No title found',
            metaDescription: document.querySelector('meta[name="description"]')?.content || 'Missing meta description',
            wordCount: document.body.textContent.split(/\s+/).length,
            images: document.querySelectorAll('img').length,
            imagesWithoutAlt: document.querySelectorAll('img:not([alt]), img[alt=""]').length,
            internalLinks: Array.from(document.querySelectorAll('a[href*="howtofund.travel"]')).length,
            externalLinks: Array.from(document.querySelectorAll('a[href^="http"]:not([href*="howtofund.travel"])')).length
          };
        });
        
        results.push({
          url,
          ...postData
        });
        
        console.log(`✓ Analyzed: ${postData.title}`);
        
      } catch (error) {
        console.log(`✗ Error analyzing ${url}: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.log('Error:', error.message);
  }
  
  await browser.close();
  
  // Save results and create simple report
  fs.writeFileSync('blog-analysis.json', JSON.stringify(results, null, 2));
  
  // Simple console report
  console.log('\n=== BLOG ANALYSIS REPORT ===\n');
  
  // Find posts needing attention
  const needsMetaDesc = results.filter(post => post.metaDescription === 'Missing meta description');
  const shortPosts = results.filter(post => post.wordCount < 300);
  const missingAltTags = results.filter(post => post.imagesWithoutAlt > 0);
  
  console.log(`📝 Posts missing meta descriptions: ${needsMetaDesc.length}`);
  if (needsMetaDesc.length > 0) {
    needsMetaDesc.forEach(post => console.log(`   - ${post.title}`));
  }
  
  console.log(`\n📏 Short posts (under 300 words): ${shortPosts.length}`);
  if (shortPosts.length > 0) {
    shortPosts.forEach(post => console.log(`   - ${post.title} (${post.wordCount} words)`));
  }
  
  console.log(`\n🖼️  Posts with images missing alt tags: ${missingAltTags.length}`);
  if (missingAltTags.length > 0) {
    missingAltTags.forEach(post => console.log(`   - ${post.title} (${post.imagesWithoutAlt} images)`));
  }
  
  console.log(`\n💾 Full analysis saved to blog-analysis.json`);
}

// Run the analyzer
analyzeTravelBlog().catch(console.error);