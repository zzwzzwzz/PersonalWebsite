// Intersection Observer for fade-in effects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > 500 ? '1' : '0';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Toggle the hidden class
    const isMenuOpen = !mobileMenu.classList.contains('hidden');
    
    if (isMenuOpen) {
        // If menu is open, close it
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(0deg)';
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    } else {
        // If menu is closed, open it
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(90deg)';
        mobileMenuButton.querySelector('i').classList.add('text-yellow-600');
    }
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(0deg)';
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    }
});

// Smooth scroll for mobile links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('i').style.transform = 'rotate(0deg)';
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    });
});

// Dark Mode Toggle
const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        document.querySelectorAll('#theme-toggle-desktop i, #theme-toggle-mobile i').forEach(icon => {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        });
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        document.querySelectorAll('#theme-toggle-desktop i, #theme-toggle-mobile i').forEach(icon => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        });
        localStorage.setItem('theme', 'light');
    }
}

// Set initial theme based on preference
const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(currentTheme === 'dark');

// Toggle theme on button click
[themeToggleDesktop, themeToggleMobile].forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setTheme(!isDark);
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#f59e0b' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    }
});
