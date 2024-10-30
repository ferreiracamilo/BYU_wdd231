document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector('.slider');

    fetch('https://hltv-api.vercel.app/api/player.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(team => {
                const article = document.createElement('article');

                article.innerHTML = `
                    <a href="./team.html" data-team-name="${team.name}">
                        <img src="${team.logo}" alt="Team ${team.name} image">
                        <p><span class="team-fullname">${team.name}</span></p>
                    </a>
                `;

                articlesContainer.appendChild(article);
            });
            // Assuming this is at the end of your data loading logic
            const event = new Event('dataLoaded');
            document.dispatchEvent(event);
        })
        .catch(error => {
            console.error('Error fetching the team data:', error);
        });
});