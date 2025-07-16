/**
 * Enhanced 404 Error Page JavaScript
 * For Omkar Kumar Sharma's Portfolio
 * Created: July 16, 2025
 * Adds interactive and fun elements to the 404 page with humor and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all fun features
    initErrorPage();
    initRandomQuotes();
    initErrorCodeGenerator();
    initKonamiCode();
    initClickEffects();
    initRandomStats();
    addConsoleEasterEgg();
    initAnimatedCounters();
    initConstructionFacts();
    initMessageGenerator();
});

// Game state
let progressInterval;
let factsIndex = 0;

/**
 * Initialize the 404 page with animations and interactions
 */
function initErrorPage() {
    // Add particle effects to the background
    createParticles();
    
    // Add hover effects to elements
    addHoverEffects();
    
    // Add parallax effect to the error content
    initParallaxEffect();
    
    // Initialize confetti effect when clicking on 404 number
    initConfettiEffect();
    
    // Add 3D tilt effect to buttons
    initTiltEffect();
    
    // Add new smooth interactions
    initSmoothInteractions();
    
    // Enhanced parallax
    initEnhancedParallax();
    
    // Smooth scrolling
    initSmoothScrolling();
}

/**
 * Create animated particles in the background
 */
function createParticles() {
    const particlesContainer = document.querySelector('.error-particles');
    
    // Only proceed if the container exists
    if (!particlesContainer) return;
    
    // Create 30 particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Set random styles
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = getRandomColor();
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Add animation
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Create and add keyframes
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                }
                25% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                }
                100% {
                    transform: translate(0, 0) rotate(${Math.random() * 360}deg);
                }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        // Add particle to container
        particlesContainer.appendChild(particle);
    }
}

/**
 * Get a random color for particles
 */
