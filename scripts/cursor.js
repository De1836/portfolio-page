/**
 * ======================================================================================
 * Custom Cursor Script
 * ======================================================================================
 * 
 * This script creates a custom cursor effect with a dot and a trailing glow effect.
 * It listens for mouse movement and updates the position of the custom cursor elements
 * with a slight delay on the glow to create a smooth, trailing animation.
 * 
 * ======================================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select the cursor elements from the DOM.
    const cursorDot = document.getElementById('cursor-dot');
    const cursorGlow = document.getElementById('cursor-glow');

    // If elements don't exist, exit the script to avoid errors.
    if (!cursorDot || !cursorGlow) return;

    // Initialize cursor positions to the center of the screen.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;

    /**
     * Animation loop to update cursor positions smoothly.
     * Uses requestAnimationFrame for performance.
     */
    function animateCursor() {
        // Use linear interpolation (lerp) for smooth trailing effect.
        // The glow follows the dot with a delay, creating the trail.
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;

        // The dot follows the actual mouse position with a smaller delay.
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;

        // Apply the updated positions to the cursor elements.
        cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

        // Continue the animation on the next frame.
        requestAnimationFrame(animateCursor);
    }

    // Start the animation loop.
    animateCursor();

    /**
     * Event listener for mouse movement.
     * Updates the target mouse coordinates.
     * @param {MouseEvent} event - The mouse move event.
     */
    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
});