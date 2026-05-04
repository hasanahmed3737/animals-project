// ============================
// 1. تأثير الضغط على الأزرار
// ============================
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';

        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    });
});


// ============================
// 2. ظهور العناصر عند التمرير
// ============================
const revealElements = document.querySelectorAll(
    '.hero-card, .animal-card, .stats-item, .footer-col'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    el.classList.add('hidden-element');
    revealObserver.observe(el);
});


// ============================
// 3. عداد الأرقام
// ============================
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
    const target = counter.innerText;
    const number = parseFloat(target.replace(/[^0-9.]/g, ''));

    let current = 0;
    const increment = number / 60;

    const updateCounter = () => {
        current += increment;

        if (current < number) {
            counter.innerText = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

const statsSection = document.querySelector('.stats-bar');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => animateCounter(counter));
            statsObserver.disconnect();
        }
    });
});

// ✅ حل المشكلة هنا
if (statsSection) {
    statsObserver.observe(statsSection);
}


// ============================
// 4. تأثير Parallax
// ============================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const leaf = document.querySelector('.hero-bg-leaf');

    if (leaf) {
        leaf.style.transform =
            `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.05}deg)`;
    }
});


// ============================
// 5. تأثير الكروت
// ============================
const cards = document.querySelectorAll('.animal-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * 10;
        const rotateY = ((x / rect.width) - 0.5) * -10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-10px)';
    });
});


// ============================
// 6. Dark Mode + Language (بعد الإصلاح)
// ============================
const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const navLinks = document.querySelectorAll('.nav-link');

// ✅ منع الـ Errors
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeBtn.innerText =
            document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        const isArabic = langBtn.innerText === 'English';

        navLinks.forEach(link => {
            link.innerText = isArabic
                ? link.getAttribute('data-en')
                : link.getAttribute('data-ar');
        });

        document.body.dir = isArabic ? 'ltr' : 'rtl';
        langBtn.innerText = isArabic ? 'العربية' : 'English';
    });
}