function getRandomColor() {
    const colors = [
        'rgba(44, 90, 160, 0.7)',   // Primary blue
        'rgba(52, 152, 219, 0.7)',  // Accent blue
        'rgba(46, 204, 113, 0.7)',  // Green
        'rgba(243, 156, 18, 0.7)',  // Orange
        'rgba(231, 76, 60, 0.7)'    // Red
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Add hover effects to interactive elements
 */
function addHoverEffects() {
    // Add hover effect to the error number
    const errorNumber = document.querySelector('.error-number');
    if (errorNumber) {
        errorNumber.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        errorNumber.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add hover effects to suggestion links
    const suggestionLinks = document.querySelectorAll('.suggestion-link');
    suggestionLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Initialize parallax effect on mouse move
 */
function initParallaxEffect() {
    const errorContent = document.querySelector('.error-content');
    if (!errorContent) return;
    
    document.addEventListener('mousemove', function(e) {
        // Calculate mouse position relative to the center of the screen
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Apply parallax effect to different elements
        const elements = {
            '.error-number': { x: -20, y: -20 },
            '.crane': { x: 10, y: 5 },
            '.hard-hat': { x: -15, y: 10 },
            '.blueprint-roll': { x: 8, y: -10 }
        };
        
        // Apply transform to each element
        for (const [selector, intensity] of Object.entries(elements)) {
            const element = document.querySelector(selector);
            if (element) {
                element.style.transform = `translate(${mouseX * intensity.x}px, ${mouseY * intensity.y}px)`;
            }
        }
    });
}

/**
 * Initialize confetti effect when clicking on 404 number
 */
function initConfettiEffect() {
    const errorNumber = document.querySelector('.error-number');
    if (!errorNumber) return;
    
    errorNumber.addEventListener('click', function() {
        // Create confetti container if it doesn't exist
        let confettiContainer = document.querySelector('.confetti-container');
        if (!confettiContainer) {
            confettiContainer = document.createElement('div');
            confettiContainer.className = 'confetti-container';
            confettiContainer.style.position = 'absolute';
            confettiContainer.style.top = '0';
            confettiContainer.style.left = '0';
            confettiContainer.style.width = '100%';
            confettiContainer.style.height = '100%';
            confettiContainer.style.pointerEvents = 'none';
            confettiContainer.style.zIndex = '100';
            document.querySelector('.error-section').appendChild(confettiContainer);
        }
        
        // Create and animate confetti pieces
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            
            // Randomly style the confetti
            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.background = getRandomColor();
            confetti.style.position = 'absolute';
            confetti.style.top = '50%';
            confetti.style.left = '50%';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            // Set animation
            const duration = Math.random() * 3 + 2;
            const xDistance = (Math.random() - 0.5) * 500;
            const yDistance = Math.random() * -500;
            
            confetti.style.animation = `confettiFall ${duration}s ease forwards`;
            
            // Create keyframes for this confetti
            const keyframes = `
                @keyframes confettiFall {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${xDistance}px, ${yDistance}px) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.innerHTML = keyframes;
            document.head.appendChild(style);
            
            // Add to container and remove after animation
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
                style.remove();
            }, duration * 1000);
        }
    });
}

/**
 * Add 3D tilt effect to buttons
 */
function initTiltEffect() {
    const buttons = document.querySelectorAll('.error-actions .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const buttonRect = this.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;
            
            // Calculate mouse position relative to button center
            const mouseX = e.clientX - buttonX;
            const mouseY = e.clientY - buttonY;
            
            // Calculate tilt
            const tiltX = (mouseY / buttonRect.height) * 10;
            const tiltY = -(mouseX / buttonRect.width) * 10;
            
            // Apply transform
            this.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
            this.style.transition = 'transform 0.5s ease';
        });
    });
}

/**
 * Enhanced smooth transitions for all interactive elements
 */
function initSmoothInteractions() {
    // Add smooth hover effects to all clickable elements
    const clickableElements = document.querySelectorAll('button, .btn, a, .clickable, .easter-egg, .suggestion-link, .stat-card');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            if (!this.style.transform.includes('scale')) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            }
        });
        
        element.addEventListener('mouseleave', function(e) {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
        
        element.addEventListener('mousedown', function(e) {
            this.style.transform = 'translateY(-1px) scale(0.98)';
        });
        
        element.addEventListener('mouseup', function(e) {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });
}

/**
 * Enhanced parallax effect for smoother scrolling
 */
function initEnhancedParallax() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.error-particles, .error-blueprint');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Smooth scroll to sections
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Rotates through funny quotes
 */
function initRandomQuotes() {
    const funnyQuotes = [
        { text: "Have you tried turning the website off and on again?", author: "IT Department" },
        { text: "Error 404: Common sense not found", author: "System Administrator" },
        { text: "I'm not lost, I'm just exploring alternative routes!", author: "GPS Navigator" },
        { text: "This page went on vacation and forgot to leave a note", author: "Travel Agent" },
        { text: "Houston, we have a problem... and it's a missing page", author: "NASA Control" },
        { text: "Page not found. But hey, you found this message!", author: "Optimistic Developer" },
        { text: "The page you're looking for is in another castle", author: "Princess Peach" },
        { text: "Error 404: Coffee machine broken, developer cannot function", author: "Caffeine Dependent Coder" }
    ];

    const quoteElement = document.querySelector('.quote-text');
    const authorElement = document.querySelector('.quote-author');
    
    if (quoteElement && authorElement) {
        let currentQuoteIndex = 0;
        
        setInterval(() => {
            // Fade out
            quoteElement.style.opacity = '0';
            authorElement.style.opacity = '0';
            
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % funnyQuotes.length;
                quoteElement.textContent = `"${funnyQuotes[currentQuoteIndex].text}"`;
                authorElement.textContent = `- ${funnyQuotes[currentQuoteIndex].author}`;
                
                // Fade in
                quoteElement.style.opacity = '1';
                authorElement.style.opacity = '1';
            }, 300);
        }, 5000); // Change quote every 5 seconds
    }
}

/**
 * Generates random error codes
 */
function initErrorCodeGenerator() {
    const errorCodes = [
        "COFFEE_NOT_FOUND",
        "MONDAY_MORNING_SYNDROME",
        "CTRL_ALT_DELETE_LIFE",
        "INTERNET_EXPLORER_DETECTED",
        "SEMICOLON_MISSING",
        "RUBBER_DUCK_UNAVAILABLE",
        "KEYBOARD_NOT_FOUND_PRESS_F1",
        "WIFI_PASSWORD_INCORRECT",
        "STACK_OVERFLOW_AGAIN"
    ];
    
    const errorCodeElement = document.querySelector('.error-code .badge');
    
    if (errorCodeElement) {
        setInterval(() => {
            const randomCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];
            errorCodeElement.innerHTML = `<i class="fas fa-exclamation-triangle me-2"></i>Error Code: ${randomCode}`;
        }, 8000); // Change error code every 8 seconds
    }
}

/**
 * Secret Konami code easter egg
 */
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                triggerKonamiEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function triggerKonamiEasterEgg() {
    // Create a celebration effect
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    z-index: 9999; background: rgba(0,0,0,0.9); color: white; padding: 2rem; 
                    border-radius: 15px; text-align: center; font-size: 1.2rem;">
            <h3>🎉 Konami Code Activated! 🎉</h3>
            <p>You've unlocked the secret engineer mode!</p>
            <p>Here's a virtual hard hat: 👷‍♂️</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: #2c5aa0; color: white; border: none; padding: 0.5rem 1rem; 
                           border-radius: 5px; margin-top: 1rem; cursor: pointer;">
                Cool! Close this
            </button>
        </div>
    `;
    document.body.appendChild(celebration);
    
    // Add some confetti effect
    createConfetti();
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
@keyframes confettiFall {
    to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(confettiStyle);

/**
 * Add click effects to various elements
 */
function initClickEffects() {
    // Add click effect to the 404 number
    const errorNumber = document.querySelector('.error-number');
    if (errorNumber) {
        errorNumber.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s ease-in-out, pulse 3s infinite 0.5s';
            }, 10);
            
            // Change color temporarily
            const originalColor = this.style.background;
            this.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            setTimeout(() => {
                this.style.background = originalColor;
            }, 1000);
        });
    }
    
    // Add hover sound effect simulation (visual feedback)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Animate statistics with random numbers
 */
function initRandomStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
        if (index === 1) return; // Skip the infinity symbol
        if (index === 2) return; // Skip the "42" answer
        if (index === 3) return; // Skip the "100%" one
        
        // Animate the first stat (404 pages lost)
        if (index === 0) {
            animateNumber(stat, 0, 404, 2000);
        }
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

/**
 * Console easter egg
 */
function addConsoleEasterEgg() {
    console.log('%c🚧 CONSTRUCTION ZONE DETECTED! 🚧', 'font-size: 20px; font-weight: bold; color: #f39c12; background: #2c3e50; padding: 10px;');
    console.log('%cLooks like you\'re inspecting the code! 👨‍💻', 'font-size: 14px; color: #3498db;');
    console.log('%cFun fact: This 404 page has more features than some entire websites! 😄', 'font-size: 12px; color: #27ae60;');
    console.log('%cTry the Konami Code: ↑↑↓↓←→←→BA', 'font-size: 12px; color: #e74c3c; font-weight: bold;');
    console.log('%cDeveloped with ❤️ and probably too much coffee ☕', 'font-size: 12px; color: #8e44ad;');
}

// Add a fun page title changer
let titleMessages = [
    "404 - Oops! 🤷‍♂️",
    "404 - Still looking... 🔍",
    "404 - Page on vacation 🏖️",
    "404 - Construction zone 🚧",
    "404 - Try again? 🤔"
];

let titleIndex = 0;
setInterval(() => {
    document.title = titleMessages[titleIndex];
    titleIndex = (titleIndex + 1) % titleMessages.length;
}, 3000);

// Add a secret developer mode toggle
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 10) {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
        clickCount = 0;
    }
});

// Interactive Functions for New Elements

/**
 * Animate traffic cone when clicked
 */
function animateCone(cone) {
    cone.style.animation = 'none';
    cone.style.transform = 'scale(1.5) rotate(360deg)';
    
    setTimeout(() => {
        cone.style.transform = '';
        cone.style.animation = 'coneWobble 3s ease-in-out infinite';
    }, 500);
    
    // Add a fun sound effect (visual feedback)
    showClickFeedback(cone, '🎉');
}

/**
 * Show worker dialog
 */
function showWorkerDialog() {
    const messages = [
        "Need help finding your way? 🤔",
        "I'm just here for the hard hat fashion! 👷‍♂️",
        "Have you tried the construction game? 🎮",
        "Coffee break in 5 minutes! ☕",
        "The page is around here somewhere... 📍",
        "Union rules say I can only point, not build! 👆",
        "404 pages are my specialty! 🏗️"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a temporary speech bubble
    const worker = document.querySelector('.construction-worker');
    const bubble = document.createElement('div');
    bubble.className = 'worker-dialog';
    bubble.innerHTML = `
        <div style="
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 10px 15px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            font-size: 0.8rem;
            white-space: nowrap;
            z-index: 1000;
            animation: fadeInOut 3s ease-in-out;
        ">
            ${randomMessage}
        </div>
    `;
    
    worker.appendChild(bubble);
    
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
        }
    }, 3000);
}

