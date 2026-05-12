document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      
      // نختار كل حاويات الكروت في الصفحة
      document.querySelectorAll(".cards-container").forEach(container => {
        // نأخذ النصوص اللي عايزين نبحث جواها (الاسم، المكان، التاجات)
        const name = container.querySelector("h3")?.textContent.toLowerCase() || "";
        const location = container.querySelector(".card-location")?.textContent.toLowerCase() || "";
        const tags = [...container.querySelectorAll(".tag")].map(t => t.textContent.toLowerCase()).join(" ");

        // نتحقق إذا كانت كلمة البحث موجودة في أي منهم
        const matches = name.includes(query) || location.includes(query) || tags.includes(query);

        // إذا وجدنا تطابق نظهر الكارت، وإذا لم نجد نخفيه
        container.style.display = matches ? "" : "none";
      });
    });
  }
});