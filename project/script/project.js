// ===== Footer Updates =====
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function updateLastModified() {
  const modifiedElement = document.getElementById('lastModified');
  if (modifiedElement) {
    const lastMod = new Date(document.lastModified);
    modifiedElement.textContent = lastMod.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
}

// ===== Contact Form Validation =====
function setupForm() {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Conditional branching: check inputs
      if (name === "") {
        alert("Name is required!");
      } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
      } else if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
      } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        form.reset(); // clear form after success
      }
    });
  }
}

// ===== Initialize All Functions =====
document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  updateLastModified();
  setupForm();
});

