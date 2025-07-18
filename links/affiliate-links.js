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
  
  fetch('/links/affiliate-links.json')
    .then(response => response.json())
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
          
          linksContainer.insertAdjacentHTML('beforeend', `<h3>${categoryName} Links</h3>`);
          
          categoryLinks.forEach(link => {
            const linkHtml = `
              <p><a href="${link.url}" target="_blank">${link.title}</a> - ${link.description}</p>
            `;
            linksContainer.insertAdjacentHTML('beforeend', linkHtml);
          });
        });
      } else {
        // Simply display the filtered links without category headers
        linksToDisplay.forEach(link => {
          const linkHtml = `
            <p><a href="${link.url}" target="_blank">${link.title}</a> - ${link.description}</p>
          `;
          linksContainer.insertAdjacentHTML('beforeend', linkHtml);
        });
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
