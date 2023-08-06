
document.addEventListener("DOMContentLoaded", function () {
    // Function to highlight the active navigation link
    function highlightActiveLink(sectionId) {
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach((link) => {
            if (link.getAttribute("href").substring(1) === sectionId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Function for smooth scrolling to the selected section
    function smoothScrollTo(element) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionId);
            smoothScrollTo(targetSection);
            highlightActiveLink(sectionId);
        });
    });

    // Display resume content after a short delay to simulate loading
    setTimeout(() => {
        document.getElementById("loading-overlay").style.display = "none";
    }, 1500);
});
