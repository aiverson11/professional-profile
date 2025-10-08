const footer = document.createElement('footer');
footer.innerHTML = `
    <div class="footer-content">
        <p>&copy; 2025 John Aiverson Abong. All Rights Reserved.</p>
        <div class="socials">
            <a href="https://www.facebook.com/aiversonpalomar" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/aiversonpalomar" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://github.com/aiverson11" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/johnaiversonabong/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
        </div>
    </div>
`;
footer.classList.add('footer');

// Add footer to the bottom of the page
document.body.appendChild(footer);
