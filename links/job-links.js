/**
 * Job Links Utility
 * 
 * This script allows you to easily insert job links from the job-links.json file
 * into your blog posts. You can insert all links or specific ones by their IDs.
 */

// Function to load and display job links
function loadJobLinks(container, linkIds = null) {
  console.log('Loading job links for container:', container);
  fetch('/links/job-links.json')
    .then(response => {
      console.log('Job links response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Job links data:', data);
      const links = data.remoteWorkLinks;
      const linksToDisplay = linkIds 
        ? links.filter(link => linkIds.includes(link.id))
        : links;
      
      const linksContainer = document.getElementById(container);
      if (!linksContainer) {
        console.error(`Container with ID "${container}" not found.`);
        return;
      }
      
      console.log('Found container, adding links:', linksToDisplay.length);
      linksToDisplay.forEach(link => {
        const linkHtml = `
          <p dir="ltr">
            <a href="${link.url}"><strong>${link.title}:</strong></a> ${link.description}
          </p>
        `;
        linksContainer.insertAdjacentHTML('beforeend', linkHtml);
      });
    })
    .catch(error => console.error('Error loading job links:', error));
}

// Example usage:
// Display all links:
// loadJobLinks('job-links-container');
// 
// Display specific links:
// loadJobLinks('job-links-container', ['upwork', 'fiverr', 'flexjobs']);
