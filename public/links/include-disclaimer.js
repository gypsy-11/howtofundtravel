// JavaScript function to include the disclaimer
document.addEventListener('DOMContentLoaded', function() {
    // Use relative path that works from both root and subdirectories
    const disclaimerPath = window.location.pathname.includes('/blog/') ? '../links/disclaimer.html' : '/links/disclaimer.html';
    
    // Create a script element to fetch the disclaimer
    fetch(disclaimerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the disclaimer at the end of the content
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading disclaimer:', error));
});
