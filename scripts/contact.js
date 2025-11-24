// Footer year and last modified
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});

// Contact form handling (basic demo)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll reply soon.");
    contactForm.reset();
  });
}
