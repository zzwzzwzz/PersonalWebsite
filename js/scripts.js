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
        // mobileMenuButton.classList.remove('bg-yellow-100');
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
        // mobileMenuButton.classList.remove('bg-yellow-100');
        mobileMenuButton.querySelector('i').classList.remove('text-yellow-600');
    });
});