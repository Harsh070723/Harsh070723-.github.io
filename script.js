document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        project.style.animation = `fadeIn 1s ease-in-out ${index * 0.2}s forwards`;
        project.style.opacity = "0";
    });
});
