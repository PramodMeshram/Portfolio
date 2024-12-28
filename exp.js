document.addEventListener('DOMContentLoaded', () => {
    let delay = 0;
    const elementsToAnimate = document.querySelectorAll('.Highlights h2, .card, .volunteer-item h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                delay += 150;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
    });

    elementsToAnimate.forEach((element) => observer.observe(element));
});

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    const hamburger = document.querySelector('.hamburger');

    navContents.classList.toggle('active');
    hamburger.classList.toggle('active');
}