/**
 * Start construction progress animation
 */
function startConstruction() {
    const progressBar = document.getElementById('progressBar');
    const progressText = progressBar?.querySelector('.progress-text');
    const button = event.target;
    
    if (!progressBar || !progressText) return;
    
    // Disable button during construction
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-cog fa-spin me-2"></i>Building...';
    
    if (progressInterval) {
        clearInterval(progressInterval);
    }
    
    // Reset progress
    progressBar.style.width = '0%';
    progressText.textContent = 'Initializing...';
    
    let progress = 0;
    const messages = [
        'Initializing systems...', 
        'Laying foundation...', 
        'Raising the framework...', 
        'Installing components...', 
        'Adding CSS styling...', 
        'Connecting JavaScript...', 
        'Testing functionality...', 
        'Final quality check...', 
        'Page reconstructed!'
    ];
    
    const sounds = ['🔨', '⚡', '🔧', '🎨', '💻', '🔗', '🧪', '✅', '🎉'];
    
    progressInterval = setInterval(() => {
        const increment = Math.random() * 8 + 2; // Random progress between 2-10%
        progress += increment;
        
        if (progress > 100) progress = 100;
        
        // Update progress bar with smooth animation
        progressBar.style.width = progress + '%';
        progressBar.style.transition = 'width 0.3s ease';
        
        // Update message based on progress
        const messageIndex = Math.min(Math.floor((progress / 100) * (messages.length - 1)), messages.length - 1);
        const currentMessage = messages[messageIndex];
        const currentSound = sounds[messageIndex];
        
        progressText.innerHTML = `${currentSound} ${currentMessage}`;
        
        // Add visual effects during construction
        if (progress < 100) {
            // Random sparkle effect
            if (Math.random() < 0.3) {
                createConstructionSparkle(progressBar);
            }
            
            // Progress milestone celebrations
            if (progress >= 25 && progress < 35 && !progressBar.dataset.milestone25) {
                progressBar.dataset.milestone25 = 'true';
                showMiniMessage(progressBar.parentNode, '🎯 25% Complete!');
            }
            if (progress >= 50 && progress < 60 && !progressBar.dataset.milestone50) {
                progressBar.dataset.milestone50 = 'true';
                showMiniMessage(progressBar.parentNode, '🎯 Halfway there!');
            }
            if (progress >= 75 && progress < 85 && !progressBar.dataset.milestone75) {
                progressBar.dataset.milestone75 = 'true';
                showMiniMessage(progressBar.parentNode, '🎯 Almost done!');
            }
        }
        
        // Completion
        if (progress >= 100) {
            clearInterval(progressInterval);
            progressText.innerHTML = '🎉 Construction Complete!';
            progressBar.classList.add('progress-complete');
            
            // Celebration effects
            setTimeout(() => {
                createConfetti();
                flashScreen('#28a745');
                showClickFeedback(progressBar.parentNode, '�️ Page Successfully Rebuilt! 🏗️');
                
                // Reset button
                button.disabled = false;
                button.innerHTML = '<i class="fas fa-play me-2"></i>Start Construction';
                
                // Reset progress after celebration
                setTimeout(() => {
                    progressBar.style.width = '0%';
                    progressBar.classList.remove('progress-complete');
                    progressText.textContent = 'Building...';
                    delete progressBar.dataset.milestone25;
                    delete progressBar.dataset.milestone50;
                    delete progressBar.dataset.milestone75;
                }, 3000);
                
            }, 500);
        }
    }, 300); // Update every 300ms for smooth animation
}

