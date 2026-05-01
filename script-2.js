const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const navLinks = document.querySelectorAll('.nav-link');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

langBtn.addEventListener('click', () => {
    const isArabic = langBtn.innerText === 'English';
    navLinks.forEach(link => {
        link.innerText = isArabic ? link.getAttribute('data-en') : link.getAttribute('data-ar');
    });
    document.body.dir = isArabic ? 'ltr' : 'rtl';
    langBtn.innerText = isArabic ? 'العربية' : 'English';
});