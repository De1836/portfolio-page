document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const currentProjectEl = document.querySelector('.current-project');
    const totalProjectsEl = document.querySelector('.total-projects');
    
    // Set total projects count
    totalProjectsEl.textContent = projects.length.toString().padStart(2, '0');
    
    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const projectNumber = Array.from(projects).indexOf(entry.target) + 1;
                currentProjectEl.textContent = projectNumber.toString().padStart(2, '0');
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe each project
    projects.forEach(project => {
        observer.observe(project);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});