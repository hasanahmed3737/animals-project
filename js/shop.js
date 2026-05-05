let cart = [];
let total = 0;

function addToCart(name, price) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    total += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalElement = document.getElementById("cart-total");

    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} x${item.qty} - $${item.price * item.qty}`;
        cartList.appendChild(li);
    });

    totalElement.textContent = `Total: $${total}`;
}