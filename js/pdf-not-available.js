/**
 * Enhanced PDF Not Available Page JavaScript
 * Created: July 16, 2025
 * Detective-themed interactive elements for the PDF not available page
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🕵️‍♂️ PDF Detective Page Loading...');
    
    // Initialize all detective features
    createFlyingPapers();
    setupMagnifyingGlass();
    setupButtonInteractions();
    initDetectiveQuotes();
    initCaseStatusGenerator();
    initSearchAnimation();
    addDetectiveEasterEgg();
    
    // Initialize new smooth features
    initAutoTestimony();
    initEvidenceInteractions();
    
    // Call mobile optimizations
    initMobileOptimizations();
    
    console.log('✅ PDF Detective Page Fully Loaded!');
});

/**
 * Creates additional flying paper elements for a richer animation
 */
function createFlyingPapers() {
    const flyingPapersContainer = document.querySelector('.flying-papers');
    
    // Only add more papers if the container exists
    if (!flyingPapersContainer) return;
    
    // Create 5 more papers with random positions and animations
    for (let i = 0; i < 5; i++) {
        const paper = document.createElement('i');
        paper.className = 'far fa-file-pdf additional-paper';
        paper.style.top = `${Math.random() * 70}%`;
        paper.style.left = `${Math.random() * 80 + 10}%`;
        paper.style.fontSize = `${Math.random() * 2 + 2}rem`;
        paper.style.opacity = '0';
        paper.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        
        // Set random animation delay
        const delay = Math.random() * 5;
        paper.style.animationDelay = `${delay}s`;
        
        // Set custom animation
        const animationDuration = Math.random() * 4 + 4;
        paper.style.animationDuration = `${animationDuration}s`;
        
        // Randomly choose one of three fly away animations
        const animationIndex = Math.floor(Math.random() * 3) + 1;
        paper.style.animationName = `flyAway${animationIndex}`;
        paper.style.animationIterationCount = 'infinite';
        paper.style.animationTimingFunction = 'ease-in-out';
        
        flyingPapersContainer.appendChild(paper);
    }
}

/**
 * Sets up interactive behavior for the magnifying glass
 */
function setupMagnifyingGlass() {
    const magnifyingGlass = document.querySelector('.magnifying-glass');
    
    if (!magnifyingGlass) return;
    
    magnifyingGlass.addEventListener('mouseenter', function() {
        // Pause the animation when hovered with smooth transition
        this.style.animationPlayState = 'paused';
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        this.style.transform = 'translateX(-50%) scale(1.2)';
        this.style.filter = 'drop-shadow(0 8px 20px rgba(44, 90, 160, 0.4))';
    });
    
    magnifyingGlass.addEventListener('mouseleave', function() {
        // Resume the animation with smooth transition
        this.style.animationPlayState = 'running';
        this.style.transform = '';
        this.style.filter = '';
    });
}

/**
 * Sets up interactions for the action buttons
 */
function setupButtonInteractions() {
    const actionButtons = document.querySelectorAll('.error-actions .btn, .testimony-controls .btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add a smooth bounce effect with enhanced transitions
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            // Return to normal state smoothly
            this.style.transform = '';
        });
        
        button.addEventListener('click', function() {
            // Add a quick press animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }, 150);
        });
    });
}

