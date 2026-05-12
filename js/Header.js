document.addEventListener('DOMContentLoaded', () => {

    
    const themeBtn = document.getElementById('theme-btn');

    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            document.body.removeAttribute('data-theme');
            if (themeBtn) themeBtn.innerText = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.removeAttribute('data-theme');
            if (themeBtn) themeBtn.innerText = '🌙';
        }
        localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    }

    const savedTheme = localStorage.getItem('darkMode');
    applyTheme(savedTheme === 'true');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-mode');
            applyTheme(!isDark);
        });
    }

  
    const langBtn = document.getElementById('lang-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    function applyLanguage(lang) {
        
        navLinks.forEach(link => {
            const text = link.getAttribute(`data-${lang}`);
            if (text) link.innerText = text;
        });

        document.querySelectorAll('[data-ar]').forEach(el => {
            // متغيّرش الأزرار نفسها تاني مرة
            if (el.id === 'lang-btn' || el.id === 'theme-btn') return;
            const text = el.getAttribute(`data-${lang}`);
            if (text) el.innerText = text;
        });

        // اتجاه الصفحة
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        if (lang === 'ar') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }

        // نص زر اللغة
        if (langBtn) langBtn.innerText = lang === 'ar' ? 'English' : 'العربية';

        // حفظ اللغة
        localStorage.setItem('selectedLang', lang);

        // إرسال event للفوتر
        window.dispatchEvent(new CustomEvent('languageChange', {
            detail: { lang }
        }));
    }

    // تطبيق اللغة المحفوظة عند تحميل الصفحة
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    applyLanguage(savedLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('selectedLang') || 'en';
            applyLanguage(current === 'en' ? 'ar' : 'en');
        });
    }

   
    const cartIcon = document.getElementById('cart-icon-wrapper');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const cartSummary = document.getElementById('cart-summary');
    const emptyMsg = document.getElementById('cart-empty-msg');

    let cart = JSON.parse(localStorage.getItem('wildkeep_cart')) || [];

    if (cartIcon) cartIcon.onclick = () => cartSidebar.style.right = '0';
    if (closeCart) closeCart.onclick = () => cartSidebar.style.right = '-100%';

    function updateCartUI() {
        if (!cartItemsList) return;
        cartItemsList.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            if (emptyMsg) emptyMsg.style.display = 'block';
            if (cartSummary) cartSummary.style.display = 'none';
        } else {
            if (emptyMsg) emptyMsg.style.display = 'none';
            if (cartSummary) cartSummary.style.display = 'block';

            cart.forEach((item, index) => {
                total += item.price;
                const div = document.createElement('div');
                div.style.cssText = "display:flex;align-items:center;gap:15px;margin-bottom:15px;background:rgba(0,0,0,0.05);padding:10px;border-radius:8px;";
                div.innerHTML = `
                    <img src="${item.image}" style="width:50px;height:50px;border-radius:5px;object-fit:cover;">
                    <div style="flex-grow:1;">
                        <h4 style="margin:0;font-size:0.9rem;">${item.name}</h4>
                        <span style="color:#3d6b41;font-weight:bold;">$${item.price}</span>
                    </div>
                    <button onclick="removeItem(${index})" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:1.2rem;">&times;</button>
                `;
                cartItemsList.appendChild(div);
            });
        }

        if (cartCount) cartCount.innerText = cart.length;
        if (totalPriceElement) totalPriceElement.innerText = total.toFixed(2);
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
                image: card.querySelector('img') ? card.querySelector('img').src : ''
            };
            cart.push(product);
            saveAndUpdate();
        }
    });

    updateCartUI();
});
