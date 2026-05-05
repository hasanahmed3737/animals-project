// const myFormBtn = document.getElementById('langBtn');
// const myFormContainer = document.getElementById('formContainer');

// const translations = {
//     en: {
//         btn: "Switch to Arabic",
//         title: "Order Registration",
//         name: "Full Name",
//         phone: "Phone Number",
//         email: "Gmail Address",
//         date: "Preferred Delivery Date",
//         country: "Country",
//         notes: "Notes",
//         submit: "Confirm Order",
//         pName: "Enter your full name",
//         pPhone: "Enter phone number",
//         pEmail: "example@gmail.com",
//         pDate: "Select delivery date",
//         pNotes: "Any special requests?",
//         select: "Select your country",
//         egypt: "Egypt",
//         saudi: "Saudi Arabia",
//         uae: "UAE",
//         france: "France",
//         italy: "Italy",
//         germany: "Germany",
//         other: "Other"
//     },
//     ar: {
//         btn: "التغيير للإنجليزية",
//         title: "تسجيل الطلب",
//         name: "الاسم بالكامل",
//         phone: "رقم الموبايل",
//         email: "البريد الإلكتروني (جيميل)",
//         date: "موعد الاستلام المفضل",
//         country: "الدولة",
//         notes: "ملاحظات",
//         submit: "تأكيد الطلب",
//         pName: "اكتب اسمك بالكامل هنا",
//         pPhone: "أدخل رقم الهاتف",
//         pEmail: "بريدك الإلكتروني (جيميل)",
//         pDate: "اختر موعد الاستلام",
//         pNotes: "هل لديك أي طلبات خاصة؟",
//         select: "اختر دولتك",
//         egypt: "مصر",
//         saudi: "السعودية",
//         uae: "الإمارات",
//         france: "فرنسا",
//         italy: "إيطاليا",
//         germany: "ألمانيا",
//         other: "أخرى"
//     }
// };

// let currentLang = 'en';

// langBtn.addEventListener('click', () => {
//     const isCurrentlyRTL = document.body.classList.contains('rtl')
//     currentLang = currentLang === 'en' ? 'ar' : 'en';
    
//     document.getElementById('formTitle').innerText = translations[currentLang].title;
//     document.getElementById('labelName').innerText = translations[currentLang].name;
//     document.getElementById('labelPhone').innerText = translations[currentLang].phone;
//     document.getElementById('labelEmail').innerText = translations[currentLang].email;
//     document.getElementById('labelDate').innerText = translations[currentLang].date;
//     document.getElementById('labelCountry').innerText = translations[currentLang].country;
//     document.getElementById('labelNotes').innerText = translations[currentLang].notes;
//     document.getElementById('submitBtn').innerText = translations[currentLang].submit;
//     langBtn.innerText = translations[currentLang].btn;

//     document.getElementById('name').setAttribute('placeholder', translations[currentLang].pName);
//     document.getElementById('phone').setAttribute('placeholder', translations[currentLang].pPhone);
//     document.getElementById('email').setAttribute('placeholder', translations[currentLang].pEmail);
//     document.getElementById('date').setAttribute('placeholder', translations[currentLang].pDate);
//     document.getElementById('notes').setAttribute('placeholder', translations[currentLang].pNotes);

//     document.getElementById('optSelect').innerText = translations[currentLang].select;
//     document.getElementById('optEgypt').innerText = translations[currentLang].egypt;
//     document.getElementById('optSaudi').innerText = translations[currentLang].saudi;
//     document.getElementById('optUAE').innerText = translations[currentLang].uae;
//     document.getElementById('optFrance').innerText = translations[currentLang].france;
//     document.getElementById('optItaly').innerText = translations[currentLang].italy;
//     document.getElementById('optGermany').innerText = translations[currentLang].germany;
//     document.getElementById('optOther').innerText = translations[currentLang].other;

//     if(currentLang === 'ar') {
//         myFormContainer.classList.add('rtl');
//        document.body.dir = 'rtl'
//     } else {
//         myFormContainer.classList.remove('rtl');
//         document.body.dir = 'ltr';
//     }
// });
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
        other: "Other"
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
        other: "أخرى"
    }
};

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