const footer = document.createElement('footer');
footer.innerHTML = `
    <div class="footer-content">
        <p>&copy; 2025 John Aiverson Abong. All Rights Reserved.</p>
        <div class="socials">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-github'></i></a>
            <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
    </div>
`;
footer.classList.add('footer');

// Add footer to the bottom of the page
document.body.appendChild(footer);
