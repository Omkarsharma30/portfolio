// Mobile-specific JavaScript enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Optimize floating elements for mobile
    function adjustFloatingElements() {
        const isMobile = window.innerWidth < 768;
        const floatingItems = document.querySelectorAll('.profile-float-item');
        
        floatingItems.forEach(item => {
            // Add touch effect for mobile devices
            item.addEventListener('touchstart', function() {
                this.classList.add('pop-effect');
                
                // Show tooltip on mobile with title attribute
                const title = this.getAttribute('title');
                if (title && isMobile) {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'mobile-tooltip';
                    tooltip.textContent = title;
                    document.body.appendChild(tooltip);
                    
                    // Position tooltip near the item
                    const rect = this.getBoundingClientRect();
                    tooltip.style.top = rect.top + 'px';
                    tooltip.style.left = rect.left + rect.width + 'px';
                    
                    // Remove tooltip after delay
                    setTimeout(() => {
                        document.body.removeChild(tooltip);
                    }, 1500);
                }
                
                // Remove effect after animation completes
                setTimeout(() => {
                    this.classList.remove('pop-effect');
                }, 500);
            });
        });
    }
    
    // Enhance Education Cards for Mobile
    function enhanceEducationCards() {
        if (window.innerWidth < 768) {
            const educationCards = document.querySelectorAll('.education-card');
            
            educationCards.forEach(card => {
                // Add tap to expand functionality on mobile
                card.addEventListener('click', function() {
                    this.classList.toggle('expanded');
                });
            });
            
            // Make key strengths interactive
            const strengthItems = document.querySelectorAll('.strength-item');
            strengthItems.forEach(item => {
                item.addEventListener('touchstart', function() {
                    this.classList.add('active');
                    
                    setTimeout(() => {
                        this.classList.remove('active');
                    }, 300);
                });
            });
        }
    }
    
    // Enhance skill bars for mobile
    function enhanceSkillBarsForMobile() {
        // Add touch feedback for skill items
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            // Add touch feedback
            item.addEventListener('touchstart', function() {
                this.classList.add('active');
                
                // Reset after touch
                setTimeout(() => {
                    this.classList.remove('active');
                }, 300);
            });
            
            // Make sure progress bars animate properly on mobile
            const progressBar = item.querySelector('.progress-bar');
            if (progressBar) {
                // Make sure we have the proper width from data attribute
                const targetWidth = progressBar.getAttribute('data-width') || 0;
                
                // Create an observer for this specific skill item
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                progressBar.style.width = targetWidth + '%';
                                progressBar.classList.add('animate');
                            }, 300);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.2 });
                
                observer.observe(item);
            }
        });
    }
    
    // Adjust image and animations for mobile
    function optimizeForMobile() {
        const isMobile = window.innerWidth < 768;
        const profileWrapper = document.querySelector('.profile-image-wrapper');
        
        if (isMobile && profileWrapper) {
            // Optimize animations for mobile performance
            document.documentElement.style.setProperty('--animation-speed', '0.8');
        } else if (profileWrapper) {
            document.documentElement.style.setProperty('--animation-speed', '1');
        }
        
        // Apply specific adjustments for education section on small screens
        if (isMobile) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }
    
    // Handle resize events
    window.addEventListener('resize', function() {
        optimizeForMobile();
        enhanceEducationCards();
    });
    
    // Initial setup
    adjustFloatingElements();
    optimizeForMobile();
    enhanceEducationCards();
    
    // Call mobile-specific enhancements
    if (window.innerWidth < 768) {
        enhanceSkillBarsForMobile();
    }
    
    // Improve scroll performance on mobile
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (window.innerWidth < 768) {
            document.body.classList.add('is-scrolling');
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                document.body.classList.remove('is-scrolling');
            }, 150);
        }
    });
});
