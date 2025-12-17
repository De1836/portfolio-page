/**
 * ======================================================================================
 * Navbar Generation and Interaction Script
 * ======================================================================================
 * 
 * This script dynamically generates and manages the navigation bar for the portfolio website.
 * It runs after the DOM is fully loaded to ensure all necessary elements are available.
 * 
 * Key Features:
 * - Dynamically creates the navigation bar and its links.
 * - Applies all styling via JavaScript, keeping the HTML clean.
 * - Highlights the active page link.
 * - Includes a 'More' dropdown for additional links.
 * - Displays a time-based greeting on the homepage before showing the nav links.
 * - Handles all hover effects and animations for a responsive user experience.
 * 
 * ======================================================================================
 */

/**
 * Event listener for the DOMContentLoaded event.
 * This function is called when the initial HTML document has been completely loaded and parsed.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Get the main navigation element by its ID. If it doesn't exist, exit the script.
     * @type {HTMLElement}
     */
    const nav = document.getElementById('navbar');
    if (!nav) return;

    /**
     * Apply base styles to the main navigation bar container.
     * This creates the floating, blurred, and rounded appearance.
     */
    nav.style.cssText = `
        position: fixed;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background: rgba(20, 20, 22, 0.6);
        backdrop-filter: blur(12px) saturate(120%);
        -webkit-backdrop-filter: blur(12px) saturate(120%);
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05);
        z-index: 1000;
        transition: all 0.3s ease;
        min-width: 300px;
        padding: 0 20px;
    `;

    /**
     * Create a container for the navigation links to allow for flexbox alignment.
     * @type {HTMLElement}
     */
    const navLinksContainer = document.createElement('div');
    navLinksContainer.className = 'nav-links-container';
    navLinksContainer.style.width = '100%';
    nav.appendChild(navLinksContainer);

    /**
     * Creates and injects the HTML for the navigation links into the navLinksContainer.
     * This includes the main links and the structure for the 'More' dropdown.
     */
    const createNavLinks = () => {
        navLinksContainer.innerHTML = `
        <ul class="nav-links" style="
            list-style: none;
            display: flex;
            gap: 8px;
            margin: 0;
            padding: 4px;
            align-items: center;
            justify-content: center;
            width: 100%;
            position: relative;
        ">
            <li><a href="index.html" class="nav-link" data-page="home">Home</a></li>
            <li><a href="about.html" class="nav-link" data-page="about">About</a></li>
            <li><a href="works.html" class="nav-link" data-page="works">Works</a></li>
            <li class="more-container-wrapper">
                <div class="more-container">
                    <span class="nav-more">More</span>
                    <svg class="nav-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aeb4b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 size-3 transition duration-300" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </div>
                <div class="dropdown-menu">
                    <a href="links.html" class="dropdown-item">Links</a>
                    <a href="uses.html" class="dropdown-item">What I use</a>
                    <a href="https://www.worldcubeassociation.org/persons/2025YINJ03" class="dropdown-item" target="_blank">WCA page?</a>
                </div>
            </li>
            <li><a href="contact.html" class="nav-link" data-page="contact">Contact</a></li>
        </ul>`;
    };

    /**
     * Applies styles and event listeners to the 'More' dropdown menu.
     * This function handles the appearance, hover effects, and visibility of the dropdown.
     */
    const styleMoreSpan = () => {
        const moreContainerWrapper = document.querySelector('.more-container-wrapper');
        const moreDiv = document.querySelector('.more-container');
        const navMore = document.querySelector('.nav-more');
        const dropdown = document.querySelector('.dropdown-menu');
        
        moreContainerWrapper.style.position = 'relative';
        
        moreDiv.style.cssText = ` 
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 4px;
            transition: all 0.3s ease;
        `;

        navMore.style.cssText = `
            color: #aeb4b9;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 0.95rem;
            font-weight: 400;
            transition: all 0.3s ease;
        `;

        dropdown.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            background: rgba(30, 30, 32, 0.95);
            backdrop-filter: blur(12px);
            border-radius: 8px;
            padding: 8px 0;
            min-width: 180px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 1001;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin: 8px 0;
        `;

        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.style.cssText = `
                display: block;
                padding: 10px 20px;
                color: #e0e0e0;
                text-decoration: none;
                font-family: 'Outfit', sans-serif;
                font-size: 0.9rem;
                transition: all 0.2s ease;
                white-space: nowrap;
            `;

            item.addEventListener('mouseover', () => {
                item.style.background = 'rgba(255, 255, 255, 0.1)';
                item.style.color = 'white';
            });

            item.addEventListener('mouseout', () => {
                item.style.background = 'transparent';
                item.style.color = '#e0e0e0';
            });
        });

        // Show the dropdown on mouse enter.
        moreContainerWrapper.addEventListener('mouseenter', () => {
            navMore.style.color = 'white';
            const arrow = moreDiv.querySelector('.nav-arrow');
            if (arrow) {
                arrow.style.stroke = 'white';
                arrow.style.transform = 'rotate(180deg)';
            }
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(5px)';
        });

        // Hide the dropdown on mouse leave.
        moreContainerWrapper.addEventListener('mouseleave', () => {
            navMore.style.color = '#aeb4b9';
            const arrow = moreDiv.querySelector('.nav-arrow');
            if (arrow) {
                arrow.style.stroke = '#aeb4b9';
                arrow.style.transform = 'rotate(0deg)';
            }
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(10px)';
        });

        const navArrow = moreDiv.querySelector('.nav-arrow');
        if (navArrow) {
            navArrow.style.cssText = `
                transform: translateY(1px);
                transition: all 0.3s ease;
                margin-left: 4px;
            `;
        }
    };

    /**
     * Applies styles and event listeners to the primary navigation links.
     * It also identifies the current page and applies an 'active' style to the corresponding link.
     */
    const styleNavLinks = () => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.style.cssText = `
                color: #aeb4b9;
                text-decoration: none;
                font-family: 'Outfit', sans-serif;
                font-size: 0.95rem;
                font-weight: 400;
                padding: 8px 16px;
                border-radius: 4px;
                transition: all 0.3s ease;
                display: inline-block;
            `;

            link.addEventListener('mouseover', () => {
                if (!link.classList.contains('active')) {
                    link.style.color = '#ededed';
                }
            });

            link.addEventListener('mouseout', () => {
                if (!link.classList.contains('active')) {
                    link.style.color = '#aeb4b9';
                }
            });
        });
        
        // Determine the current page and apply the 'active' style to the corresponding link.
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const activeLink = document.querySelector(`.nav-link[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.style.cssText += `
                background: rgba(255, 255, 255, 0.15);
                color: #ededed;
                font-weight: 500;
                border-radius: 50px;
            `;
            activeLink.classList.add('active');
        }
    };

    // Conditional logic for the homepage greeting animation.
    // If on the homepage, show a greeting first, then fade in the navigation links.
    // Otherwise, show the navigation links immediately.
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        // Create a time-based greeting (Good Morning, Afternoon, or Evening).
        const greeting = document.createElement('span');
        greeting.className = 'nav-greeting';
        greeting.textContent = `Good ${new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}.`;
        greeting.style.cssText = `
            color: #aeb4b9;
            text-decoration: none;
            font-family: 'Outfit', sans-serif;
            font-size: 0.95rem;
            font-weight: 400;
            padding: 8px 16px;
            border-radius: 9999px;
            transition: all 0.3s ease;
            display: inline-block;
            cursor: default;
            opacity: 1;
            transition: opacity 0.5s ease-out;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
        `;
        nav.appendChild(greeting);
        navLinksContainer.style.opacity = '0';
        navLinksContainer.style.transition = 'opacity 0.5s ease-in-out';

        setTimeout(() => {
            greeting.style.opacity = '0';
            // After the greeting has faded out, remove it and create the navigation links.
            setTimeout(() => {
                greeting.remove();
                nav.style.justifyContent = 'space-between';
                createNavLinks();
                navLinksContainer.style.opacity = '1';
                styleNavLinks();
                styleMoreSpan();
            }, 500);
        }, 2000);
    } else {
        // For all other pages, create and display the navigation links immediately.
        nav.style.justifyContent = 'space-between';
        createNavLinks();
        navLinksContainer.style.opacity = '1';
        styleNavLinks();
        styleMoreSpan();
    }
});