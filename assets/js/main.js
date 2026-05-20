const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const portraitImage = document.querySelector(".portrait-image");
const currentYear = document.querySelector("#current-year");

function setMenuState(isOpen) {
    if (!navToggle || !navMenu) {
        return;
    }

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navMenu.classList.toggle("is-open", isOpen);
}

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        setMenuState(!isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });
}

if (portraitImage) {
    portraitImage.addEventListener("error", () => {
        const fallbackId = portraitImage.dataset.fallbackTarget;
        const fallback = fallbackId ? document.getElementById(fallbackId) : null;

        portraitImage.style.display = "none";

        if (fallback) {
            fallback.classList.add("is-visible");
        }
    });
}

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}
