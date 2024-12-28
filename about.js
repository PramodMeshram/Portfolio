document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('#education h2, .education-item');
    let delay = 0; // Initial delay

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                delay += 50;
            }
        });
    }, {
        threshold: 0.7,
    });

    elementsToAnimate.forEach((element) => observer.observe(element));
});

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    const hamburger = document.querySelector('.hamburger');

    navContents.classList.toggle('active');
    hamburger.classList.toggle('active');
}
