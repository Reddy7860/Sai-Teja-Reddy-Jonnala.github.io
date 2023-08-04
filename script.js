document.addEventListener("DOMContentLoaded", function () {
    // Function to show the selected section and hide the rest
    function showSection(sectionId) {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            if (section.id === sectionId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    // Display resume content after a short delay to simulate loading
    setTimeout(() => {
        document.getElementById("loading-overlay").style.display = "none";
    }, 1500); // Adjust the delay as per your preference
});
