/**
 * ======================================================================================
 * Index Page - Works Section Card Synchronization
 * ======================================================================================
 * 
 * This script uses an Intersection Observer to synchronize the active state of project
 * description cards (`.about-card`) with the visibility of project image cards (`.card`)
 * as the user scrolls. When a `.card` is centered in the viewport, the corresponding
 * `.about-card` is given an 'active' class.
 * 
 * ======================================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select all project image cards and description cards.
    const cards = document.querySelectorAll('.card');
    const aboutCards = document.querySelectorAll('.about-card');

    /**
     * Configuration for the Intersection Observer.
     * - rootMargin: '-50% 30px -50% 30px' creates a horizontal line in the middle of the
     *   viewport. An intersection is triggered when a card crosses this line.
     * - threshold: 0 means the callback will run as soon as any part of the element
     *   crosses the intersection line.
     * @type {IntersectionObserverInit}
     */
    const observerOptions = { 
        rootMargin: '-50% 30px -50% 30px', 
        threshold: 0 
    };

    /**
     * The callback function for the Intersection Observer.
     * 
     * @param {IntersectionObserverEntry[]} entries - A list of intersection entries.
     */
    const intersectionHandler = (entries) => {
        entries.forEach(entry => {
            // When a card is intersecting the center line of the viewport...
            if (entry.isIntersecting) {
                const cardId = entry.target.id;
                
                // ...loop through all description cards.
                aboutCards.forEach(aboutCard => {
                    // If the description card's 'data-card' attribute matches the intersecting card's ID,
                    // make it active. Otherwise, remove the active class.
                    if (aboutCard.dataset.card === cardId) {
                        aboutCard.classList.add('active');
                    } else {
                        aboutCard.classList.remove('active');
                    }
                });
            }
        });
    };

    // Create the observer and start observing each project image card.
    const observer = new IntersectionObserver(intersectionHandler, observerOptions);
    cards.forEach(card => {
        observer.observe(card);
    });
});
