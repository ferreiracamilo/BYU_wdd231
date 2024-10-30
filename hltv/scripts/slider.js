document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0; // Índice del artículo visible
    const articles = document.querySelectorAll('.slider article'); // Selecciona todos los artículos
    const totalArticles = articles.length; // Total de artículos
    const slider = document.querySelector('.slider'); // Contenedor del slider

    function updateSlider() {
        // Ajusta el transform según el índice actual
        const offset = -currentIndex * 100; // Calcula el desplazamiento
        slider.style.transform = `translateX(${offset}%)`; // Aplica la transformación
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
        currentIndex--; // Disminuye el índice
        if (currentIndex < 0) {
            currentIndex = totalArticles - 1; // Regresa al último artículo
        }
        updateSlider();
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        currentIndex++; // Aumenta el índice
        if (currentIndex >= totalArticles) {
            currentIndex = 0; // Regresa al primer artículo
        }
        updateSlider();
    });

    // Llama a la función de actualización inicial para centrar el primer artículo
    updateSlider();
});