document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector('.slider');

    fetch('https://hltv-api.vercel.app/api/results.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(match => {
                const article = document.createElement('article');

                article.innerHTML = `
                    <a href="./match.html" data-match-id="${match.matchId}">
                        <div class="match">
                            <img class="team-logo" src="${match.teams[0].logo}" alt="${match.teams[0].name} Team Logo">
                            <p class="score">${match.teams[0].result} - ${match.teams[1].result}</p>
                            <img class="team-logo" src="${match.teams[1].logo}" alt="${match.teams[1].name} Team Logo">
                        </div>
                    </a>
                `;

                articlesContainer.appendChild(article);
            });
            const event = new Event('dataLoaded');
            document.dispatchEvent(event);
        })
        .catch(error => {
            console.error('Error fetching the team data:', error);
        });
});