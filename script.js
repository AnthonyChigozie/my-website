// Smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Dynamic menu highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            menuLinks.forEach(link => link.classList.remove('active'));
            menuLinks[index].classList.add('active');
        }
    });
});
// Image zoom
function zoomImage(imageId) {
    const img = document.getElementById(imageId);
    img.style.transform = 'scale(1.5)';
    img.style.transition = 'transform 0.5s';
}



