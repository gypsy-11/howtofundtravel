/**
 * Freebie Links Utility
 * 
 * This script allows you to easily insert freebie links from the freebie-links.json file
 * into your blog posts. You can insert all links or specific ones by their IDs.
 */

// Function to load and display freebie links
function loadFreebieLinks(container, linkIds = null) {
  fetch('/links/freebie-links.json')
    .then(response => response.json())
    .then(data => {
      const links = data.freebieLinks;
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
        linksContainer.insertAdjacentHTML('beforeend', '<p dir="ltr">Check out these free resources to help you get started: </p><p dir="ltr"><br></p>');
      }
      
      linksToDisplay.forEach(link => {
        const linkHtml = `
          <p dir="ltr">${link.icon} <a href="${link.url}">${link.title}</a> ${link.description}</p>
        `;
        linksContainer.insertAdjacentHTML('beforeend', linkHtml);
      });
    })
    .catch(error => console.error('Error loading freebie links:', error));
}

// Example usage:
// Display all freebie links:
// loadFreebieLinks('freebie-links-container');
// 
// Display specific freebie links:
// loadFreebieLinks('freebie-links-container', ['sixty-k-four-weeks-free', 'copy-that-sells-free']); 