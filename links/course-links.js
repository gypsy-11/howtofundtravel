/**
 * Course Links Utility
 * 
 * This script allows you to easily insert course links from the course-links.json file
 * into your blog posts. You can insert all links or specific ones by their IDs.
 */

// Function to load and display course links
function loadCourseLinks(container, linkIds = null) {
  console.log('Loading course links for container:', container);
  fetch('/links/course-links.json')
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
        linksContainer.insertAdjacentHTML('beforeend', '<p dir="ltr">If you\'d like a list of suggested courses, here are some that I\'ve tried: </p><p dir="ltr"><br></p>');
      }
      
      linksToDisplay.forEach(link => {
        const linkHtml = `
          <p dir="ltr">${link.icon} <a href="${link.url}">${link.title}</a> ${link.description}</p>
        `;
        linksContainer.insertAdjacentHTML('beforeend', linkHtml);
      });
    })
    .catch(error => console.error('Error loading course links:', error));
}

// Example usage:
// Display all course links:
// loadCourseLinks('course-links-container');
// 
// Display specific course links:
// loadCourseLinks('course-links-container', ['google-digital-marketing', 'hubspot-certifications']);
