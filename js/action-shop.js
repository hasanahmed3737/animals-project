/* =========================
   1. VARIABLES (تعريف المتغيرات لمرة واحدة فقط)
========================= */
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".animal-card");
const paw = document.getElementById("pawCursor");
let cart = [];

/* =========================
   2. CART SYSTEM 🛒
========================= */
function addToCart(name) {
    cart.push(name);
    console.log("Cart Current Status:", cart);
    alert(`${name} added to cart 🛒`);
}

/* =========================
   3. CARD FEATURES (3D Effect & Buy Button)
========================= */
cards.forEach(card => {
    // تأثير الـ 3D عند تحريك الماوس
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

    // إعادة الكارد لوضعه الطبيعي عند خروج الماوس
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

    // تفعيل زر الشراء (Buy Button)
    // ملاحظة: الكلاس المستخدم في الـ HTML الخاص بك هو .btn-view
    const btn = card.querySelector(".btn-view");
    if (btn) {
        btn.addEventListener("click", () => {
            const name = card.querySelector("h3").textContent;
            addToCart(name);
        });
    }
});

/* =========================
   4. SEARCH FUNCTION 🔍
========================= */
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            
            // نستخدم parentElement لأن كل كارد داخل div كلاس cards-container
            if (title.includes(value)) {
                card.parentElement.style.display = "block";
            } else {
                card.parentElement.style.display = "none";
            }
        });
    });
}

/* =========================
   5. SCROLL ANIMATION ✨
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => observer.observe(card));

/* =========================
   6. PAW CURSOR 🐾
========================= */
if (paw) {
    document.addEventListener("mousemove", (e) => {
        paw.style.left = e.clientX + "px";
        paw.style.top = e.clientY + "px";
    });
}


