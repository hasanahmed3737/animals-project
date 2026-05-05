const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".animal-card");

/* =========================
   CART SYSTEM 🛒
========================= */
let cart = [];

function addToCart(name) {
    cart.push(name);
    console.log("Cart:", cart);
    alert(`${name} added to cart 🛒`);
}

/* =========================
   3D HOVER EFFECT 🎮
========================= */
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 10) * -1;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

    /* زرار Add to Cart */
    const btn = card.querySelector(".add-cart");
    if (btn) {
        btn.addEventListener("click", () => {
            const name = card.querySelector("h3").textContent;
            addToCart(name);
        });
    }
});

/* =========================
   SCROLL ANIMATION ✨
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));

/* =========================
   SEARCH FUNCTION 🔍 (المعدلة)
========================= */
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".animal-card");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.parentElement.style.display = "block"; // يظهر الكارد
        } else {
            card.parentElement.style.display = "none"; // يخفيه
        }
    });
});

/* =========================
   PAW CURSOR 🐾
========================= */
const paw = document.getElementById("pawCursor");

document.addEventListener("mousemove", (e) => {
    paw.style.left = e.clientX + "px";
    paw.style.top = e.clientY + "px";
});



