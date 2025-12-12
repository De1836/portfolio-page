// learning js and interactionobserver JUST FOR THIS PROJECT
// im still kind of confused

document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM fully loaded'); // debug
    
    const intersectionHandler = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(intersectionHandler, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    // Observe elements
    document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .section-title, .section-subtitle, .info-card, .card, .about-card, .about-text').forEach(el => {
        observer.observe(el);
    });
});