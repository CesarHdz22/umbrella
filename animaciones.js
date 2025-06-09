// Animación al hacer scroll (secciones con clase .animate-section)
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
