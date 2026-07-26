// ==============================
// Sticky Navbar Shadow
// ==============================

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// ==============================
// Smooth Navigation
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// ==============================
// Fade-in Animation
// ==============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".about-card, .feature-box, .menu-card, .review-card, .contact-card"
).forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});

// ==============================
// Gallery Image Zoom
// ==============================

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", function () {

        this.classList.toggle("active");

    });

});
