/**
 * Book Links Utility
 * 
 * This script allows you to easily insert book recommendation links from the book-links.json file
 * into your blog posts. You can insert all links or specific ones by their IDs.
 */

// Function to load and display book links
function loadBookLinks(container, linkIds = null) {
  fetch('/links/book-links.json')
    .then(response => response.json())
    .then(data => {
      const links = data.bookLinks;
      const linksToDisplay = linkIds 
        ? links.filter(link => linkIds.includes(link.id))
        : links;
      
      const linksContainer = document.getElementById(container);
      if (!linksContainer) {
        console.error(`Container with ID "${container}" not found.`);
        return;
      }
      
      // Add introduction text if displaying all links
      if (!linkIds && linksToDisplay.length === links.length) {
        linksContainer.insertAdjacentHTML('beforeend', '<p dir="ltr"><strong>Recommended Reads for a Money Mindset Shift:</strong></p>');
      }
      
      linksToDisplay.forEach(link => {
        const linkHtml = `
          <p dir="ltr"><strong>${link.icon} </strong><a href="${link.url}"><strong>${link.title}</strong></a> by ${link.author}</p>
        `;
        linksContainer.insertAdjacentHTML('beforeend', linkHtml);
      });
    })
    .catch(error => console.error('Error loading book links:', error));
}

// Example usage:
// Display all book links:
// loadBookLinks('book-links-container');
// 
// Display specific book links:
// loadBookLinks('book-links-container', ['psychology-of-money', 'millionaire-mind']);
