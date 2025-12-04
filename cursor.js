document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('loading');
    
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) {
        console.error('Cursor elements not found!');
        return;
    }

    // Initial position at center of viewport
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    // Make cursors visible
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';

    // Smooth cursor movement
    const updateCursor = () => {
        // Calculate the difference between current and target position
        const diffX = mouseX - posX;
        const diffY = mouseY - posY;

        // Apply easing (lower number = more smoothing)
        posX += diffX / 1;
        posY += diffY / 1;

        // Apply the transform to both cursors
        if (cursor.classList.contains('cursor-click')) {
            cursor.style.transform = `translate3d(calc(${posX}px - 4px), calc(${posY}px - 84px), 0)`;
            cursorFollower.style.transform = `translate3d(calc(${posX}px - 9px), calc(${posY}px - 96px + 9px), 0)`;
        } else {
            cursor.style.transform = `translate3d(calc(${posX}px - 4px), calc(${posY}px - 84px), 0)`;
            cursorFollower.style.transform = `translate3d(calc(${posX}px - 16px), calc(${posY}px - 96px), 0)`;
        }

        requestAnimationFrame(updateCursor);
    };

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Hover effects for clickable elements
    const clickableElements = document.querySelectorAll('a, button, [data-cursor]');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-follower-hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-follower-hover');
        });
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
        cursorFollower.classList.add('cursor-follower-click');
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-click');
            cursorFollower.classList.remove('cursor-follower-click');
        });
    });

    // Start the animation
    updateCursor();
});