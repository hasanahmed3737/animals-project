function applyLanguage(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(el => {
        const text = el.getAttribute(data-${lang});
        if (text) {
            el.innerText = text;
        }
    });

    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

window.onload = function() {
    const userLang = navigator.language || navigator.userLanguage;
    const initialLang = userLang.startsWith('ar') ? 'ar' : 'en';
    applyLanguage(initialLang);
};

window.addEventListener('languageChange', function(e) {
    if (e.detail && e.detail.lang) {
        applyLanguage(e.detail.lang);
    }
});

function navigate(destination) {
    console.log("Navigating to: " + destination);
}