document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector('.slider');

    fetch('https://hltv-api.vercel.app/api/player.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(team => {
                team.players.forEach(player => {
                    const article = document.createElement('article');
                    
                    article.innerHTML = `
                        <a href="./player.html" data-player-nickname="${player.nickname}">
                            <img src="${player.image}" alt="${player.nickname} player image">
                            <p><span class="player-fullname">${player.fullname}</span></p>
                        </a>
                    `;
                    
                    articlesContainer.appendChild(article);
                });
            });
            const event = new Event('dataLoaded');
            document.dispatchEvent(event);
        })
        .catch(error => {
            console.error('Error fetching player data:', error);
        });
});