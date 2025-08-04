/**
 * Affiliate Links Utility
 * 
 * This script allows you to easily insert affiliate links from the affiliate-links.json file
 * into your blog posts. You can insert all links, specific ones by their IDs, or filter by category.
 */

// Function to load and display affiliate links
function loadAffiliateLinks(container, options = {}) {
  // Options can include linkIds (array of specific IDs) or category (string)
  const { linkIds, category } = options;
  
  // Use relative path that works from both root and subdirectories
  const linksPath = window.location.pathname.includes('/blog/') ? '../links/affiliate-links.json' : '/links/affiliate-links.json';
  
  fetch(linksPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const links = data.affiliateLinks;
      
      // Filter links based on provided options
      let linksToDisplay = links;
      
      // Filter by specific IDs if provided
      if (linkIds && Array.isArray(linkIds)) {
        linksToDisplay = links.filter(link => linkIds.includes(link.id));
      }
      // Filter by category if provided (and IDs weren't provided)
      else if (category) {
        linksToDisplay = links.filter(link => link.category === category);
      }
      
      const linksContainer = document.getElementById(container);
      if (!linksContainer) {
        console.error(`Container with ID "${container}" not found.`);
        return;
      }
      
      // Add category headers if showing multiple categories
      if (!category && !linkIds) {
        const categories = [...new Set(links.map(link => link.category))];
        
        categories.forEach(cat => {
          const categoryLinks = links.filter(link => link.category === cat);
          const categoryName = cat.charAt(0).toUpperCase() + cat.slice(1);
          
          // Create category header
          const categoryHeader = document.createElement('h3');
          categoryHeader.textContent = `${categoryName} Links`;
          categoryHeader.style.cssText = `
            color: var(--dark, #333);
            margin: 2rem 0 1rem 0;
            font-size: 1.5rem;
            font-weight: 600;
          `;
          linksContainer.appendChild(categoryHeader);
          
          // Create styled container for this category
          const styledContainer = document.createElement('div');
          styledContainer.className = 'platforms-list';
          styledContainer.style.cssText = `
            background: var(--light, #f8f9fa);
            padding: 2rem;
            border-radius: var(--radius-lg, 0.5rem);
            margin: 1rem 0 2rem 0;
          `;
          
          // Create unordered list
          const ul = document.createElement('ul');
          ul.style.cssText = `
            list-style: none;
            padding: 0;
            margin: 0;
          `;
          
          categoryLinks.forEach((link, index) => {
            const li = document.createElement('li');
            li.style.cssText = `
              padding: 0.75rem 0;
              border-bottom: 1px solid var(--border-color, #dee2e6);
              font-size: 1.1rem;
              line-height: 1.6;
            `;
            
            // Remove border from last item
            if (index === categoryLinks.length - 1) {
              li.style.borderBottom = 'none';
            }
            
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = '_blank';
            linkElement.style.cssText = `
              color: var(--primary-color, #0066cc);
              font-weight: 600;
              text-decoration: none;
            `;
            linkElement.textContent = link.title;
            
            const description = document.createTextNode(` - ${link.description}`);
            
            li.appendChild(linkElement);
            li.appendChild(description);
            ul.appendChild(li);
          });
          
          styledContainer.appendChild(ul);
          linksContainer.appendChild(styledContainer);
        });
      } else {
        // Create styled container for filtered links
        const styledContainer = document.createElement('div');
        styledContainer.className = 'platforms-list';
        styledContainer.style.cssText = `
          background: var(--light, #f8f9fa);
          padding: 2rem;
          border-radius: var(--radius-lg, 0.5rem);
          margin: 2rem 0;
        `;
        
        // Create unordered list
        const ul = document.createElement('ul');
        ul.style.cssText = `
          list-style: none;
          padding: 0;
          margin: 0;
        `;
        
        // Simply display the filtered links without category headers
        linksToDisplay.forEach((link, index) => {
          const li = document.createElement('li');
          li.style.cssText = `
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border-color, #dee2e6);
            font-size: 1.1rem;
            line-height: 1.6;
          `;
          
          // Remove border from last item
          if (index === linksToDisplay.length - 1) {
            li.style.borderBottom = 'none';
          }
          
          const linkElement = document.createElement('a');
          linkElement.href = link.url;
          linkElement.target = '_blank';
          linkElement.style.cssText = `
            color: var(--primary-color, #0066cc);
            font-weight: 600;
            text-decoration: none;
          `;
          linkElement.textContent = link.title;
          
          const description = document.createTextNode(` - ${link.description}`);
          
          li.appendChild(linkElement);
          li.appendChild(description);
          ul.appendChild(li);
        });
        
        styledContainer.appendChild(ul);
        linksContainer.appendChild(styledContainer);
      }
    })
    .catch(error => console.error('Error loading affiliate links:', error));
}

// Example usage:
// Display all affiliate links grouped by category:
// loadAffiliateLinks('affiliate-links-container');
// 
// Display specific affiliate links:
// loadAffiliateLinks('affiliate-links-container', { linkIds: ['wise', 'binance', 'duolingo'] });
//
// Display links from a specific category:
// loadAffiliateLinks('crypto-links-container', { category: 'crypto' });