/**
 * Initialize animated counters
 */
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.animated-counter .stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target === 99999) {
                counter.textContent = current >= target ? '∞' : Math.floor(current);
            } else if (target === 100) {
                counter.textContent = Math.floor(current) + '%';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 50);
    };
    
    // Animate counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-number');
                if (counter && !counter.dataset.animated) {
                    counter.dataset.animated = 'true';
                    animateCounter(counter);
                }
            }
        });
    });
    
    counters.forEach(counter => {
        observer.observe(counter.closest('.stat-card'));
    });
}

/**
 * Initialize construction facts
 */
function initConstructionFacts() {
    window.constructionFacts = [
        "The Empire State Building was built in just 410 days! ⚡",
        "The Panama Canal took 10 years to build and cost $375 million! 🚢",
        "The Great Wall of China took over 2,000 years to complete! 🏯",
        "Burj Khalifa has 163 floors above ground! 🏗️",
        "The Golden Gate Bridge's cables contain 80,000 miles of wire! 🌉",
        "Ancient Romans invented concrete that could set underwater! 🌊",
        "The Sydney Opera House took 14 years to build! 🎭",
        "Machu Picchu was built without using any mortar! 🏔️",
        "The Leaning Tower of Pisa took 344 years to complete! 🗼",
        "Hoover Dam contains enough concrete to pave a road from NYC to LA! 🛣️"
    ];
}

