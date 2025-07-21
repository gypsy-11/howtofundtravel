/**
 * Main JavaScript for How to Fund Travel
 * Handles navigation, animations, and core functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize favicon for all pages
  initFavicon();
  
  // Mobile Navigation Toggle
  initMobileNav();
  
  // Smooth scrolling for anchor links
  initSmoothScroll();
  
  // Initialize animations for elements as they enter viewport
  initScrollAnimations();
  
  // Newsletter form handling
  initNewsletterForm();
});

/**
 * Mobile Navigation Functionality
 */
function initMobileNav() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle the menu
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.classList.toggle('nav-open');
    
    // Transform hamburger into X
    if (isExpanded) {
      menuToggle.classList.remove('open');
    } else {
      menuToggle.classList.add('open');
    }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('active') &&
      !e.target.closest('.nav-links') &&
      !e.target.closest('.mobile-menu-toggle')
    ) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
      document.body.classList.remove('nav-open');
      menuToggle.classList.remove('open');
    }
  });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#" (often used for buttons)
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          document.body.classList.remove('nav-open');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.classList.remove('open');
        }
        
        // Get header height for offset
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        
        // Scroll to element
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight - 20, // Additional 20px buffer
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Animate elements when they enter the viewport
 */
function initScrollAnimations() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (!animateElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Handle newsletter form submission
 */
function initNewsletterForm() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector('button[type="submit"]');
    
    if (!emailInput || !submitButton) return;
    
    const email = emailInput.value.trim();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage(newsletterForm, 'Please enter a valid email address.', 'error');
      return;
    }
    
    // Disable form while submitting
    emailInput.disabled = true;
    submitButton.disabled = true;
    submitButton.innerHTML = 'Subscribing...';
    
    try {
      // Replace with your actual form submission logic
      // This is a placeholder for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success!
      showFormMessage(newsletterForm, 'Thank you for subscribing! Check your email for confirmation.', 'success');
      newsletterForm.reset();
      
    } catch (error) {
      // Handle error
      showFormMessage(newsletterForm, 'Sorry, there was an error. Please try again.', 'error');
      console.error('Newsletter form submission error:', error);
      
    } finally {
      // Re-enable form
      emailInput.disabled = false;
      submitButton.disabled = false;
      submitButton.innerHTML = 'Get Free Access';
    }
  });
}

/**
 * Display form messages (success/error)
 */
function showFormMessage(form, message, type = 'success') {
  // Remove any existing messages
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create new message
  const messageElement = document.createElement('div');
  messageElement.className = `form-message form-message-${type}`;
  messageElement.textContent = message;
  
  // Insert message after form
  form.appendChild(messageElement);
  
  // Auto-hide message after 5 seconds
  setTimeout(() => {
    messageElement.classList.add('form-message-hiding');
    
    // Remove message after fade out
    setTimeout(() => {
      if (messageElement.parentNode) {
        messageElement.remove();
      }
    }, 300);
  }, 5000);
}

/**
 * Initialize favicon for all pages
 * Ensures favicon is present on every page, even if not explicitly added to HTML
 */
function initFavicon() {
  // Check if favicon links already exist
  const existingFavicon = document.querySelector('link[rel="icon"]');
  const existingAppleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
  
  // Only add favicon links if they don't already exist
  if (!existingFavicon) {
    // Add SVG favicon
    const svgFavicon = document.createElement('link');
    svgFavicon.rel = 'icon';
    svgFavicon.type = 'image/svg+xml';
    svgFavicon.href = 'images/how-to-fund-travel-favicon.svg';
    document.head.appendChild(svgFavicon);
    
    // Add PNG favicon as fallback
    const pngFavicon = document.createElement('link');
    pngFavicon.rel = 'icon';
    pngFavicon.type = 'image/png';
    pngFavicon.href = 'images/howtofundtravel-favicon.png';
    document.head.appendChild(pngFavicon);
  }
  
  if (!existingAppleTouchIcon) {
    // Add Apple touch icon for iOS devices
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.href = 'images/howtofundtravel-favicon.png';
    document.head.appendChild(appleTouchIcon);
  }
} 