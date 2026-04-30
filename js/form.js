const langBtn = document.getElementById('langBtn');
const formContainer = document.getElementById('formContainer');

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

let currentLang = 'en';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    document.getElementById('formTitle').innerText = translations[currentLang].title;
    document.getElementById('labelName').innerText = translations[currentLang].name;
    document.getElementById('labelPhone').innerText = translations[currentLang].phone;
    document.getElementById('labelEmail').innerText = translations[currentLang].email;
    document.getElementById('labelDate').innerText = translations[currentLang].date;
    document.getElementById('labelCountry').innerText = translations[currentLang].country;
    document.getElementById('labelNotes').innerText = translations[currentLang].notes;
    document.getElementById('submitBtn').innerText = translations[currentLang].submit;
    langBtn.innerText = translations[currentLang].btn;

    document.getElementById('name').setAttribute('placeholder', translations[currentLang].pName);
    document.getElementById('phone').setAttribute('placeholder', translations[currentLang].pPhone);
    document.getElementById('email').setAttribute('placeholder', translations[currentLang].pEmail);
    document.getElementById('date').setAttribute('placeholder', translations[currentLang].pDate);
    document.getElementById('notes').setAttribute('placeholder', translations[currentLang].pNotes);

    document.getElementById('optSelect').innerText = translations[currentLang].select;
    document.getElementById('optEgypt').innerText = translations[currentLang].egypt;
    document.getElementById('optSaudi').innerText = translations[currentLang].saudi;
    document.getElementById('optUAE').innerText = translations[currentLang].uae;
    document.getElementById('optFrance').innerText = translations[currentLang].france;
    document.getElementById('optItaly').innerText = translations[currentLang].italy;
    document.getElementById('optGermany').innerText = translations[currentLang].germany;
    document.getElementById('optOther').innerText = translations[currentLang].other;

    if(currentLang === 'ar') {
        formContainer.classList.add('rtl');
    } else {
        formContainer.classList.remove('rtl');
    }
});
