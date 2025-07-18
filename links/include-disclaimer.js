// JavaScript function to include the disclaimer
document.addEventListener('DOMContentLoaded', function() {
    // Create a script element to fetch the disclaimer
    fetch('/links/disclaimer.html')
        .then(response => response.text())
        .then(data => {
            // Insert the disclaimer at the end of the content
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error loading disclaimer:', error));
});
