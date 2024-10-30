document.addEventListener("DOMContentLoaded", () => {
const selectedTeamName = localStorage.getItem("selectedTeamName");

if (!selectedTeamName) {
    alert("No team name found in localStorage.");
    return;
}

fetch("https://hltv-api.vercel.app/api/player.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error loading teams data.");
        }
        return response.json();
    }).then(data => {
        const teamData = data.find(team => team.name === selectedTeamName);

        if (!teamData) {
            alert("No team found with the specified team name.");
            return;
        }

        // Filling data at topTeampage section
        document.getElementById("team-image").src = teamData.logo;
        document.getElementById("team-image").alt = `${teamData.name} Team Logo`;
        document.getElementById("team-name").textContent = teamData.name;
        document.getElementById("team-ranking").textContent = teamData.ranking;

        // Filling data at teamPlayers section
        const teamPlayersSection = document.getElementById("teamPlayers");
        teamPlayersSection.innerHTML = "<h2>Team Players</h2>"; // Reset to avoid duplicate entries

        teamData.players.forEach(player => {
            // Remove nickname from fullanem
            const fullName = player.fullname.replace(/'[^']*'/, "").trim();

            // Create the article element for player
            const playerArticle = document.createElement("article");
            playerArticle.innerHTML = `
            <a href="./player.html" data-player-nickname="${player.nickname}">
                <img src="${player.image}" alt="${player.nickname} player image">
                <p>Full Name: <span id="player-fullname">${fullName}</span></p>
                <p>Nickname: <span id="player-nickname">${player.nickname}</span></p>
            </a>
            `;
            
            teamPlayersSection.appendChild(playerArticle);
        });
        const event = new Event('dataLoaded');
        document.dispatchEvent(event);
    }).catch(error => {
        alert(error.message || "An error occurred while loading the match data. Please try again later.");
    });
});