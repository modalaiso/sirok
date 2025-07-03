document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // pour ne l’animer qu’une fois
        }
      });
    }, { threshold: 0.2 });
  
    reveals.forEach(card => observer.observe(card));
  });