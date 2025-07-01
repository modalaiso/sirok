document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("resToggle");
    const popup = document.getElementById("resPopup");
    const closeBtn = document.getElementById("closeResPopup");
  
    let isOpen = false;
  
    toggle.addEventListener("click", () => {
      if (!isOpen) {
        popup.style.display = "flex";
        popup.style.animation = "slideUp 0.3s forwards";
        isOpen = true;
      } else {
        popup.style.animation = "slideDown 0.3s forwards";
        setTimeout(() => {
          popup.style.display = "none";
          isOpen = false;
        }, 300);
      }
    });
  
    closeBtn.addEventListener("click", () => {
      popup.style.animation = "slideDown 0.3s forwards";
      setTimeout(() => {
        popup.style.display = "none";
        isOpen = false;
      }, 300);
    });
  
    window.addEventListener("click", e => {
      if (isOpen && !popup.contains(e.target) && !toggle.contains(e.target)) {
        popup.style.animation = "slideDown 0.3s forwards";
        setTimeout(() => {
          popup.style.display = "none";
          isOpen = false;
        }, 300);
      }
    });
  });