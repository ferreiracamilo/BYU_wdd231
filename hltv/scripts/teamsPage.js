document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector('.slider');

    fetch('https://hltv-api.vercel.app/api/player.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(team => {
                const article = document.createElement('article');

                article.innerHTML = `
                    <a href="./team-sample.html" data-team-name="${team.name}">
                        <img src="${team.logo}" alt="Team ${team.name} image">
                        <p><span class="team-fullname">${team.name}</span></p>
                    </a>
                `;

                articlesContainer.appendChild(article);
            });

            // Llama a la función de actualización del slider después de agregar los artículos
            slider.init(); // Esto debe llamar a updateSlider automáticamente
        })
        .catch(error => {
            console.error('Error fetching the team data:', error);
        });
});
