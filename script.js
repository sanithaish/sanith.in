// ===================================
// NAVIGATION & HEADER
// ===================================

// Get DOM elements
const header = document.getElementById('header');
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelectorAll('.nav-link');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate toggle icon
    if (navMenu.classList.contains('active')) {
        mobileToggle.textContent = '✕';
    } else {
        mobileToggle.textContent = '☰';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ===================================
// ACTIVE SECTION HIGHLIGHTING
// ===================================

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - header.offsetHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE (Optional Enhancement)
// ===================================

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.innerHTML;
    const textContent = heroSubtitle.textContent;
    
    // Only apply typing effect on desktop
    if (window.innerWidth > 768) {
        heroSubtitle.style.opacity = '1';
        
        // Simple fade-in instead of typing for better performance
        setTimeout(() => {
            heroSubtitle.style.animation = 'fadeInUp 0.6s ease-out 0.4s forwards';
        }, 400);
    }
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateStats = () => {
    if (hasAnimated) return;
    
    const statsSection = document.querySelector('.about');
    const statsSectionTop = statsSection.offsetTop;
    const statsSectionHeight = statsSection.clientHeight;
    
    if (window.scrollY + window.innerHeight > statsSectionTop + statsSectionHeight / 2) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const number = parseInt(text.replace(/\D/g, ''));
            
            let current = 0;
            const increment = number / 50; // 50 frames
            const duration = 1500; // 1.5 seconds
            const frameTime = duration / 50;
            
            const counter = setInterval(() => {
                current += increment;
                
                if (current >= number) {
                    current = number;
                    clearInterval(counter);
                }
                
                let displayValue = Math.floor(current);
                if (hasPlus) displayValue += '+';
                if (hasPercent) displayValue += '%';
                
                stat.textContent = displayValue;
            }, frameTime);
        });
    }
};

window.addEventListener('scroll', animateStats);

// ===================================
// PROJECT CARDS STAGGER ANIMATION
// ===================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===================================
// TIMELINE ITEMS STAGGER ANIMATION
// ===================================

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
});

// ===================================
// SKILL CATEGORIES STAGGER ANIMATION
// ===================================

const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.animationDelay = `${index * 0.1}s`;
});

// ===================================
// SMOOTH SCROLL TO TOP ON PAGE LOAD
// ===================================

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===================================
// PREVENT FLASH OF UNSTYLED CONTENT
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce scroll events for better performance
let scrollTimeout;
const originalScrollHandler = window.onscroll;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll handlers are already attached above
    });
}, { passive: true });

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
    }
});

// Focus management for mobile menu
mobileToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        // Focus first menu item when menu opens
        const firstLink = navMenu.querySelector('.nav-link');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }
});

// ===================================
// CONSOLE GREETING (Easter Egg)
// ===================================

console.log(
    '%c👋 Hello, Developer!',
    'font-size: 20px; font-weight: bold; color: #6366f1;'
);
console.log(
    '%cLooking for something? Feel free to reach out!',
    'font-size: 14px; color: #94a3b8;'
);
console.log(
    '%c📧 sanithaish@gmail.com',
    'font-size: 14px; color: #ec4899;'
);

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// LAZY LOADING OPTIMIZATION
// ===================================

// Add lazy loading for images if any are added later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// PREFERS REDUCED MOTION
// ===================================

// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
}
