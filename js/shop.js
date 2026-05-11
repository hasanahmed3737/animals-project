
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (category) {
    const allContainers = document.querySelectorAll(".cards-container");

    allContainers.forEach(container => {
      const card = container.querySelector(".animal-card");
      const cardCategory = card?.getAttribute("data-category");

      if (cardCategory !== category) {
        container.style.display = "none";
      }
    });

   
    const title = document.querySelector(".p-shop");
    if (title) {
      const categoryNames = {
        reptiles: "🦎 Reptiles",
        birds: "🦜 Birds",
        mammals: "🐾 Mammals",
        marine: "🐳 Marine Creatures"
      };
      title.innerHTML = categoryNames[category]
        ? `${categoryNames[category]} <sup>WildKeep</sup>`
        : `WildKeep <sup>🐒🐾</sup>`;
    }

   
    addShowAllButton(category);
  }
});


function addShowAllButton(activeCategory) {
  const main = document.querySelector("main");
  if (!main) return;

  const categoryNames = {
    reptiles: "🦎 Reptiles",
    birds: "🦜 Birds",
    mammals: "🐾 Mammals",
    marine: "🐳 Marine Creatures"
  };

  const banner = document.createElement("div");
  banner.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f0f7f1;
    border: 1px solid #3d6b41;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px auto 20px;
    max-width: 900px;
    flex-wrap: wrap;
    gap: 10px;
  `;

  banner.innerHTML = `
    <span style="color: #3d6b41; font-weight: bold; font-size: 1rem;">
      Showing: ${categoryNames[activeCategory] || activeCategory}
    </span>
    <a href="shop.html" style="text-decoration: none;">
      <button style="
        background: #3d6b41;
        color: white;
        border: none;
        padding: 8px 18px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
      ">🔄 Show All Animals</button>
    </a>
  `;

  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.parentNode.insertBefore(banner, searchInput.nextSibling);
  } else {
    main.prepend(banner);
  }
}


let cart = JSON.parse(localStorage.getItem("wildkeep-cart")) || [];

function saveCart() {
  localStorage.setItem("wildkeep-cart", JSON.stringify(cart));
}

function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items-list");
  const cartEmptyMsg = document.getElementById("cart-empty-msg");
  const cartSummary = document.getElementById("cart-summary");
  const totalPrice = document.getElementById("total-price");

  if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!cartItemsList) return;

  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    if (cartEmptyMsg) cartEmptyMsg.style.display = "block";
    if (cartSummary) cartSummary.style.display = "none";
    return;
  }

  if (cartEmptyMsg) cartEmptyMsg.style.display = "none";
  if (cartSummary) cartSummary.style.display = "block";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #eee;";
    div.innerHTML = `
      <div>
        <div style="font-weight:bold;">${item.name}</div>
        <div style="color:#888; font-size:0.85rem;">$${item.price} × ${item.qty}</div>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="changeQty(${index}, -1)" style="background:#eee; border:none; border-radius:50%; width:26px; height:26px; cursor:pointer; font-size:1rem;">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${index}, 1)" style="background:#eee; border:none; border-radius:50%; width:26px; height:26px; cursor:pointer; font-size:1rem;">+</button>
        <button onclick="removeItem(${index})" style="background:#e74c3c; color:white; border:none; border-radius:50%; width:26px; height:26px; cursor:pointer;">✕</button>
      </div>
    `;
    cartItemsList.appendChild(div);
  });

  if (totalPrice) totalPrice.textContent = total.toFixed(2);
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart();
  updateCartUI();

 
  const btn = [...document.querySelectorAll(".btn-view")].find(b =>
    b.closest(".animal-card")?.querySelector("h3")?.textContent === name
  );
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✓ Added!";
    btn.style.background = "#27ae60";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = "";
    }, 1000);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-view").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".animal-card");
      const name = card?.querySelector("h3")?.textContent || "Animal";
      const priceText = card?.querySelector(".card-price")?.textContent || "$0";
      const price = parseFloat(priceText.replace("$", ""));
      addToCart(name, price);
    });
  });

 
  const cartIcon = document.getElementById("cart-icon-wrapper");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCart = document.getElementById("close-cart");

  if (cartIcon) cartIcon.addEventListener("click", () => {
    cartSidebar.style.right = "0";
  });
  if (closeCart) closeCart.addEventListener("click", () => {
    cartSidebar.style.right = "-100%";
  });

  updateCartUI();
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;

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
});