/**
 * Show random construction fact
 */
function showRandomFact() {
    const factElement = document.getElementById('currentFact');
    const facts = window.constructionFacts || [];
    
    if (facts.length === 0) return;
    
    // Get a different fact than current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * facts.length);
    } while (newIndex === factsIndex && facts.length > 1);
    
    factsIndex = newIndex;
    
    // Animate text change
    factElement.style.opacity = '0';
    
    setTimeout(() => {
        factElement.textContent = facts[factsIndex];
        factElement.style.opacity = '1';
    }, 200);
}

/**
 * Initialize message generator
 */
function initMessageGenerator() {
    window.errorMessages = [
        "Our digital architects are drafting new blueprints! 📐",
        "The webpage construction crew is on a coffee break! ☕",
        "Error 404: Page went to grab some tools and never came back! 🔧",
        "This page is still under construction... literally! 🏗️",
        "Our servers are having an existential crisis! 🤖",
        "The page took a detour through the digital Bermuda Triangle! 🔺",
        "404: This page is playing hide and seek (and winning)! 👻",
        "Emergency! All web pages have been evacuated to safety! 🚨",
        "This page is taking a well-deserved vacation! 🏖️",
        "Error: Page has been abducted by alien developers! 👽",
        "The page is attending a important meeting in cyberspace! 💼",
        "404: Page went viral and couldn't handle the fame! 🌟"
    ];
}

/**
 * Generate random error message
 */
function generateRandomMessage() {
    const messageElement = document.getElementById('generatedMessage');
    const messages = window.errorMessages || [];
    
    if (messages.length === 0) return;
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Animate message change
    messageElement.style.opacity = '0';
    messageElement.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        messageElement.textContent = randomMessage;
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateX(0)';
    }, 200);
}

/**
 * Easter egg triggers
 */
function triggerEasterEgg(type) {
    const body = document.body;
    
    // Add click feedback
    showMiniMessage(event.target, '🎮 Activated!');
    
    switch(type) {
        case 'matrix':
            body.classList.toggle('matrix-effect');
            
            // Add matrix rain effect
            createMatrixRain();
            
            // Show matrix message
            showSystemMessage('ENTERING THE MATRIX...', '#00ff00');
            
            setTimeout(() => {
                body.classList.remove('matrix-effect');
                showSystemMessage('MATRIX MODE DEACTIVATED', '#ff0000');
            }, 8000);
            break;
            
        case 'disco':
            body.classList.add('disco-mode');
            
            // Add disco ball effect
            createDiscoBall();
            
            // Change page title
            const originalTitle = document.title;
            document.title = '🕺 DISCO TIME! 🕺';
            
            showSystemMessage('🎵 DISCO MODE ACTIVATED! 🎵', '#ff00ff');
            
            setTimeout(() => {
                body.classList.remove('disco-mode');
                document.title = originalTitle;
                removeDiscoBall();
                showSystemMessage('🎵 DISCO ENDED 🎵', '#666');
            }, 5000);
            break;
            
        case 'gravity':
            // Anti-gravity effect
            document.querySelectorAll('.error-content, .error-content *').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('zero-gravity');
                }, index * 50);
            });
            
            showSystemMessage('🌍 ZERO GRAVITY ACTIVATED 🌍', '#0066ff');
            
            // Add floating particles
            createFloatingParticles();
            
            setTimeout(() => {
                document.querySelectorAll('.zero-gravity').forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.remove('zero-gravity');
                    }, index * 30);
                });
                showSystemMessage('🌍 GRAVITY RESTORED 🌍', '#0066ff');
            }, 8000);
            break;
            
        case 'konami':
            // Ultimate easter egg
            createMegaConfetti();
            flashScreen('#ffd700');
            showSystemMessage('🎮 KONAMI CODE MASTER! 🎮', '#ffd700');
            
            // Temporary god mode
            body.classList.add('konami-mode');
            
            // Show achievement
            showAchievement('🏆 KONAMI MASTER', 'You found the legendary code!');
            
            setTimeout(() => {
                body.classList.remove('konami-mode');
            }, 5000);
            break;
    }
}

