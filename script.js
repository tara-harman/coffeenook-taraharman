
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Apply saved theme when page loads
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) {
            themeToggle.textContent = "☀️ Morning Mode";
        }
    }

    // Toggle theme and save preference
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "Morning Mode";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "Evening Mode";
            }
        });
    }

    // 
    // FAQ Accordion //
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            this.classList.toggle("active");

            const answer = this.nextElementSibling;
            answer.classList.toggle("active");
        });
    });

    // Mobile Navigation //
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }
});
