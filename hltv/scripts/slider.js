// slider.js

document.addEventListener("DOMContentLoaded", () => {
    const sliderElement = document.querySelector('.slider');
    let articles = []; // Article array at slider
    let currentIndex = 0; // current index of article in focus/view at slider

    //Initialize slider after loading articles
    function initSlider() {
        articles = document.querySelectorAll('.slider article');
        updateSlider();
    }

    //Refresh slider movement to show one item per time
    function updateSlider() {
        const offset = -currentIndex * 100; // Caalculate movement for one article/item
        sliderElement.style.transform = `translateX(${offset}%)`; // Movement in percentage
    }

    // Function to go forward in slider
    function next() {
        currentIndex++;
        if (currentIndex >= articles.length) {
            currentIndex = 0; // Go back to start by reaching at the end
        }
        updateSlider();
    }

    // Function to go back in slider
    function prev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = articles.length - 1; // Go back to last article if prev is clicked at first element
        }
        updateSlider();
    }

    // Set events for slider buttons
    document.querySelector('.left-arrow').addEventListener('click', prev);
    document.querySelector('.right-arrow').addEventListener('click', next);

    // Review when articles are loaded dynamically and reset slider
    const observer = new MutationObserver(initSlider);
    observer.observe(sliderElement, { childList: true });

    // Call initSlider for initial setup
    initSlider();
});