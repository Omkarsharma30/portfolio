// Civil Engineering Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Check for mobile device
    const isMobile = window.innerWidth < 992;
    window.isMobileDevice = isMobile;
    
    // Set mobile mode CSS variable
    document.documentElement.style.setProperty('--is-mobile', isMobile ? '1' : '0');
    
    if (isMobile) {
        document.body.classList.add('mobile-view');
    }
    
    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initSmoothScrolling();
    initTypingEffect();
    
    // Enhanced features
    initEnhancedAnimations();
    initScrollAnimationsEnhanced();
    initProgressBars(); // Unified progress bar initialization
    initTypingAnimation();
    
    // Only run parallax on desktop for better performance
    if (!isMobile) {
        initParallaxEffects();
    }
    
    initInteractiveElements();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Active navigation link
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Improved offset calculation for better positioning
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const offsetTop = targetSection.offsetTop - navbarHeight - 10;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
    
    // Enhanced scroll indicator behavior
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        // Hide scroll indicator when user scrolls down
        window.addEventListener('scroll', function() {
            if (window.scrollY > window.innerHeight * 0.3) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
        
        // Add hover effect
        scrollIndicator.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        scrollIndicator.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Trigger skill bar animations when skills section is visible
                if (entry.target.closest('#about')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.education-card, .project-card, .resume-summary, .contact-form');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Enhanced scroll animations with better performance
function initEnhancedAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Trigger progress bar animations when skills section is visible
                if (entry.target.closest('.skills-section')) {
                    animateProgressBars();
                }
                
                // Stagger animations for multiple elements
                const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
                siblings.forEach((sibling, index) => {
                    setTimeout(() => {
                        sibling.classList.add('animated');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Unified progress bar functionality
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Reset all progress bars to 0%
    progressBars.forEach(bar => {
        bar.style.width = '0%';
        
        // Remove animated class initially to prevent conflicts
        bar.classList.remove('progress-bar-animated');
    });
    
    // Set up intersection observer for animation
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar[data-width]');
    
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const targetWidth = bar.getAttribute('data-width') || 0;
            
            // Animate width
            bar.style.width = targetWidth + '%';
            
            // Add animation class after width is set
            setTimeout(() => {
                bar.classList.add('animate');
            }, 1000);
            
        }, index * 150);
    });
}

// Enhanced progress bar handling for all skill bars
document.addEventListener('DOMContentLoaded', function() {
    // Add consistent animation to all progress bars
    const style = document.createElement('style');
    style.textContent = `
        @keyframes progressBarGlow {
            0% { box-shadow: 0 0 2px rgba(0, 0, 0, 0.2); }
            50% { box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); }
            100% { box-shadow: 0 0 2px rgba(0, 0, 0, 0.2); }
        }
        
        .progress-bar.animate {
            animation: progressAnimation 3s ease infinite;
        }
    `;
    document.head.appendChild(style);
});

// Create progress counter animation (if needed)
function createProgressCounter(targetValue) {
    let currentValue = 0;
    const increment = targetValue / 50;
    
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
        }
    }, 30);
    
    return counter;
}

// Typing effect for hero section
function initTypingEffect() {
    const tagline = document.querySelector('.hero-content .lead');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.borderRight = '2px solid #fff';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    tagline.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Enhanced typing animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '2px solid rgba(255, 255, 255, 0.7)';
    
    let charIndex = 0;
    const typeSpeed = 50;
    
    function typeCharacter() {
        if (charIndex < text.length) {
            typingElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, typeSpeed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                typingElement.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeCharacter, 1500);
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            <span>${message}</span>
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const speed = scrolled * 0.5;
        heroSection.style.transform = `translateY(${speed}px)`;
    }
});

