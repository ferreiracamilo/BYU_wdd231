document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');

    // Clone items to make carousel infinite
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    // Stop animation on mouse over
    track.addEventListener('mouseover', function() {
        track.style.animationPlayState = 'paused';
    });

    // Resume animation on mouse out
    track.addEventListener('mouseout', function() {
        track.style.animationPlayState = 'running';
    });
});