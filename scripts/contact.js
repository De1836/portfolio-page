document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    const charCounter = document.querySelector('.char-counter');
    const maxLength = messageTextarea.getAttribute('maxlength');

    if (messageTextarea && charCounter) {
        messageTextarea.addEventListener('input', function() {
            const currentLength = messageTextarea.value.length;
            charCounter.textContent = `${currentLength}/${maxLength}`;
        });
    }
});
