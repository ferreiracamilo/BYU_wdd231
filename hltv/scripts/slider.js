// slider.js

document.addEventListener("DOMContentLoaded", () => {
    const sliderElement = document.querySelector('.slider');
    let articles = []; // Array de artículos en el slider
    let currentIndex = 0; // Índice actual del artículo visible

    // Inicializa el slider después de cargar los artículos
    function initSlider() {
        articles = document.querySelectorAll('.slider article');
        updateSlider();
    }

    // Actualiza el desplazamiento del slider para mostrar solo un artículo a la vez
    function updateSlider() {
        const offset = -currentIndex * 100; // Calcula el desplazamiento para un solo artículo
        sliderElement.style.transform = `translateX(${offset}%)`; // Desplazamiento en porcentaje
    }

    // Función para avanzar en el slider
    function next() {
        currentIndex++;
        if (currentIndex >= articles.length) {
            currentIndex = 0; // Vuelve al inicio al llegar al final
        }
        updateSlider();
    }

    // Función para retroceder en el slider
    function prev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = articles.length - 1; // Vuelve al último artículo si retrocede más allá del primero
        }
        updateSlider();
    }

    // Configura los eventos de los botones
    document.querySelector('.left-arrow').addEventListener('click', prev);
    document.querySelector('.right-arrow').addEventListener('click', next);

    // Escucha cuando se agreguen artículos dinámicamente y reinicia el slider
    const observer = new MutationObserver(initSlider);
    observer.observe(sliderElement, { childList: true });

    // Llama a initSlider para la configuración inicial
    initSlider();
});
