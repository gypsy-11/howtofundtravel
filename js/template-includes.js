// Template Include System for How to Fund Travel
// Automatically includes header and footer templates with proper path adjustments

class TemplateManager {
    constructor() {
        this.basePath = this.getBasePath();
        console.log('TemplateManager initialized with basePath:', this.basePath);
    }

    getBasePath() {
        // Determine the base path based on current page location
        const path = window.location.pathname;
        const hostname = window.location.hostname;
        
        console.log('Current path:', path);
        console.log('Current hostname:', hostname);
        
        // For local development (localhost or file://)
        if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
            if (path.includes('/blog/')) {
                return '../';
            } else if (path === '/' || path === '/index.html' || path.endsWith('.html')) {
                return './';
            } else {
                return './';
            }
        }
        
        // For production
        if (path.startsWith('/blog/')) {
            return '../';
        } else if (path === '/' || path === '/index.html') {
            return './';
        } else {
            return './';
        }
    }

    async includeHeader() {
        try {
            const headerPath = `${this.basePath}templates/header-template.html`;
            console.log('Loading header from:', headerPath);
            
            const response = await fetch(headerPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const headerHtml = await response.text();
            console.log('Header loaded successfully');
            
            // Insert header at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', headerHtml);
            
            // Set active navigation state
            this.setActiveNavigation();
            
            // Initialize mobile navigation
            if (typeof initMobileNav === 'function') {
                initMobileNav();
            }
        } catch (error) {
            console.error('Error loading header template:', error);
            // Fallback: create a simple header
            this.createFallbackHeader();
        }
    }

    async includeFooter() {
        try {
            const footerPath = `${this.basePath}templates/footer-template.html`;
            console.log('Loading footer from:', footerPath);
            
            const response = await fetch(footerPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            let footerHtml = await response.text();
            console.log('Footer loaded successfully');
            
            // Adjust paths in footer template
            footerHtml = this.adjustPaths(footerHtml);
            
            // Insert footer before closing body tag
            document.body.insertAdjacentHTML('beforeend', footerHtml);
        } catch (error) {
            console.error('Error loading footer template:', error);
            // Fallback: create a simple footer
            this.createFallbackFooter();
        }
    }

    createFallbackHeader() {
        const fallbackHeader = `
            <header class="site-header">
                <div class="container">
                    <nav class="main-nav" aria-label="Main Navigation">
                        <a href="${this.basePath}" class="logo" aria-label="How to Fund Travel Home">
                            <img src="${this.basePath}images/how-to-fund-travel-logo-transparent.svg" alt="How to Fund Travel Logo" width="150" height="32">
                        </a>
                        
                        <button class="mobile-menu-toggle" aria-label="Toggle Menu" aria-expanded="false">
                            <span class="sr-only">Menu</span>
                            <span class="hamburger"></span>
                        </button>
                        
                        <ul class="nav-links">
                            <li><a href="${this.basePath}" data-nav="home">Home</a></li>
                            <li><a href="${this.basePath}blog/" data-nav="blog">Blog</a></li>
                            <li><a href="${this.basePath}about.html" data-nav="about">About Me</a></li>
                        </ul>
                        
                        <div class="header-actions">
                            <div class="search-container">
                                <input type="text" placeholder="Search travel funding tips..." class="search-input">
                                <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5S2.5 5.91 2.5 9.5s2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </svg>
                            </div>
                            <a href="${this.basePath}#newsletter" class="btn btn-primary subscribe-btn">Subscribe</a>
                        </div>
                    </nav>
                </div>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', fallbackHeader);
    }

    createFallbackFooter() {
        const fallbackFooter = `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <a href="${this.basePath}" class="footer-logo">
                                <img src="${this.basePath}images/how-to-fund-travel-logo-white.svg" alt="How to Fund Travel Logo" width="160" height="35">
                            </a>
                            <p class="footer-tagline">Helping families achieve location independence and fund their travel lifestyle.</p>
                        </div>
                        
                        <div class="footer-links">
                            <div class="footer-nav">
                                <h3>Navigation</h3>
                                <ul>
                                    <li><a href="${this.basePath}">Home</a></li>
                                    <li><a href="${this.basePath}blog/">Blog</a></li>
                                    <li><a href="${this.basePath}about.html">About</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="footer-newsletter">
                            <h3>Stay Connected</h3>
                            <p>Join our community of freedom seekers and receive travel funding tips.</p>
                            <a href="${this.basePath}#newsletter" class="btn btn-secondary">Subscribe</a>
                        </div>
                    </div>
                    
                    <div class="copyright">
                        <p>&copy; <script>document.write(new Date().getFullYear())</script> How to Fund Travel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', fallbackFooter);
    }

    adjustPaths(html) {
        // Replace relative paths with correct base path
        return html.replace(/href="\.\.\//g, `href="${this.basePath}`)
                   .replace(/src="\.\.\//g, `src="${this.basePath}`);
    }

    setActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('[data-nav]');
        
        navLinks.forEach(link => {
            const navType = link.getAttribute('data-nav');
            link.classList.remove('active');
            
            // Set active based on current page
            if (currentPath === '/' && navType === 'home') {
                link.classList.add('active');
            } else if (currentPath.startsWith('/blog/') && navType === 'blog') {
                link.classList.add('active');
            } else if (currentPath.includes('about') && navType === 'about') {
                link.classList.add('active');
            }
        });
    }

    // Initialize all templates
    async init() {
        console.log('Initializing templates...');
        await this.includeHeader();
        await this.includeFooter();
        console.log('Templates initialization complete');
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing TemplateManager...');
    const templateManager = new TemplateManager();
    templateManager.init();
}); 