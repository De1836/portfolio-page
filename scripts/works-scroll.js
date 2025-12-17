/**
 * ======================================================================================
 * Works Page Scroll Interaction Script
 * ======================================================================================
 * 
 * This script manages two main functionalities on the 'Works' page:
 * 1. An Intersection Observer to track which project is currently in the viewport and
 *    update a counter accordingly.
 * 2. Smooth scrolling for any anchor links on the page.
 * 
 * ======================================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select all project sections and the counter elements.
    const projects = document.querySelectorAll('.project');
    const currentProjectEl = document.querySelector('.current-project');
    const totalProjectsEl = document.querySelector('.total-projects');
    
    // Set the total number of projects in the counter.
    if (totalProjectsEl) {
        totalProjectsEl.textContent = projects.length.toString().padStart(2, '0');
    }
    
    /**
     * The callback function for the Intersection Observer.
     * It updates the current project number when a project section is 50% visible.
     * 
     * @param {IntersectionObserverEntry[]} entries - A list of intersection entries.
     */
    const intersectionHandler = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find the index of the intersecting project.
                const projectNumber = Array.from(projects).indexOf(entry.target) + 1;
                
                // Update the current project counter text.
                if (currentProjectEl) {
                    currentProjectEl.textContent = projectNumber.toString().padStart(2, '0');
                }
                
                // Add an 'active' class to the project for potential styling/animations.
                entry.target.classList.add('active');
            }
        });
    };

    // Initialize the Intersection Observer with a 50% threshold.
    const observer = new IntersectionObserver(intersectionHandler, {
        threshold: 0.5
    });

    // Start observing each project section.
    projects.forEach(project => {
        observer.observe(project);
    });

    /**
     * Smooth scroll functionality for all anchor links pointing to an ID.
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump-link behavior.
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty hrefs.
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Scroll to the target element with a 100px offset from the top.
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for the sticky header.
                    behavior: 'smooth' // Enable smooth scrolling animation.
                });
            }
        });
    });
});