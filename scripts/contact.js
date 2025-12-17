/**
 * ======================================================================================
 * Contact Form Character Counter
 * ======================================================================================
 * 
 * This script adds a character counter to the message textarea on the contact form.
 * It listens for input and updates a counter element to show the current number of
 * characters out of the maximum allowed.
 * 
 * ======================================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // Select the textarea and the character counter element from the DOM.
    const messageTextarea = document.getElementById('message');
    const charCounter = document.querySelector('.char-counter');

    // Exit if the necessary elements are not found.
    if (!messageTextarea || !charCounter) {
        return;
    }

    // Get the maximum allowed length from the textarea's 'maxlength' attribute.
    const maxLength = messageTextarea.getAttribute('maxlength');

    /**
     * Event listener for the 'input' event on the textarea.
     * Updates the character counter text content with the current length.
     */
    messageTextarea.addEventListener('input', function() {
        const currentLength = messageTextarea.value.length;
        charCounter.textContent = `${currentLength}/${maxLength}`;
    });
});
