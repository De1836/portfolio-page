let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let posX = mouseX;
let posY = mouseY;

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

cursor.style.opacity = 1;
cursorFollower.style.opacity = 1;

const updateCursorPosition = (event) => {
    posX += (event.clientX - posX) * 0.1;
    posY += (event.clientY - posY) * 0.1;
    cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    cursorFollower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
}

document.addEventListener('mousemove', (event) => {
    updateCursorPosition(event);
})