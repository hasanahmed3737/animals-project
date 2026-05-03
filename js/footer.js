function applyLanguage(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.innerText = text;
    });

    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

window.onload = function() {
    const savedLang = localStorage.getItem('selectedLang');
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = savedLang || (userLang.startsWith('ar') ? 'ar' : 'en');
    applyLanguage(initialLang);

    setInterval(() => {
        const currentLang = localStorage.getItem('selectedLang');
        if (currentLang && document.body.getAttribute('dir') !== (currentLang === 'ar' ? 'rtl' : 'ltr')) {
            applyLanguage(currentLang);
        }
    }, 1000);
};

window.addEventListener('languageChange', function(e) {
    if (e.detail && e.detail.lang) {
        applyLanguage(e.detail.lang);
    }
});

window.addEventListener('storage', (e) => {
    if (e.key === 'selectedLang') {
        applyLanguage(e.newValue);
    }
});

function navigate(destination) {
    console.log("Navigating to: " + destination);
}