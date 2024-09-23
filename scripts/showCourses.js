const courseWorkURL = "https://ferreiracamilo.github.io/wdd231/data/courses.json";

async function getCourses() {
    const response = await fetch(courseWorkURL);
    const data = await response.json();
    return data.courses;
}

function displayCourses(courses) {
    const coursesTable = document.querySelector('#courses-table');
    coursesTable.innerHTML = ''; //Clean courses table to show update content based on course filter button

    // Show all courses from list received in argument
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        
        // Assign class based on course.completed property set on json
        if (course.completed) {
            courseDiv.classList.add('course-completed');
        } else {
            courseDiv.classList.add('course-incomplete');
        }

        courseDiv.innerHTML = `
            <strong>${course.subject} ${course.number}</strong>
        `;

        coursesTable.appendChild(courseDiv);
    });
}

// Filter courses based on subject
function filterCourses(subject, allCourses) {
    if (subject === 'all') {
        return allCourses;
    }
    return allCourses.filter(course => course.subject === subject);
}

// Handle course filters
async function setupFilters() {
    const allCourses = await getCourses(); // load all courses from data json

    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const filterValue = event.target.getAttribute('data-filter');
            const filteredCourses = filterCourses(filterValue, allCourses);
            displayCourses(filteredCourses);
        });
    });

    displayCourses(allCourses); // By default show all courses from scratch
}

// Initialize
setupFilters();
