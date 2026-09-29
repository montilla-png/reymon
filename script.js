document.addEventListener("DOMContentLoaded", function () {

    // CONTINUE BUTTON
    const introPage = document.getElementById("intro-page");
    const continueBtn = document.getElementById("continue-btn");

    if (continueBtn && introPage) {
        continueBtn.addEventListener("click", function () {
            introPage.classList.add("hide");
        });
    }

    // MOBILE MENU
    const menu = document.getElementById("menu");
    const navLinks = document.getElementById("nav-links");

    if (menu && navLinks) {
        menu.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

    // TYPING EFFECT
    const typing = document.getElementById("typing");

    if (typing) {
        const text = "Rey Montilla";
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typing.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 150);
            }
        }

        typeText();
    }

    // CLOSE MOBILE MENU
    document.querySelectorAll("#nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (navLinks) {
                navLinks.classList.remove("show");
            }
        });
    });

    // CURRENT YEAR
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});