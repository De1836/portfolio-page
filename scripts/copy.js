// Copy to clipboard with visual feedback
async function copyToClipboard(text, selector = '.copy-email') {
    try {
        await navigator.clipboard.writeText(text);
        const button = document.querySelector(selector);
        if (button) {
            button.classList.add('copied');
            setTimeout(() => {
                button.classList.remove('copied');
            }, 2000);
        }
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
}

// Handle copy button clicks using event delegation
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const copyButton = e.target.closest('[data-copy]');
        if (copyButton) {
            const textToCopy = copyButton.dataset.copy;
            copyToClipboard(textToCopy, `#${copyButton.id || ''}`);
        }
    });
});