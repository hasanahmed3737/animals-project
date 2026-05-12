document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      

      document.querySelectorAll(".cards-container").forEach(container => {
   
        const name = container.querySelector("h3")?.textContent.toLowerCase() || "";
        const location = container.querySelector(".card-location")?.textContent.toLowerCase() || "";
        const tags = [...container.querySelectorAll(".tag")].map(t => t.textContent.toLowerCase()).join(" ");

      
        const matches = name.includes(query) || location.includes(query) || tags.includes(query);

    
        container.style.display = matches ? "" : "none";
      });
    });
  }
});