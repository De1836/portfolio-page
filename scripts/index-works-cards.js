document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const aboutCards = document.querySelectorAll('.about-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cardId = entry.target.id;
                aboutCards.forEach(aboutCard => {
                    if (aboutCard.dataset.card === cardId) {
                        aboutCard.classList.add('active');
                    } else {
                        aboutCard.classList.remove('active');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 30px -50% 30px', threshold: 0 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
