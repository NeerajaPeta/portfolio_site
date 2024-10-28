// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter Effect for Full Stack Developer Title
const typewriterText = "Full Stack Developer";
let i = 0;

function typeWriter() {
    if (i < typewriterText.length) {
        document.querySelector(".highlight").innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

// Clear initial text and start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".highlight").innerHTML = "";
    typeWriter();
});

// Scroll-down Arrow Action
document.querySelector(".scroll-down").addEventListener("click", () => {
    document.querySelector("#skills").scrollIntoView({
        behavior: 'smooth'
    });
});

// Scroll-up Arrow Action
document.querySelector(".scroll-up").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide Scroll Up arrow
window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scroll-up");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
});

// Fade-in Sections on Scroll
const sections = document.querySelectorAll("section");

const fadeInSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(fadeInSection, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
