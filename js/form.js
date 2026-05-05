const myFormBtn = document.getElementById('langBtn');
const myFormContainer = document.getElementById('formContainer');

const translations = {
    en: {
        btn: "Switch to Arabic",
        title: "Order Registration",
        name: "Full Name",
        phone: "Phone Number",
        email: "Gmail Address",
        date: "Preferred Delivery Date",
        country: "Country",
        notes: "Notes",
        submit: "Confirm Order",
        pName: "Enter your full name",
        pPhone: "Enter phone number",
        pEmail: "example@gmail.com",
        pDate: "Select delivery date",
        pNotes: "Any special requests?",
        select: "Select your country",
        egypt: "Egypt",
        saudi: "Saudi Arabia",
        uae: "UAE",
        france: "France",
        italy: "Italy",
        germany: "Germany",
        other: "Other",
        summaryTitle: "Review Items",
        totalLabel: "Total Amount:",
        emptyCart: "Your cart is currently empty."
    },
    ar: {
        btn: "التغيير للإنجليزية",
        title: "تسجيل الطلب",
        name: "الاسم بالكامل",
        phone: "رقم الموبايل",
        email: "البريد الإلكتروني (جيميل)",
        date: "موعد الاستلام المفضل",
        country: "الدولة",
        notes: "ملاحظات",
        submit: "تأكيد الطلب",
        pName: "اكتب اسمك بالكامل هنا",
        pPhone: "أدخل رقم الهاتف",
        pEmail: "بريدك الإلكتروني (جيميل)",
        pDate: "اختر موعد الاستلام",
        pNotes: "هل لديك أي طلبات خاصة؟",
        select: "اختر دولتك",
        egypt: "مصر",
        saudi: "السعودية",
        uae: "الإمارات",
        france: "فرنسا",
        italy: "إيطاليا",
        germany: "ألمانيا",
        other: "أخرى",
        summaryTitle: "مراجعة المنتجات",
        totalLabel: "الإجمالي الكلي:",
        emptyCart: "سلة المشتريات فارغة حالياً."
    }
};

function renderOrderSummary(lang) {
    const itemList = document.getElementById('itemList');
    const totalAmountSpan = document.getElementById('totalAmount');
    const summaryHeader = document.querySelector('.order-summary-box h3');
    const totalLabel = document.querySelector('.total-section span:first-child');
    
    let cart = JSON.parse(localStorage.getItem('wildkeep_cart')) || [];
    const t = translations[lang];

    if(summaryHeader) summaryHeader.innerText = t.summaryTitle;
    if(totalLabel) totalLabel.innerText = t.totalLabel;

    if (!itemList) return;

    if (cart.length === 0) {
        itemList.innerHTML = `<p style="text-align: center; color: #999; padding: 20px;">${t.emptyCart}</p>`;
        if(totalAmountSpan) totalAmountSpan.innerText = "0.00";
        return;
    }

    itemList.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const row = document.createElement('div');
        row.className = "summary-item";
        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
            </div>
            <span style="font-weight:bold;">$${item.price}</span>
        `;
        itemList.appendChild(row);
    });

    if(totalAmountSpan) totalAmountSpan.innerText = total.toFixed(2);
}

function applyFormLanguage(lang) {
    const t = translations[lang];
    const titleEl = document.getElementById('formTitle');
    
    if(titleEl) titleEl.innerText = t.title;
    if(document.getElementById('labelName')) document.getElementById('labelName').innerText = t.name;
    if(document.getElementById('labelPhone')) document.getElementById('labelPhone').innerText = t.phone;
    if(document.getElementById('labelEmail')) document.getElementById('labelEmail').innerText = t.email;
    if(document.getElementById('labelDate')) document.getElementById('labelDate').innerText = t.date;
    if(document.getElementById('labelCountry')) document.getElementById('labelCountry').innerText = t.country;
    if(document.getElementById('labelNotes')) document.getElementById('labelNotes').innerText = t.notes;
    if(document.getElementById('submitBtn')) document.getElementById('submitBtn').innerText = t.submit;
    if(myFormBtn) myFormBtn.innerText = t.btn;

    if(document.getElementById('name')) document.getElementById('name').setAttribute('placeholder', t.pName);
    if(document.getElementById('phone')) document.getElementById('phone').setAttribute('placeholder', t.pPhone);
    if(document.getElementById('email')) document.getElementById('email').setAttribute('placeholder', t.pEmail);
    if(document.getElementById('date')) document.getElementById('date').setAttribute('placeholder', t.pDate);
    if(document.getElementById('notes')) document.getElementById('notes').setAttribute('placeholder', t.pNotes);

    if(document.getElementById('optSelect')) document.getElementById('optSelect').innerText = t.select;
    if(document.getElementById('optEgypt')) document.getElementById('optEgypt').innerText = t.egypt;
    if(document.getElementById('optSaudi')) document.getElementById('optSaudi').innerText = t.saudi;
    if(document.getElementById('optUAE')) document.getElementById('optUAE').innerText = t.uae;
    if(document.getElementById('optFrance')) document.getElementById('optFrance').innerText = t.france;
    if(document.getElementById('optItaly')) document.getElementById('optItaly').innerText = t.italy;
    if(document.getElementById('optGermany')) document.getElementById('optGermany').innerText = t.germany;
    if(document.getElementById('optOther')) document.getElementById('optOther').innerText = t.other;

    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    if(myFormContainer) {
        if(lang === 'ar') myFormContainer.classList.add('rtl');
        else myFormContainer.classList.remove('rtl');
    }

    renderOrderSummary(lang);
}

window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    applyFormLanguage(savedLang);

    setInterval(() => {
        const currentLang = localStorage.getItem('selectedLang');
        const activeLang = document.body.dir === 'rtl' ? 'ar' : 'en';
        if (currentLang && currentLang !== activeLang) {
            applyFormLanguage(currentLang);
        }
    }, 500);
});

if(myFormBtn) {
    myFormBtn.addEventListener('click', () => {
        const newLang = document.body.dir === 'rtl' ? 'en' : 'ar';
        localStorage.setItem('selectedLang', newLang);
        applyFormLanguage(newLang);
    });
}

const orderForm = document.getElementById('orderForm');
if(orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let cart = JSON.parse(localStorage.getItem('wildkeep_cart')) || [];
        
        if (cart.length === 0) {
            const currentLang = localStorage.getItem('selectedLang') || 'en';
            alert(currentLang === 'ar' ? "السلة فارغة، يرجى إضافة منتجات أولاً!" : "Cart is empty, please add items first!");
            return;
        }

        alert(document.body.dir === 'rtl' ? "تم استلام طلبك بنجاح!" : "Order received successfully!");
        
        localStorage.removeItem('wildkeep_cart');
        window.location.href = "../index.html";
    });
}