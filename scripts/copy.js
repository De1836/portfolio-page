/**
 * ======================================================================================
 * Copy-to-Clipboard Script
 * ======================================================================================
 * 
 * This script provides a reusable function to add 'copy to clipboard' functionality 
 * to any button element on the page. It handles the UI change from a 'copy' icon to a 
 * 'check' icon upon a successful copy action.
 * 
 * ======================================================================================
 */

/**
 * SVG icon for the default 'copy' state.
 * @type {string}
 */
const copyicon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

/**
 * SVG icon for the 'copied' state (check mark).
 * @type {string}
 */
const checkicon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;

/**
 * Attaches a click event listener to a specified element to copy text to the clipboard.
 * On click, it copies the provided text and temporarily changes the button's content to show a 'Copied!' message.
 * 
 * @param {string} copytext - The text to be copied to the clipboard.
 * @param {string} labeltext - The text label to display on the button in its default state.
 * @param {string} selector - The CSS selector for the button element.
 */
async function copy(copytext, labeltext, selector) {
    try {
        const button = document.querySelector(selector);
        button.innerHTML = `
        ${copyicon}
        <span>${labeltext}</span>
        `;
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(copytext);
            button.innerHTML = `
            ${checkicon}
            <span>Copied!</span>
            `;
            setTimeout(() => {
                button.innerHTML = `
                ${copyicon}
                <span>${labeltext}</span>
                `;
            }, 2000);
        });
    } catch (error) {
        console.error('Error copying text:', error);
    }
}

/**
 * Initializes the button with the default 'copy' icon and label.
 * This function sets the initial state of the button before any click events.
 * 
 * @param {string} labeltext - The text label to display on the button.
 * @param {string} selector - The CSS selector for the button element.
 */
function initcopy(labeltext, selector) {
    const button = document.querySelector(selector);
    button.innerHTML = `
    ${copyicon}
    <span>${labeltext}</span>
    `;
}