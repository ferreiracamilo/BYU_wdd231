/*
These properties will be utilized to search into the json and load data into some of the pages at some point.
A listener is added to those anchors containing these properties and if any of these anchor tags are clicked the respective property will be added/updated at localstorage

data-team-name is found on match.html, player.html and teams.html pages

data-player-nickname is found on team.html and players.html pages

data-match-id is found on matches.html page
*/

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[data-team-name], a[data-player-nickname], a[data-match-id]').forEach(link => {
        link.addEventListener('click', (event) => {
            const linkElement = event.currentTarget;

            if (linkElement.dataset.teamName) {
                localStorage.setItem('selectedTeamName', linkElement.dataset.teamName);
            }
            if (linkElement.dataset.playerNickname) {
                localStorage.setItem('selectedPlayerNickname', linkElement.dataset.playerNickname);
            }
            if (linkElement.dataset.matchId) {
                localStorage.setItem('selectedMatchId', linkElement.dataset.matchId);
            }
        });
    });
});