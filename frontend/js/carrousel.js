
const track = document.querySelector('.carousel-track');

// Pause l'animation quand on survole
//track.addEventListener('mouseenter', () => {
    //track.style.animationPlayState = 'paused';
//});

//track.addEventListener('mouseleave', () => {
    //track.style.animationPlayState = 'running';
//});

// Permet le scroll manuel horizontal (optionnel si besoin)
//track.style.cursor = 'grab';
let isDown = false;
let startX, scrollLeft;

track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    //track.style.cursor = 'grabbing';
});

track.addEventListener('mouseleave', () => {
    isDown = false;
    //track.style.cursor = 'grab';
});

track.addEventListener('mouseup', () => {
    isDown = false;
    //track.style.cursor = 'grab';
});

track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
});