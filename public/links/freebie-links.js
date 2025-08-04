/**
 * Freebie Links Utility
 * 
 * This script allows you to easily insert freebie links from the freebie-links.json file
 * into your blog posts. You can insert all links or specific ones by their IDs.
 */

// Function to load and display freebie links
function loadFreebieLinks(container, linkIds = null) {
  // Use relative path that works from both root and subdirectories
  const linksPath = window.location.pathname.includes('/blog/') ? '../links/freebie-links.json' : '/links/freebie-links.json';
  
  fetch(linksPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
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
        const introText = document.createElement('p');
        introText.textContent = "Check out these free resources to help you get started:";
        introText.style.cssText = `
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: var(--dark, #333);
        `;
        linksContainer.appendChild(introText);
      }
      
      // Create styled container similar to platforms-list
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
        
        // Create icon span
        const iconSpan = document.createElement('span');
        iconSpan.textContent = `${link.icon} `;
        iconSpan.style.cssText = `
          margin-right: 0.5rem;
          font-size: 1.2rem;
        `;
        
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.style.cssText = `
          color: var(--primary-color, #0066cc);
          font-weight: 600;
          text-decoration: none;
        `;
        linkElement.textContent = link.title;
        
        const description = document.createTextNode(` ${link.description}`);
        
        li.appendChild(iconSpan);
        li.appendChild(linkElement);
        li.appendChild(description);
        ul.appendChild(li);
      });
      
      styledContainer.appendChild(ul);
      linksContainer.appendChild(styledContainer);
    })
    .catch(error => console.error('Error loading freebie links:', error));
}

// Example usage:
// Display all freebie links:
// loadFreebieLinks('freebie-links-container');
// 
// Display specific freebie links:
// loadFreebieLinks('freebie-links-container', ['sixty-k-four-weeks-free', 'copy-that-sells-free']); 