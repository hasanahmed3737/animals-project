const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const navLinks = document.querySelectorAll('.nav-link');

const cartIcon = document.getElementById('cart-icon-wrapper');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const cartCount = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');
const cartSummary = document.getElementById('cart-summary');
const emptyMsg = document.getElementById('cart-empty-msg');

let cart = JSON.parse(localStorage.getItem('wildkeep_cart')) || [];

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

langBtn.addEventListener('click', () => {
    const isArabic = langBtn.innerText === 'English';
    const lang = isArabic ? 'en' : 'ar';
    
    localStorage.setItem('selectedLang', lang);

    navLinks.forEach(link => {
        link.innerText = link.getAttribute(`data-${lang}`);
    });

    document.body.dir = isArabic ? 'ltr' : 'rtl';
    if (isArabic){
      document.body.classList.remove('rtl');
    }
    else{
      document.body.classList.add('rtl');
    }
    langBtn.innerText = isArabic ? 'العربية' : 'English';

    window.dispatchEvent(new CustomEvent('languageChange', { 
        detail: { lang: lang } 
    }));
});

if (cartIcon) {
    cartIcon.onclick = () => cartSidebar.style.right = '0';
}
if (closeCart) {
    closeCart.onclick = () => cartSidebar.style.right = '-100%';
}

function updateCartUI() {
    if (!cartItemsList) return;
    
    cartItemsList.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        emptyMsg.style.display = 'block';
        cartSummary.style.display = 'none';
    } else {
        emptyMsg.style.display = 'none';
        cartSummary.style.display = 'block';

        cart.forEach((item, index) => {
            total += item.price;
            const div = document.createElement('div');
            div.style.cssText = "display: flex; align-items: center; gap: 15px; margin-bottom: 15px; background: rgba(0,0,0,0.05); padding: 10px; border-radius: 8px; color: inherit;";
            div.innerHTML = `
                <img src="${item.image}" style="width: 50px; height: 50px; border-radius: 5px; object-fit: cover;">
                <div style="flex-grow: 1;">
                    <h4 style="margin: 0; font-size: 0.9rem;">${item.name}</h4>
                    <span style="color: #3d6b41; font-weight: bold;">$${item.price}</span>
                </div>
                <button onclick="removeItem(${index})" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 1.2rem;">&times;</button>
            `;
            cartItemsList.appendChild(div);
        });
    }

    cartCount.innerText = cart.length;
    totalPriceElement.innerText = total.toFixed(2);
}

function saveAndUpdate() {
    localStorage.setItem('wildkeep_cart', JSON.stringify(cart));
    updateCartUI();
}

window.removeItem = (index) => {
    cart.splice(index, 1);
    saveAndUpdate();
};

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-view')) {
        const card = e.target.closest('.animal-card');
        const product = {
            id: Date.now(),
            name: card.querySelector('h3').innerText,
            price: parseFloat(card.querySelector('.card-price').innerText.replace('$', '')),
            image: card.querySelector('img').src
        };
        
        cart.push(product);
        saveAndUpdate();
    }
});

updateCartUI();
