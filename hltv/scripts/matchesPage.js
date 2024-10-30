document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector('.slider');

    fetch('https://hltv-api.vercel.app/api/results.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(match => {
                const article = document.createElement('article');

                article.innerHTML = `
                    <a href="./match-sample.html" data-match-id="${match.id}">
                        <div class="match">
                            <img class="team-logo" src="https://img-cdn.hltv.org/teamlogo/g1gnqFhoa0FrcbRHXRAToF.png?ixlib=java-2.1.0&w=50&s=54d3d3762492bd158c053de080910c5f" alt="Team 1 Logo">
                            <p class="score">2 - 0</p>
                            <img class="team-logo" src="https://img-cdn.hltv.org/teamlogo/c27JiTOfpruzQaf8emu_E_.png?ixlib=java-2.1.0&w=50&s=b0c670f53aaf12df68c693515eecdce5" alt="Team 2 Logo">
                        </div>
                    </a>
                `;
                articlesContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error fetching the team data:', error);
        });
});

/*
<article>
    <a href="#" data-match-id="123131">
        <div class="match">
            <img class="team-logo" src="https://img-cdn.hltv.org/teamlogo/g1gnqFhoa0FrcbRHXRAToF.png?ixlib=java-2.1.0&w=50&s=54d3d3762492bd158c053de080910c5f" alt="Team 1 Logo">
            <p class="score">2 - 0</p>
            <img class="team-logo" src="https://img-cdn.hltv.org/teamlogo/c27JiTOfpruzQaf8emu_E_.png?ixlib=java-2.1.0&w=50&s=b0c670f53aaf12df68c693515eecdce5" alt="Team 2 Logo">
        </div>
    </a>
</article>
*/