document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("siteLogo");
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mobileNav");
    const body = document.body;

    toggle.addEventListener("click", () => {
        const isOpen = toggle.classList.toggle("active");
        nav.classList.toggle("active");
        logo.classList.remove("logo_up"); // au cas où on ferme par un lien


        // Gère le scroll
        if (isOpen) {
            body.classList.add("no-scroll");
            logo.classList.add("logo_up"); // logo monte
        } else {
            body.classList.remove("no-scroll");
            logo.classList.remove("logo_up"); // logo redescend
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

  