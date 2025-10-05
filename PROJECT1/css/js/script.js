document.addEventListener("DOMContentLoaded", () => {
    // Navbar Hover Effect
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffebee"; // Light red
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Input Focus Animation
    const searchInput = document.querySelector("main input");
    
    searchInput.addEventListener("focus", () => {
        searchInput.style.boxShadow = "0 0 10px #ff5252";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.boxShadow = "none";
    });

    // Fade-in effect on load
    document.querySelector("main").style.opacity = 0;
    setTimeout(() => {
        document.querySelector("main").style.transition = "opacity 1.5s";
        document.querySelector("main").style.opacity = 1;
    }, 300);
});
