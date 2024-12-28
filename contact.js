function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    const hamburger = document.querySelector('.hamburger');

    navContents.classList.toggle('active');
    hamburger.classList.toggle('active');
}