/**
 * Create confetti effect
 */
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🎉', '🎊', '✨', '🌟'][Math.floor(Math.random() * 4)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

/**
 * Show click feedback
 */
function showClickFeedback(element, message) {
    const feedback = document.createElement('div');
    feedback.innerHTML = message;
    feedback.style.position = 'absolute';
    feedback.style.top = '50%';
    feedback.style.left = '50%';
    feedback.style.transform = 'translate(-50%, -50%)';
    feedback.style.fontSize = '1.5rem';
    feedback.style.fontWeight = 'bold';
    feedback.style.color = '#007bff';
    feedback.style.zIndex = '9999';
    feedback.style.pointerEvents = 'none';
    feedback.style.animation = 'feedbackPop 2s ease-out';
    
    element.style.position = 'relative';
    element.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

// Add CSS animations for new effects
const additionalStyles = document.createElement('style');
additionalStyles.innerHTML = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        10%, 90% { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    @keyframes feedbackPop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1) translateY(-50px); opacity: 0; }
    }
    
    @keyframes miniMessagePop {
        0% { transform: translateX(-50%) translateY(10px) scale(0.8); opacity: 0; }
        20% { transform: translateX(-50%) translateY(-5px) scale(1.1); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-40px) scale(0.9); opacity: 0; }
    }
    
    @keyframes flashEffect {
        0% { opacity: 0.7; }
        50% { opacity: 0.3; }
        100% { opacity: 0; }
    }
    
    @keyframes sparkleEffect {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: scale(0.8) rotate(360deg) translateY(-30px); opacity: 0; }
    }
    
    @keyframes systemMessageSlide {
        0% { transform: translateX(120%); opacity: 0; }
        15% { transform: translateX(0); opacity: 1; }
        85% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(120%); opacity: 0; }
    }
    
    @keyframes discoBallSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes discoBallExit {
        0% { transform: scale(1) rotate(0deg); opacity: 1; }
        100% { transform: scale(0) rotate(180deg); opacity: 0; }
    }
    
    @keyframes coneWobble {
        0%, 100% { transform: rotate(-5deg); }
        50% { transform: rotate(5deg); }
    }
    
    @keyframes miniConfettiFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    @keyframes matrixFall {
        0% { transform: translateY(-100px); }
        100% { transform: translateY(100vh); }
    }
    
    @keyframes floatAround {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(90deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
        75% { transform: translateY(-30px) rotate(270deg); }
    }
    
    @keyframes megaConfettiFall {
        0% { transform: translateY(0) rotate(0deg) scale(0.5); opacity: 1; }
        10% { transform: scale(1); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg) scale(0.8); opacity: 0; }
    }
    
    @keyframes achievementSlide {
        0% { top: -100px; opacity: 0; }
        15% { top: 50px; opacity: 1; }
        85% { top: 50px; opacity: 1; }
        100% { top: -100px; opacity: 0; }
    }
    
    /* Enhanced effects for special modes */
    .progress-complete {
        background: linear-gradient(90deg, #28a745, #20c997, #28a745) !important;
        background-size: 200% 100% !important;
        animation: progressShine 1s linear infinite !important;
    }
    
    @keyframes progressShine {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    .konami-mode {
        animation: konamiGlow 1s ease-in-out infinite alternate !important;
    }
    
    @keyframes konamiGlow {
        0% { filter: hue-rotate(0deg) saturate(1); }
        100% { filter: hue-rotate(360deg) saturate(1.5); }
    }
`;
document.head.appendChild(additionalStyles);

/**
 * Helper Functions for Enhanced Features
 */

/**
 * Show mini message with animation
 */
function showMiniMessage(element, message) {
    const miniMsg = document.createElement('div');
    miniMsg.innerHTML = message;
    miniMsg.style.cssText = `
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 123, 255, 0.9);
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 1000;
        pointer-events: none;
        animation: miniMessagePop 2s ease-out forwards;
        white-space: nowrap;
    `;
    
    element.style.position = 'relative';
    element.appendChild(miniMsg);
    
    setTimeout(() => {
        if (miniMsg.parentNode) {
            miniMsg.remove();
        }
    }, 2000);
}

/**
 * Flash screen effect
 */
function flashScreen(color = '#ffffff') {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: ${color};
        z-index: 9999;
        pointer-events: none;
        opacity: 0.7;
        animation: flashEffect 0.5s ease-out;
    `;
    
    document.body.appendChild(flash);
    
    setTimeout(() => flash.remove(), 500);
}

