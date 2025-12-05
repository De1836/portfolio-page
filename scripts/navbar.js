document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;

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

    // Create greeting element
    const greeting = document.createElement('span');
    greeting.className = 'nav-greeting';
    greeting.textContent = `Good ${new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}.`;
    greeting.style.cssText = `
        color: #aeb4b9;
        text-decoration: none;
        font-family: 'Outfit', sans-serif;
        font-size: 0.95rem;
        font-weight: 400;
        padding: 12px 16px;
        border-radius: 9999px;
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

    // Create nav links container (initially hidden)
    const navLinksContainer = document.createElement('div');
    navLinksContainer.className = 'nav-links-container';
    navLinksContainer.style.opacity = '0';
    navLinksContainer.style.transition = 'opacity 0.5s ease-in-out';
    navLinksContainer.style.width = '100%';
    
    // Add navigation links
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
        ">
            <li><a href="index.html" class="nav-link" data-page="home">Home</a></li>
            <li><a href="about.html" class="nav-link" data-page="about">About</a></li>
            <li><a href="works.html" class="nav-link" data-page="works">Works</a></li>
            <li><a href="frequently-asked-questions.html" class="nav-link" data-page="faq">FAQ</a></li>
            <li><a href="contact.html" class="nav-link" data-page="contact">Contact</a></li>
        </ul>`;
    
    // Add nav links to the container
    nav.appendChild(navLinksContainer);
    
    // Style the nav links
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
                border-radius: 9999px;
                transition: all 0.3s ease;
                display: inline-block;
            `;

            link.addEventListener('mouseover', () => {
                link.style.color = '#ededed';
                link.style.background = 'rgba(255, 255, 255, 0.1)';
            });

            link.addEventListener('mouseout', () => {
                if (!link.classList.contains('active')) {
                    link.style.color = '#aeb4b9';
                    link.style.background = 'transparent';
                }
            });
        });
        
        // Set active link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const activeLink = document.querySelector(`.nav-link[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.style.cssText += `
                background: rgba(255, 255, 255, 0.15);
                color: #ededed;
                font-weight: 500;
            `;
            activeLink.classList.add('active');
        }
    };
    
    // After 2 seconds, start the transition
    setTimeout(() => {
        // Fade out greeting
        greeting.style.opacity = '0';
        
        // After fade out completes, remove greeting and show nav links
        setTimeout(() => {
            greeting.remove();
            nav.style.justifyContent = 'space-between';
            navLinksContainer.style.opacity = '1';
            
            // Initialize navigation styles and events
            styleNavLinks();
        }, 500); // Wait for fade out to complete
    }, 2000);
});