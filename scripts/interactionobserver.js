/**
 * ======================================================================================
 * Intersection Observer for Fade-In Animations
 * ======================================================================================
 * 
 * This script uses the Intersection Observer API to add a 'visible' class to elements
 * as they enter the viewport. This class is then used by CSS to trigger a fade-in
 * animation, creating a smooth, on-scroll reveal effect.
 * 
 * ======================================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * The callback function executed when an observed element intersects the viewport.
     * 
     * @param {IntersectionObserverEntry[]} entries - An array of objects, each representing an intersection change for one of the observed targets.
     * @param {IntersectionObserver} observer - The IntersectionObserver instance.
     */
    const intersectionHandler = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport, add the 'visible' class.
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once an element is visible, we can stop observing it to improve performance,
                // as the animation only needs to happen once.
                observer.unobserve(entry.target);
            }
        });
    };

    /**
     * Configuration options for the Intersection Observer.
     * - root: null (the viewport is the container for checking visibility).
     * - rootMargin: '0px' (no margin around the root).
     * - threshold: 0.1 (the handler is called when 10% of the element is visible).
     * @type {IntersectionObserverInit}
     */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Create a new IntersectionObserver instance with the handler and options.
    const observer = new IntersectionObserver(intersectionHandler, observerOptions);

    // Select all elements that should have the fade-in animation and start observing them.
    const elementsToAnimate = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .section-title, .section-subtitle, .info-card, .card, .about-card, .about-text');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});