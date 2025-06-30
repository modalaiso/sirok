document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mobileNav");
    const body = document.body;

    toggle.addEventListener("click", () => {
        const isOpen = toggle.classList.toggle("active");
        nav.classList.toggle("active");

        // Gère le scroll
        if (isOpen) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll(".mobile_nav_list a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            nav.classList.remove("active");
            body.classList.remove("no-scroll"); // Réactive le scroll
        });
    });
});

  