// Add a bounce animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
`;
document.head.appendChild(style);

/**
 * Detective quotes rotation
 */
function initDetectiveQuotes() {
    const detectiveQuotes = [
        { text: "Have you checked the recycling bin? That's where all good documents go to retire.", author: "Chief PDF Detective" },
        { text: "The PDF was here, but then it vanished like a ghost in the digital realm.", author: "Detective FileSeeker" },
        { text: "I've seen this before. The PDF probably joined a witness protection program.", author: "Inspector Download" },
        { text: "Theory: The PDF got scared of being opened and ran away to the cloud.", author: "Sergeant ByteHunter" },
        { text: "Don't worry, we've got a 99% success rate... at finding other things.", author: "Captain SearchEngine" },
        { text: "Plot twist: What if the PDF never existed and this is all a simulation?", author: "Detective Philosophy" },
        { text: "The PDF left a note: 'Gone fishing in the digital ocean. Back never.'", author: "Officer DataTracker" },
        { text: "Breaking news: PDF spotted hiding in a zip file across the internet!", author: "Reporter FileNews" },
        { text: "This case is more mysterious than the Bermuda Triangle of downloads.", author: "Detective Mystery" },
        { text: "Evidence suggests the PDF may have evolved into a newer format and fled.", author: "Forensic FileExpert" },
        { text: "Last seen arguing with a Word document about formatting superiority.", author: "Detective DocuDrama" },
        { text: "Witnesses report the PDF was carrying suspicious metadata.", author: "Officer SecurityScan" },
        { text: "The PDF's digital fingerprints match those of a file that was never created.", author: "CSI: Cyber Files" },
        { text: "Plot twist: The PDF is hiding inside this very webpage, disguised as text!", author: "Detective MetaHunter" },
        { text: "Investigation reveals the PDF may have been scared away by an aggressive antivirus.", author: "Agent VirusHunter" }
    ];

    const quoteElement = document.querySelector('.quote-text');
    const authorElement = document.querySelector('.quote-author');
    
    if (quoteElement && authorElement) {
        let currentQuoteIndex = 0;
        
        // Add smooth transition styles
        const transitionStyle = 'transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
        quoteElement.style.cssText += transitionStyle;
        authorElement.style.cssText += transitionStyle;
        
        setInterval(() => {
            const quoteBubble = document.querySelector('.quote-bubble');
            
            // Add updating class for visual feedback
            if (quoteBubble) {
                quoteBubble.classList.add('updating');
            }
            
            // Fade out with slight movement
            quoteElement.style.opacity = '0';
            quoteElement.style.transform = 'translateY(-10px)';
            authorElement.style.opacity = '0';
            authorElement.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % detectiveQuotes.length;
                // Add quotes around the text since the HTML structure expects them
                quoteElement.textContent = `"${detectiveQuotes[currentQuoteIndex].text}"`;
                authorElement.textContent = `- ${detectiveQuotes[currentQuoteIndex].author}`;
                
                // Fade in with movement
                setTimeout(() => {
                    quoteElement.style.opacity = '1';
                    quoteElement.style.transform = 'translateY(0)';
                    authorElement.style.opacity = '1';
                    authorElement.style.transform = 'translateY(0)';
                    
                    // Remove updating class
                    if (quoteBubble) {
                        setTimeout(() => {
                            quoteBubble.classList.remove('updating');
                        }, 300);
                    }
                }, 50);
            }, 300);
        }, 6000); // Change quote every 6 seconds
    }
}

/**
 * Case status generator with detective codes
 */
function initCaseStatusGenerator() {
    const caseStatuses = [
        "ACTIVELY_SEARCHING",
        "FOLLOWING_PAPER_TRAIL",
        "INVESTIGATING_CLOUD_STORAGE",
        "QUESTIONING_WITNESSES",
        "CHECKING_DOWNLOAD_FOLDER",
        "DUSTING_FOR_FINGERPRINTS",
        "ANALYZING_METADATA",
        "SEARCHING_TRASH_CAN",
        "CONSULTING_FILE_SYSTEM"
    ];
    
    const caseStatusElement = document.querySelector('.case-status .badge');
    
    if (caseStatusElement) {
        setInterval(() => {
            // Add visual feedback
            caseStatusElement.classList.add('updating');
            
            const randomStatus = caseStatuses[Math.floor(Math.random() * caseStatuses.length)];
            
            setTimeout(() => {
                caseStatusElement.innerHTML = `<i class="fas fa-exclamation-triangle me-2"></i>Case Status: ${randomStatus}`;
                
                // Remove visual feedback after update
                setTimeout(() => {
                    caseStatusElement.classList.remove('updating');
                }, 500);
            }, 100);
        }, 7000); // Change status every 7 seconds
    }
}

/**
 * Enhanced search animation with clues
 */
function initSearchAnimation() {
    const magnifyingGlass = document.querySelector('.magnifying-glass');
    
    if (magnifyingGlass) {
        // Add periodic "discovery" animation
        setInterval(() => {
            magnifyingGlass.style.transform = 'translateX(-50%) scale(1.3)';
            magnifyingGlass.style.color = '#e17055';
            
            setTimeout(() => {
                magnifyingGlass.style.transform = 'translateX(-50%) scale(1)';
                magnifyingGlass.style.color = '#34495e';
            }, 500);
        }, 10000); // "Discovery" every 10 seconds
    }
}

/**
 * Detective mode easter egg
 */
function addDetectiveEasterEgg() {
    let clickSequence = [];
    const secretSequence = ['PDF', 'magnifying-glass', 'poster-content'];
    
    // Add click listeners to detective elements
    document.querySelector('.error-number')?.addEventListener('click', () => {
        clickSequence.push('PDF');
        checkDetectiveSequence();
    });
    
    document.querySelector('.magnifying-glass')?.addEventListener('click', () => {
        clickSequence.push('magnifying-glass');
        checkDetectiveSequence();
    });
    
    document.querySelector('.poster-content')?.addEventListener('click', () => {
        clickSequence.push('poster-content');
        checkDetectiveSequence();
    });
    
    function checkDetectiveSequence() {
        if (clickSequence.length > 3) {
            clickSequence = clickSequence.slice(-3);
        }
        
        if (JSON.stringify(clickSequence) === JSON.stringify(secretSequence)) {
            triggerDetectiveMode();
            clickSequence = [];
        }
    }
}

function triggerDetectiveMode() {
    // Create detective celebration
    const detectiveModal = document.createElement('div');
    detectiveModal.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    z-index: 9999; background: rgba(0,0,0,0.9); color: white; padding: 2rem; 
                    border-radius: 15px; text-align: center; font-size: 1.2rem; max-width: 90%;">
            <h3>🕵️‍♂️ DETECTIVE MODE ACTIVATED! 🕵️‍♂️</h3>
            <p>Congratulations! You've cracked the case!</p>
            <p>Here's your detective badge: 🏅</p>
            <p><strong>Case Solved:</strong> The PDF was hiding in plain sight... it just doesn't exist!</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: #e17055; color: white; border: none; padding: 0.5rem 1rem; 
                           border-radius: 5px; margin-top: 1rem; cursor: pointer;">
                Close Case File
            </button>
        </div>
    `;
    document.body.appendChild(detectiveModal);
    
    // Add detective evidence effect
    createEvidenceMarkers();
}

