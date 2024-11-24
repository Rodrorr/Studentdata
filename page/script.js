
// Sample teacher data
const teachers = [
    {
        name: 'Engineer Md. Sakhawat Hossain',
        Designation: 'Principal',
        email: 'principalspi1966@gmail.com',
        phone: '029988-13192',
        image: 'timg/principal.jpg'
    },
    {
        name: 'Bulbul Ahamed',
        Designation: 'Chief Instructor',
        subject: 'Computer Science and technology',
        email: 'bulbul.cicmti@gmail.com',
        phone: '01711789276',
        image: 'timg/bulbul.jpg'
    },
    {
        name: 'Md. Mehedi Hasan',
        Designation: 'Instructor (Tech)',
        subject: 'Computer Science and technology',
        email: 'wtbl.hasan@gmail.com',
        phone: '01771752777',
        image: 'timg/mehedi.jpg'
    },
    {
        name: 'Maksuda Parveen Mukul',
        Designation: 'Instructor',
        subject: 'Computer Science and technology',
        email: 'mukulcse31@gmail.com',
        phone: '01714464240',
        image: 'timg/mukul.jpg'
    },
    {
        name: 'Mohammad Uzzol Mia',
        Designation: 'Instructor',
        subject: 'Computer Science and technology',
        email: 'uzzolspi@gmail.com',
        phone: '01723277913',
        image: 'timg/uzzol.jpg'
    },
    {
        name: 'Dipak Kumar Das',
        Designation: 'Instructor',
        subject: 'Computer Science and technology',
        email: 'dipak.ict43@gmail.com',
        phone: '01921954900',
        image: 'timg/dipak.jpg'
    },
    {
        name: 'Mohammad Zahidul Islam',
        Designation: 'Junior Instructor',
        subject: 'Computer Science and technology',
        email: 'zahidul989@gmail.com',
        phone: '01723716788',
        image: 'timg/zahidul.jpg'
    },
    {
        name: 'Mohammad Obaidullah Noman ',
        Designation: 'Junior Instructor',
        subject: 'Computer Science and technology',
        email: 'obaidullahnoman.cse@gmail.com',
        phone: '01715938729',
        image: 'timg/noman.jpg'
    },
    {
        name: 'Ahammad Ali ',
        Designation: 'Guest Junior Instructor (Tech)',
        subject: 'Computer Science and technology',
        email: 'ahammadali859649@gmail.com',
        phone: '01725222945',
        image: 'timg/ahmed.jpg'
    },
    {
        name: 'Md. Sohanur Rahman Sohag ',
        Designation: 'Guest Junior Instructor (Tech)',
        subject: 'Computer Science and technology',
        email: 'sohanur.rs@ultarunivercel.com',
        phone: '01777046785',
        image: 'timg/shohag.jpg'
    },
];
// Function to display teacher data
function displayTeachers(data) {
    const teacherList = document.getElementById('teacherList');
    teacherList.innerHTML = ''; // Clear previous content

    data.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.classList.add('teacher-card');
        teacherCard.innerHTML = `
            <img src="${teacher.image}" alt="${teacher.name}">
            <h3>${teacher.name}</h3>
            <p>Designation: ${teacher.Designation}</p>
            <p>Subject: ${teacher.subject || 'N/A'}</p>
            <p>Email: ${teacher.email}</p>
            <p>Phone: ${teacher.phone}</p>
        `;
        teacherList.appendChild(teacherCard);
    });
}

// Initial display of all teachers
displayTeachers(teachers);

// Search functionality for teacher data
const teacherSearchInput = document.getElementById('teacherSearchInput');

function filterTeachers() {
    const searchTerm = teacherSearchInput.value.toLowerCase();

    // Filter teachers based on name or subject
    const filteredTeachers = teachers.filter(teacher => {
        return teacher.name.toLowerCase().includes(searchTerm) || 
               (teacher.subject && teacher.subject.toLowerCase().includes(searchTerm));
    });

    displayTeachers(filteredTeachers);
}

// Event listener for search input
teacherSearchInput.addEventListener('input', filterTeachers);

// Slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}