/**
 * Create construction sparkle effect
 */
function createConstructionSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        top: ${Math.random() * 20 - 10}px;
        left: ${Math.random() * 100}%;
        font-size: 1rem;
        pointer-events: none;
        z-index: 100;
        animation: sparkleEffect 1s ease-out forwards;
    `;
    
    element.parentNode.style.position = 'relative';
    element.parentNode.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

/**
 * Show system message
 */
function showSystemMessage(message, color = '#007bff') {
    const systemMsg = document.createElement('div');
    systemMsg.innerHTML = message;
    systemMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: ${color};
        padding: 15px 20px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 9999;
        border: 2px solid ${color};
        animation: systemMessageSlide 4s ease-out forwards;
        max-width: 300px;
        text-align: center;
    `;
    
    document.body.appendChild(systemMsg);
    
    setTimeout(() => systemMsg.remove(), 4000);
}

/**
 * Create matrix rain effect
 */
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 1000;
        overflow: hidden;
    `;
    
    // Create falling characters
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        column.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -100px;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 10 + 10}px;
            animation: matrixFall ${Math.random() * 3 + 2}s linear infinite;
            opacity: ${Math.random() * 0.8 + 0.2};
        `;
        
        // Random characters
        let text = '';
        for (let j = 0; j < 20; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
    }
    
    document.body.appendChild(matrixContainer);
    
    // Remove after matrix mode ends
    setTimeout(() => matrixContainer.remove(), 8000);
}

/**
 * Create disco ball effect
 */
function createDiscoBall() {
    const discoBall = document.createElement('div');
    discoBall.className = 'disco-ball';
    discoBall.innerHTML = '🪩';
    discoBall.style.cssText = `
        position: fixed;
        top: 50px;
        right: 50px;
        font-size: 3rem;
        z-index: 9999;
        animation: discoBallSpin 1s linear infinite;
        filter: drop-shadow(0 0 20px #ff00ff);
    `;
    
    document.body.appendChild(discoBall);
}

/**
 * Remove disco ball
 */
function removeDiscoBall() {
    const discoBall = document.querySelector('.disco-ball');
    if (discoBall) {
        discoBall.style.animation = 'discoBallExit 0.5s ease-out forwards';
        setTimeout(() => discoBall.remove(), 500);
    }
}

/**
 * Create floating particles for gravity effect
 */
function createFloatingParticles() {
    const particleCount = 20;
    const particles = ['🌟', '✨', '💫', '⭐', '🔮'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            font-size: ${Math.random() * 20 + 15}px;
            z-index: 1000;
            pointer-events: none;
            animation: floatAround ${Math.random() * 5 + 3}s ease-in-out infinite;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 8000);
    }
}

/**
 * Create mega confetti for konami code
 */
function createMegaConfetti() {
    const confettiCount = 100;
    const emojis = ['🎉', '🎊', '🏆', '👑', '💎', '🌟', '⭐', '✨', '🎯', '🎮'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 50 - 50}px;
            font-size: ${Math.random() * 25 + 20}px;
            z-index: 9999;
            pointer-events: none;
            animation: megaConfettiFall ${Math.random() * 4 + 3}s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 7000);
    }
}

/**
 * Show achievement notification
 */
function showAchievement(title, description) {
    const achievement = document.createElement('div');
    achievement.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px;">
            <div style="font-size: 2rem;">🏆</div>
            <div>
                <div style="font-size: 1.1rem; font-weight: bold; color: #ffd700;">${title}</div>
                <div style="font-size: 0.9rem; color: #fff;">${description}</div>
            </div>
        </div>
    `;
    
    achievement.style.cssText = `
        position: fixed;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #2c3e50, #34495e);
        padding: 20px;
        border-radius: 15px;
        border: 3px solid #ffd700;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        z-index: 9999;
        animation: achievementSlide 5s ease-out forwards;
        max-width: 350px;
    `;
    
    document.body.appendChild(achievement);
    
    setTimeout(() => achievement.remove(), 5000);
}