function createEvidenceMarkers() {
    const evidenceItems = ['🔍', '📄', '🗂️', '💾', '📁'];
    
    for (let i = 0; i < 15; i++) {
        const evidence = document.createElement('div');
        evidence.textContent = evidenceItems[Math.floor(Math.random() * evidenceItems.length)];
        evidence.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            font-size: 2rem;
            z-index: 10000;
            animation: evidenceFall 4s linear forwards;
            pointer-events: none;
        `;
        document.body.appendChild(evidence);
        
        setTimeout(() => evidence.remove(), 4000);
    }
}

// Add evidence animation
const evidenceStyle = document.createElement('style');
evidenceStyle.innerHTML = `
@keyframes evidenceFall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(evidenceStyle);

// Witness Testimony Carousel
let currentTestimony = 0;
const totalTestimonies = 3;

function nextTestimony() {
    const current = document.querySelector('.testimony-card.active');
    const next = (currentTestimony + 1) % totalTestimonies;
    
    // Smooth transition out
    current.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    current.classList.remove('active');
    current.classList.add('prev');
    
    setTimeout(() => {
        // Show next testimony
        const nextCard = document.querySelector(`[data-witness="${next + 1}"]`);
        nextCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        nextCard.classList.remove('prev');
        nextCard.classList.add('active');
        
        // Update counter
        currentTestimony = next;
        updateTestimonyCounter();
        
        // Reset previous card
        setTimeout(() => {
            current.classList.remove('prev');
        }, 100);
    }, 200);
}

function previousTestimony() {
    const current = document.querySelector('.testimony-card.active');
    const prev = currentTestimony === 0 ? totalTestimonies - 1 : currentTestimony - 1;
    
    // Smooth transition out
    current.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    current.classList.remove('active');
    current.classList.add('prev');
    
    setTimeout(() => {
        // Show previous testimony
        const prevCard = document.querySelector(`[data-witness="${prev + 1}"]`);
        prevCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        prevCard.classList.remove('prev');
        prevCard.classList.add('active');
        
        // Update counter
        currentTestimony = prev;
        updateTestimonyCounter();
        
        // Reset previous card
        setTimeout(() => {
            current.classList.remove('prev');
        }, 100);
    }, 200);
}

function updateTestimonyCounter() {
    const counter = document.querySelector('.testimony-counter');
    if (counter) {
        counter.textContent = `${currentTestimony + 1} / ${totalTestimonies}`;
    }
}

/**
 * Auto-advance testimonies (optional)
 */
function initAutoTestimony() {
    let autoInterval;
    
    function startAutoAdvance() {
        autoInterval = setInterval(() => {
            nextTestimony();
        }, 8000); // Auto-advance every 8 seconds
    }
    
    function stopAutoAdvance() {
        if (autoInterval) {
            clearInterval(autoInterval);
        }
    }
    
    // Start auto-advance
    startAutoAdvance();
    
    // Pause on hover
    const carousel = document.querySelector('.testimonies-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoAdvance);
        carousel.addEventListener('mouseleave', startAutoAdvance);
    }
    
    // Pause when user manually navigates
    const controls = document.querySelectorAll('.testimony-controls button');
    controls.forEach(button => {
        button.addEventListener('click', () => {
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 10000); // Restart after 10 seconds
        });
    });
}

/**
 * Enhanced evidence marker interactions
 */
function initEvidenceInteractions() {
    const evidenceItems = document.querySelectorAll('.evidence-item');
    
    evidenceItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Add collected effect
            this.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            this.classList.add('collected');
            
            // Show evidence collected message
            showEvidenceMessage(this.dataset.tooltip || 'Evidence collected!');
            
            // Check if all evidence is collected
            setTimeout(() => {
                checkAllEvidenceCollected();
            }, 500);
        });
        
        // Add tooltip on hover
        item.addEventListener('mouseenter', function() {
            showTooltip(this, this.dataset.tooltip);
        });
        
        item.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

