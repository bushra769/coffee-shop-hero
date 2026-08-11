import "./style.css";

// Smooth scrolling for navbar links
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target.startsWith("#") && target !== "#") {
      e.preventDefault();

      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Order button action
const orderBtn = document.querySelector("button");

orderBtn.addEventListener("click", () => {
  alert("☕ Thank you for choosing Coffee House!\nYour order has been received.");
});

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Footer year
const footer = document.querySelector("footer p");
footer.innerHTML = `© ${new Date().getFullYear()} Coffee House | All Rights Reserved`;