// Enhanced parallax effects
function initParallaxEffects() {
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const heroElements = heroSection.querySelectorAll('.hero-content, .hero-image, .floating-card');
            
            if (scrollPosition <= window.innerHeight) {
                const scrollRatio = scrollPosition / window.innerHeight;
                
                // Parallax effect for hero content
                heroElements.forEach((element, index) => {
                    const speed = 0.2 + (index * 0.05);
                    const yPos = scrollPosition * speed;
                    
                    if (element.classList.contains('hero-content')) {
                        element.style.transform = `translateY(${yPos}px)`;
                    } else if (element.classList.contains('hero-image')) {
                        element.style.transform = `translateY(${yPos * 0.8}px)`;
                    } else if (element.classList.contains('floating-card')) {
                        element.style.transform = `translateY(${yPos * 0.6}px)`;
                    }
                });
                
                // Fade out hero section as user scrolls down
                heroSection.style.opacity = 1 - (scrollRatio * 0.5);
            }
        });
    }
    
    // Initialize floating shapes animation
    const decorations = document.querySelectorAll('.decoration');
    if (decorations.length > 0) {
        decorations.forEach((decoration, index) => {
            const randomDuration = 15 + (index * 5);
            const randomDelay = index * 2;
            
            decoration.style.animation = `float ${randomDuration}s infinite ease-in-out ${randomDelay}s`;
        });
    }
}

// Add custom mouse follow effect to hero section
function initInteractiveElements() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Move decorative elements based on mouse position
            const decorations = document.querySelectorAll('.decoration');
            decorations.forEach((decoration, index) => {
                const offsetX = (mouseX - 0.5) * (20 + index * 5);
                const offsetY = (mouseY - 0.5) * (20 + index * 5);
                
                decoration.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
            
            // Add subtle tilt effect to profile image
            const profileImage = document.querySelector('.profile-image-wrapper');
            if (profileImage) {
                const rotateX = (mouseY - 0.5) * 10;
                const rotateY = (mouseX - 0.5) * -10;
                
                profileImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
            
            // Enhanced floating elements interaction
            const floatingItems = document.querySelectorAll('.profile-float-item');
            floatingItems.forEach((item, index) => {
                const distance = (index + 1) * 0.5;
                const offsetX = (mouseX - 0.5) * (30 * distance);
                const offsetY = (mouseY - 0.5) * (30 * distance);
                
                // Apply a smooth transition based on mouse position
                item.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${1 + Math.abs(mouseX - 0.5) * 0.2})`;
            });
        });
    }
    
    // Add click effects to floating items
    const floatingItems = document.querySelectorAll('.profile-float-item');
    floatingItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create pop effect
            this.classList.add('pop-effect');
            
            // Remove the class after animation completes
            setTimeout(() => {
                this.classList.remove('pop-effect');
            }, 500);
            
            // Show skill message based on the icon
            const skillTitle = this.getAttribute('title');
            showSkillToast(skillTitle);
        });
    });
}

// Function to show skill toast notification
function showSkillToast(skillTitle) {
    // Remove existing toasts
    const existingToast = document.querySelector('.skill-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'skill-toast';
    toast.textContent = skillTitle;
    document.body.appendChild(toast);
    
    // Show the toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Hide and remove after 2.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// Enhanced card interactions
function initCardInteractions() {
    const cards = document.querySelectorAll('.content-card, .skills-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Floating elements animation
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-card, .shape');
    
    floatingElements.forEach(element => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 4 + Math.random() * 2;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
    });
}

// Enhanced navigation highlighting
function initEnhancedNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Performance optimized scroll handler
let ticking = false;

function updateScrollEffects() {
    // Update navbar background
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// Download resume functionality
function downloadResume() {
    // Track download event (for analytics)
    console.log('Resume download initiated');
}

// Mobile menu enhancement
document.addEventListener('click', function(e) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close mobile menu when clicking outside
    if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }
});

// Back to top button
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'btn btn-primary back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: none;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
createBackToTopButton();

// Loading screen (optional)
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Print functionality
function printResume() {
    window.print();
}

// Social media share functionality
function shareProject(platform) {
    const url = window.location.href;
    const title = 'Check out my Civil Engineering Project - College Parking Design';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Theme switcher (optional dark mode)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Custom JavaScript enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Floating elements animation
    initFloatingElements();
    
    // Preloader enhancement
    showPreloader();
});

// Preloader enhancement
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">
                <i class="fas fa-hard-hat fa-3x text-primary mb-3"></i>
                <h4>Loading Portfolio...</h4>
            </div>
            <div class="preloader-spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    `;
    
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #2c5aa0, #34495e);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: white;
        text-align: center;
    `;
    
    document.body.appendChild(preloader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
}

// Add custom CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(styleSheet);