function showEvidenceMessage(message) {
    // Create or update evidence message
    let messageEl = document.querySelector('.evidence-message');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'evidence-message';
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem;
            border-radius: 10px;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        document.body.appendChild(messageEl);
    }
    
    messageEl.textContent = message;
    messageEl.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        messageEl.style.transform = 'translateX(100%)';
    }, 3000);
}

function checkAllEvidenceCollected() {
    const totalEvidence = document.querySelectorAll('.evidence-item').length;
    const collectedEvidence = document.querySelectorAll('.evidence-item.collected').length;
    
    if (collectedEvidence === totalEvidence) {
        showCaseClosedMessage();
    }
}

function showCaseClosedMessage() {
    // Create celebration effect
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, #28a745, #20c997); color: white; border-radius: 20px; margin: 2rem 0;">
            <h4>🎉 Case Closed! 🎉</h4>
            <p>You've collected all the evidence! The mystery of the missing PDF has been solved.</p>
        </div>
    `;
    
    const errorContent = document.querySelector('.error-content');
    if (errorContent) {
        errorContent.appendChild(celebration);
        celebration.scrollIntoView({ behavior: 'smooth' });
    }
}

function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'evidence-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 0.5rem;
        border-radius: 5px;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 1000;
        transform: translateY(-100%);
        transition: all 0.3s ease;
        opacity: 0;
    `;
    
    element.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(-120%)';
    }, 10);
}

function hideTooltip() {
    const tooltip = document.querySelector('.evidence-tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
    }
}

// Enhanced console easter eggs
console.log('%c🎮 INTERACTIVE MODE ACTIVATED! 🎮', 'font-size: 16px; font-weight: bold; color: #667eea; background: #f8f9fa; padding: 8px;');
console.log('%cNew Features Available:', 'font-size: 12px; color: #e17055; font-weight: bold;');
console.log('%c• Read witness testimonies', 'font-size: 10px; color: #34495e;');
console.log('%c• Keep clicking for surprises! 🎁', 'font-size: 10px; color: #e74c3c; font-weight: bold;');

// Add detective page title changes
let detectiveTitles = [
    "🕵️‍♂️ Case: Missing PDF",
    "📋 Evidence: Not Found",
    "🔍 Investigation: Active",
    "📁 File Status: MIA",
    "🚨 Alert: PDF Missing"
];

let titleIndex = 0;
setInterval(() => {
    document.title = detectiveTitles[titleIndex];
    titleIndex = (titleIndex + 1) % detectiveTitles.length;
}, 4000);

// Add timeline animation on scroll
function animateTimeline() {
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
            }, 200);
        }, index * 200);
    });
}

// Trigger timeline animation after page load
setTimeout(animateTimeline, 2000);

// Mobile-specific optimizations
function initMobileOptimizations() {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Reduce animations for better performance on mobile
        const style = document.createElement('style');
        style.innerHTML = `
            @media (max-width: 768px) {
                .flying-papers i {
                    animation-duration: 8s !important;
                }
                .magnifying-glass {
                    animation-duration: 4s !important;
                }
                .quote-bubble {
                    animation-duration: 6s !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add touch feedback
        const touchElements = document.querySelectorAll('.suggestion-link, .timeline-card, .btn');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // Optimize scroll performance
        let ticking = false;
        function updateAnimations() {
            // Pause animations when scrolling for better performance
            const animatedElements = document.querySelectorAll('[style*="animation"]');
            animatedElements.forEach(el => {
                el.style.animationPlayState = 'paused';
            });
            
            setTimeout(() => {
                animatedElements.forEach(el => {
                    el.style.animationPlayState = 'running';
                });
            }, 500);
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateAnimations);
                ticking = true;
            }
        });
    }
}

// Viewport height fix for mobile browsers
function setVHProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVHProperty);
setVHProperty();

// Improved mobile navigation
function handleMobileNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            const isNavOpen = navbarCollapse.classList.contains('show');
            
            if (!isClickInsideNav && isNavOpen) {
                navbarToggler.click();
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
}

handleMobileNavigation();
