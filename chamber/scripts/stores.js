async function fetchMembers() {
    try {
        const response = await fetch('https://ferreiracamilo.github.io/wdd231/chamber/data/members.json'); // Use the correct file path
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {
    const membersContainer = document.getElementById('members-container');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.icon_filename}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone_number}</p>
            <p><strong>Website:</strong> <a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
        `;
        membersContainer.appendChild(memberCard);
    });
}

function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

function toggleView(view) {
    const membersContainer = document.getElementById('members-container');
    if (view === 'grid') {
        membersContainer.classList.remove('members-list');
        membersContainer.classList.add('members-grid');
    } else if (view === 'list') {
        membersContainer.classList.remove('members-grid');
        membersContainer.classList.add('members-list');
    }
}

function displayFooterInfo() {
    const copyrightYearElement = document.getElementById('copyright-year');
    const lastModifiedElement = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;

    copyrightYearElement.innerHTML = `&copy; ${currentYear}`;
    lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate}`;
}

// Load members data when the page loads
window.onload = function() {
    fetchMembers();
    displayFooterInfo();
}