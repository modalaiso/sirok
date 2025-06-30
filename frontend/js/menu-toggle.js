document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mobileNav");
  
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      nav.classList.toggle("active");
    });
  
    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll(".mobile_nav_list a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  });
  