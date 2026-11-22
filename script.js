// Mobile navigation and front-end quote form demo.
// IMPORTANT: connect the form submit handler to Prime's real booking/quote system before launch.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });
}

const quoteForm = document.querySelector("#quote-form");
const formMessage = document.querySelector("#form-message");

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const details = new FormData(quoteForm);
    const pickup = details.get("pickup");
    const dropoff = details.get("dropoff");
    formMessage.textContent = `Thanks. Your ${details.get("tripType").toLowerCase()} journey from ${pickup} to ${dropoff} is ready to be connected to the booking system.`;
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
