const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".animal-card");
const paw = document.getElementById("pawCursor");
const cartCountElement = document.getElementById("cart-count");
let cartItemsCount = 0;

function updateCart() {
    cartItemsCount++;
    if (cartCountElement) {
        cartCountElement.textContent = cartItemsCount;
        cartCountElement.style.transform = "scale(1.3)";
        setTimeout(() => {
            cartCountElement.style.transform = "scale(1)";
        }, 200);
    }
}

function filterByCategory() {
    const params = new URLSearchParams(window.location.search);
    let category = params.get('category');

    if (category) {
        category = category.toLowerCase().trim();
        cards.forEach(card => {
            let cardCategory = card.getAttribute('data-category');
            if (cardCategory) {
                cardCategory = cardCategory.toLowerCase().trim();
                
                if (cardCategory === category || category.includes(cardCategory) || cardCategory.includes(category)) {
                    card.parentElement.style.display = "block";
                } else {
                    card.parentElement.style.display = "none";
                }
            }
        });
        
        const titleElement = document.querySelector('.p-shop');
        if (titleElement) {
            titleElement.textContent = `WildKeep - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        }
    }
}

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

    const buyBtn = card.querySelector(".btn-view");
    if (buyBtn) {
        buyBtn.addEventListener("click", updateCart);
    }
});

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            card.parentElement.style.display = title.includes(query) ? "block" : "none";
        });
    });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => revealObserver.observe(card));

if (paw) {
    document.addEventListener("mousemove", (e) => {
        paw.style.left = `${e.clientX}px`;
        paw.style.top = `${e.clientY}px`;
    });
}

window.addEventListener("DOMContentLoaded", filterByCategory);