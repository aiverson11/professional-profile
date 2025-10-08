document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <header class="header">
        <a href="index.html" class="logo">John Aiverson Abong</a>
        <i class='bx bx-menu' id="menu-icon"></i>
        <nav class="navbar">
            <a href="index.html">Home</a>
            <a href="education.html">Education</a>
            <a href="experience.html">Experience</a>
            <a href="skill.html">Skill</a>
            <a href="certification.html">Certification</a>
            <a href="advocacy.html">Advocacy</a>
            <a href="portfolio.html">Portfolio</a>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
    };

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
        });
    });
});
