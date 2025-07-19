/**
 * Blog Search Functionality for How to Fund Travel
 * Handles client-side searching of blog content
 */

document.addEventListener('DOMContentLoaded', () => {
  initBlogSearch();
});

/**
 * Initialize blog search functionality
 */
function initBlogSearch() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('#blog-search');
  
  if (!searchForm || !searchInput) return;
  
  // Store the original posts HTML for reset
  const blogPostsContainer = document.querySelector('.posts-grid');
  if (!blogPostsContainer) return;
  
  const originalPosts = blogPostsContainer.innerHTML;
  
  // Add search handler
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
      // Reset to original posts if search is empty
      blogPostsContainer.innerHTML = originalPosts;
      return;
    }
    
    performSearch(searchTerm);
  });
  
  // Search on input change (optional - can be disabled for performance)
  let debounceTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimeout);
    
    debounceTimeout = setTimeout(() => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      // Only trigger search if at least 3 characters entered
      if (searchTerm.length >= 3) {
        performSearch(searchTerm);
      } else if (searchTerm.length === 0) {
        // Reset when search cleared
        blogPostsContainer.innerHTML = originalPosts;
      }
    }, 500); // Debounce delay
  });
  
  /**
   * Perform client-side search
   * Note: In a real implementation, this would ideally be server-side or use a dedicated search API
   */
  function performSearch(searchTerm) {
    const blogPostsContainer = document.querySelector('.posts-grid');
    const allPosts = document.querySelectorAll('.post-card');
    
    if (!blogPostsContainer) return;
    
    // If no posts or no search term, return
    if (!allPosts.length || !searchTerm) return;
    
    // Filter posts based on search term
    const matchingPosts = Array.from(allPosts).filter(post => {
      const title = post.querySelector('.post-title')?.textContent.toLowerCase() || '';
      const excerpt = post.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
      const category = post.querySelector('.post-category')?.textContent.toLowerCase() || '';
      
      // Check if search term is in any of these fields
      return (
        title.includes(searchTerm) || 
        excerpt.includes(searchTerm) || 
        category.includes(searchTerm)
      );
    });
    
    // Update UI with results
    updateSearchResults(matchingPosts, searchTerm);
  }
  
  /**
   * Update UI with search results
   */
  function updateSearchResults(matchingPosts, searchTerm) {
    const blogPostsContainer = document.querySelector('.posts-grid');
    const blogPostsSection = document.querySelector('.blog-posts');
    
    if (!blogPostsContainer || !blogPostsSection) return;
    
    // Clear existing posts
    blogPostsContainer.innerHTML = '';
    
    // Update heading
    const heading = blogPostsSection.querySelector('h2');
    if (heading) {
      heading.textContent = matchingPosts.length > 0 
        ? `Search Results for "${searchTerm}"` 
        : 'No Results Found';
    }
    
    // Add results count before container
    const resultsCount = document.createElement('div');
    resultsCount.className = 'search-results-count';
    resultsCount.textContent = matchingPosts.length > 0 
      ? `Found ${matchingPosts.length} article${matchingPosts.length === 1 ? '' : 's'}` 
      : 'Try another search term or browse all articles';
    
    // Check if results count already exists and replace it, otherwise add new one
    const existingCount = blogPostsSection.querySelector('.search-results-count');
    if (existingCount) {
      existingCount.replaceWith(resultsCount);
    } else {
      blogPostsContainer.before(resultsCount);
    }
    
    // If no matches found
    if (matchingPosts.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = `
        <p>No articles match your search for "${searchTerm}".</p>
        <button class="btn btn-secondary reset-search">View All Articles</button>
      `;
      blogPostsContainer.appendChild(noResults);
      
      // Add event listener to reset button
      const resetButton = noResults.querySelector('.reset-search');
      if (resetButton) {
        resetButton.addEventListener('click', () => {
          // Clear search input and reset posts
          searchInput.value = '';
          blogPostsContainer.innerHTML = originalPosts;
          
          // Reset heading
          if (heading) heading.textContent = 'Latest Articles';
          
          // Remove results count
          if (resultsCount) resultsCount.remove();
        });
      }
      
      return;
    }
    
    // Append matching posts to container
    matchingPosts.forEach(post => {
      blogPostsContainer.appendChild(post.cloneNode(true));
    });
    
    // Add reset option
    const resetContainer = document.createElement('div');
    resetContainer.className = 'search-reset';
    resetContainer.innerHTML = `
      <button class="btn btn-secondary reset-search">Clear Search</button>
    `;
    blogPostsContainer.after(resetContainer);
    
    // Add event listener to reset button
    const resetButton = resetContainer.querySelector('.reset-search');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        // Clear search input and reset posts
        searchInput.value = '';
        blogPostsContainer.innerHTML = originalPosts;
        
        // Reset heading
        if (heading) heading.textContent = 'Latest Articles';
        
        // Remove results count and reset container
        if (resultsCount) resultsCount.remove();
        if (resetContainer) resetContainer.remove();
      });
    }
  }
} 