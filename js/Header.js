const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const navLinks = document.querySelectorAll('.nav-link');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

langBtn.addEventListener('click', () => {
    const isArabic = langBtn.innerText === 'English';
    const lang = isArabic ? 'en' : 'ar';
    
    localStorage.setItem('selectedLang', lang);
    const allElements = document.quertSelectorAll('.nav-link,translate');
    allElements.forEach(el => {
        const text = el.getAttribute(`data–${lang}`);
        if (text) el.innerText = text;
    });

    navLinks.forEach(link => {
        link.innerText = link.getAttribute(`data-${lang}`);
    });

    document.body.dir = isArabic ? 'ltr' : 'rtl';
    langBtn.innerText = isArabic ? 'العربية' : 'English';

    window.dispatchEvent(new CustomEvent('languageChange', { 
        detail: { lang: lang } 
    }));
});
