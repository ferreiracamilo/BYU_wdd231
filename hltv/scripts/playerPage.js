// Fetching player data and match data
async function fetchData() {
    try {
        // Get the nickname of the selected player from local storage
        const selectedPlayerNickname = localStorage.getItem('selectedPlayerNickname');
        
        // Check if the nickname is stored
        if (!selectedPlayerNickname) {
            alert('No player selected. Please select a player first.');
            return;
        }

        // Fetch players data
        const playersResponse = await fetch('https://hltv-api.vercel.app/api/player.json');
        const playersData = await playersResponse.json();

        // Fetch matches data
        const matchesResponse = await fetch('https://hltv-api.vercel.app/api/match.json');
        const matchesData = await matchesResponse.json();

        // Find the player from players data using the nickname
        const player = playersData.flatMap(team => team.players).find(p => p.nickname === selectedPlayerNickname);

        // Check if the player exists
        if (!player) {
            alert('Player not found.');
            return;
        }

        // Set player image
        const playerImage = document.getElementById('player-image');
        playerImage.src = player.image;
        playerImage.alt = `${player.nickname} Player Image`;

        // Set player full name (removing nickname)
        const playerFullName = document.getElementById('player-full-name');
        playerFullName.textContent = player.fullname.replace(`'${player.nickname}'`, '').trim();

        // Set player nickname
        const playerNickname = document.getElementById('player-nickname');
        playerNickname.textContent = player.nickname;

        // Set player country
        const playerCountry = document.getElementById('player-country');
        playerCountry.textContent = player.country.name;

        // Find the match data for the player
        const matchData = matchesData.find(m => m.nickname === selectedPlayerNickname);

        // Check if match data exists
        if (matchData) {
            // Set maps played
            const playerMapsPlayed = document.getElementById('player-maps-played');
            playerMapsPlayed.textContent = matchData.mapsPlayed;

            // Set KD
            const playerKD = document.getElementById('player-kd');
            playerKD.textContent = matchData.kd;

            // Set rating
            const playerRating = document.getElementById('player-rating');
            playerRating.textContent = matchData.rating;
        } else {
            alert('Match data for this player not found.');
        }

        // Set team name and data-team-name attribute
        const playerTeam = document.getElementById('player-team');
        const playerTeamLink = document.querySelector('a[data-team-name]');
        const teamName = playersData[0].name; // Assuming the first team's name is to be used
        playerTeam.textContent = teamName;
        playerTeamLink.setAttribute('data-team-name', teamName);
        const event = new Event('dataLoaded');
        document.dispatchEvent(event);
    } catch (error) {
        alert('An error occurred while fetching player data.');
        console.error(error);
    }
}

// Call fetchData on page load
fetchData();