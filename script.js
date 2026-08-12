
// MOBILE MENU
// =========================

function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("active");
    }
}


// =========================
// PROJECT DATA
// =========================

const projects = {

    gloves: {
        title: "Smart Gloves",

        category: "IoT / Embedded Systems",

        image: "images/smart-gloves.png",

        description:
            "A sensor-embedded smart glove designed to detect hand gestures and translate them into real-time digital signals for assistive technology applications.",

        technologies: [
            "Arduino",
            "Flex Sensors",
            "Accelerometer",
            "Bluetooth",
            "Signal Processing"
        ],

        overview:
            "The smart glove uses flex sensors and an accelerometer to capture hand and finger movements. The collected sensor information is processed to identify different gestures and convert them into digital signals."
    },


    irrigation: {
        title: "Smart Irrigation System",

        category: "IoT / Smart Agriculture",

        image: "images/smart-irrigation.png",

        description:
            "An IoT-based irrigation system designed to monitor environmental conditions and automate irrigation for plants.",

        technologies: [
            "Arduino",
            "IoT Sensors",
            "Soil Moisture",
            "Temperature",
            "Humidity",
            "Automation"
        ],

        overview:
            "The system monitors environmental conditions such as soil moisture, temperature and humidity. Based on sensor readings, the irrigation process can be automated to provide water when required."
    }

};


// =========================
// OPEN PROJECT
// =========================

function openProject(projectName) {

    console.log("Opening project:", projectName);

    const project = projects[projectName];

    if (!project) {
        console.error("Project not found:", projectName);
        return;
    }

    const modal = document.getElementById("projectModal");

    const modalImage = document.getElementById("modalImage");
    const modalCategory = document.getElementById("modalCategory");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalTechnologies = document.getElementById("modalTechnologies");
    const modalOverview = document.getElementById("modalOverview");


    if (!modal) {
        alert("Project popup is missing from index.html.");
        return;
    }


    // Fill project information

    modalImage.src = project.image;
    modalImage.alt = project.title;

    modalCategory.textContent = project.category;

    modalTitle.textContent = project.title;

    modalDescription.textContent = project.description;

    modalOverview.textContent = project.overview;


    // Clear old technology tags

    modalTechnologies.innerHTML = "";


    // Add technology tags

    project.technologies.forEach(function(technology) {

        const tag = document.createElement("span");

        tag.textContent = technology;

        modalTechnologies.appendChild(tag);

    });


    // Show popup

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =========================
// CLOSE PROJECT
// =========================

function closeProject() {

    const modal = document.getElementById("projectModal");

    if (modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }
}


// =========================
// CLOSE WHEN CLICKING OUTSIDE
// =========================

document.addEventListener("click", function(event) {

    const modal = document.getElementById("projectModal");

    if (!modal) {
        return;
    }

    if (event.target === modal) {
        closeProject();
    }

});


// =========================
// CLOSE WITH ESC
// =========================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }
    

});