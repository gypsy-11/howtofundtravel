/**
 * Course Links Utility
 * 
 * This script allows you to easily insert course links from the course-links.json file
 * into your blog posts. You can insert all links or specific ones by their IDs.
 */

// Function to load and display course links
function loadCourseLinks(container, linkIds = null) {
  console.log('Loading course links for container:', container);
  
  // Use relative path that works from both root and subdirectories
  const linksPath = window.location.pathname.includes('/blog/') ? '../links/course-links.json' : '/links/course-links.json';
  
  fetch(linksPath)
    .then(response => {
      console.log('Course links response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Course links data:', data);
      const links = data.courseLinks;
      const linksToDisplay = linkIds 
        ? links.filter(link => linkIds.includes(link.id))
        : links;
      
      const linksContainer = document.getElementById(container);
      if (!linksContainer) {
        console.error(`Container with ID "${container}" not found.`);
        return;
      }
      
      console.log('Found container, adding links:', linksToDisplay.length);
      
      // Add introduction text if displaying all links
      if (!linkIds && linksToDisplay.length === links.length) {
        const introText = document.createElement('p');
        introText.textContent = "If you'd like a list of suggested courses, here are some that I've tried:";
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
    .catch(error => console.error('Error loading course links:', error));
}

// Example usage:
// Display all course links:
// loadCourseLinks('course-links-container');
// 
// Display specific course links:
// loadCourseLinks('course-links-container', ['google-digital-marketing', 'hubspot-certifications']);
