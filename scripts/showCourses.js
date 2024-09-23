const linksURL = "https://ferreiracamilo.github.io/wdd231/data/courses.json";

async function getCourses() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayCourses(data.courses);
}

// Función para mostrar la lista de cursos
function displayCourses(courses) {
    const courseTable = document.getElementById('courses-table');

    // Recorrer cada curso y crear un elemento <div> para mostrarlo
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        
        // Asignar la clase según el valor de "completed"
        if (course.completed) {
            courseDiv.classList.add('course-completed');
        } else {
            courseDiv.classList.add('course-incomplete');
        }

        // Contenido del div
        courseDiv.innerHTML = `
            <strong>${course.subject} ${course.number}</strong>
        `;
        
        // Añadir el div al div principal
        courseTable.appendChild(courseDiv);
    });
}

getCourses();