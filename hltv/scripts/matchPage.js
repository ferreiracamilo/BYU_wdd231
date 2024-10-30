document.addEventListener("DOMContentLoaded", () => {
    const selectedMatchId = localStorage.getItem("selectedMatchId");

    // Function to show javascript alert
    function showWarning(message) {
        alert(message);
    }

    if (!selectedMatchId) {
        showWarning("No match ID found in localStorage.");
        return;
    }

    fetch("https://hltv-api.vercel.app/api/results.json")
        .then(response => response.json())
        .then(data => {
            const match = data.find(match => match.matchId === parseInt(selectedMatchId));

            if (!match) {
                showWarning("No match found with the specified match ID.");
                return;
            }

            // Fill in the opponents section
            const team1 = match.teams[0];
            const team2 = match.teams[1];

            document.querySelector("a[data-team-name='team1']").dataset.teamName = team1.name;
            document.getElementById("team-1-image").src = team1.logo;
            document.getElementById("team-1-image").alt = `${team1.name} team logo`;
            document.getElementById("team-1-name").textContent = team1.name;
            document.getElementById("team-1-points").textContent = team1.result;

            document.querySelector("a[data-team-name='team2']").dataset.teamName = team2.name;
            document.getElementById("team-2-image").src = team2.logo;
            document.getElementById("team-2-image").alt = `${team2.name} team logo`;
            document.getElementById("team-2-name").textContent = team2.name;
            document.getElementById("team-2-points").textContent = team2.result;

            // Fill in the matchInfo section
            document.getElementById("eventName").textContent = match.event.name;
            document.getElementById("matchMode").textContent = match.maps;

            const matchDate = new Date(match.time);
            document.getElementById("matchDate").textContent = matchDate.toISOString().split("T")[0];
            document.getElementById("matchTime").textContent = matchDate.toISOString().split("T")[1].slice(0, 8);
            const event = new Event('dataLoaded');
            document.dispatchEvent(event);
        })
        .catch(error => {
            console.error("Error fetching or processing data:", error);
            showWarning("An error occurred while loading the match data. Please try again later.");
        });
});
