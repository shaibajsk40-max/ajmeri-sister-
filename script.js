
/* =====================================
   AJMERI CREATIV - JAVASCRIPT
===================================== */

// 1. WHATSAPP SETTINGS

const whatsappNumber = "917028185852";

const defaultMessage =
    "Assalamualaikum ajmeri sis mujhe - (COURSE_NAME) karna hai tho give me more details.";


// 2. WHATSAPP BUTTONS

const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const courseName = button.dataset.course || "General Enquiry";

        const message = defaultMessage.replace(
            "(COURSE_NAME)",
            courseName
        );

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener");

    });

});


// 3. MOBILE NAVIGATION MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuBtn.textContent = isOpen ? "✕" : "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    // Menu link click karne par menu close hoga

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// 4. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-visual, .section-heading, " +
    ".service-card, .about-box, .steps > div"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


// 5. FOOTER YEAR AUTOMATIC UPDATE

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 6. CARD HOVER EFFECT

const cards = document.querySelectorAll(".service-card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        card.style.setProperty("--hover-active", "1");
    });

    card.addEventListener("mouseleave", function () {
        card.style.setProperty("--hover-active", "0");
    });

});


// 7. CONSOLE MESSAGE

console.log(
    "✨ Welcome to Ajmeri Creativ! Website loaded successfully."
);
