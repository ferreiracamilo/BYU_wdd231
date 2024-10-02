const urlMembersData = "https://ferreiracamilo.github.io/wdd231/chamber/data/members.json";
const membersZone = document.querySelector('.carousel-track');

async function getMembersData() {
    try {
        const response = await fetch(urlMembersData);
        const data = await response.json();

        const goldMembers = data.members.filter(member => member.membership === 'Gold');

        displayMembers(goldMembers);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

const displayMembers = (members) => {
    function getRandomMembers(members, count) {
        const shuffled = members.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const selectedMembers = getRandomMembers(members, Math.min(members.length, 3));

    selectedMembers.forEach((member) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const link = document.createElement("a");
        link.setAttribute("href", member.website);

        const icon = document.createElement("img");
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', "Logo of " + member.name);
        icon.setAttribute('loading', 'lazy');

        const companyDetails = document.createElement("div");
        companyDetails.classList.add("company-details");

        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = "Address: " + member.address;

        const membership = document.createElement("p");
        membership.textContent = "Membership Level: " + member.membership;

        companyDetails.appendChild(name);
        companyDetails.appendChild(address);
        companyDetails.appendChild(membership);
        
        link.appendChild(icon);
        link.appendChild(companyDetails);
        carouselItem.appendChild(link);

        membersZone.appendChild(carouselItem);
    });
}

getMembersData();
