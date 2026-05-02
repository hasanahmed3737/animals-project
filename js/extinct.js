// Smooth hover sound or future interactions placeholder

console.log("Extinct Animals page loaded");

// Example: click feedback
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});