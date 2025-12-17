/**
 * ======================================================================================
 * Loading Screen Script
 * ======================================================================================
 * 
 * This script manages the loading screen animation that appears when the page is first
 * loaded. It simulates a loading process, updates a progress bar and text, and then
 * fades out the screen to reveal the page content.
 * 
 * It also includes a fallback timeout to ensure the loading screen is hidden if the
 * simulation takes too long.
 * 
 * ======================================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary DOM elements for the loading screen.
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = document.querySelector('.loading-progress-bar');
    const loadingText = document.querySelector('.loading-text');
    
    // Initialize progress and start an interval to simulate loading.
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        // Update the loading text based on the current progress.
        if (progress < 30) {
            loadingText.textContent = 'Loading assets...';
        } else if (progress < 70) {
            loadingText.textContent = 'Almost there...';
        } else {
            loadingText.textContent = 'Finalizing... (give 7 pls)';
        }
        
        // When the simulated loading is complete, clear the interval and hide the screen.
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                // Enable scrolling
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }, 150);
    
    // Fallback: Ensure the loading screen is hidden if it takes too long (e.g., 5 seconds).
    // This prevents the user from being stuck on the loading screen if something goes wrong.
    setTimeout(() => {
        if (progress < 100) {
            clearInterval(interval);
            progressBar.style.width = '100%';
            loadingText.textContent = 'Ready!';
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }, 5000); // Max 5 seconds loading time
});
