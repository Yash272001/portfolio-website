function showForm() {
    document.getElementById('contactForm').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const contactForm = document.querySelector("#contactForm form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        contactForm.reset();
    });
});
