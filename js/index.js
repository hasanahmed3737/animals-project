document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('button, .btn-accent, .btn-glass').forEach(btn => {
        btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
        btn.addEventListener('mouseup', () => btn.style.transform = '');
        btn.addEventListener('mouseleave', () => btn.style.transform = '');
    });
    const revealElements = document.querySelectorAll('.hero-card, .animal-card, .stats-item, .footer-col, .video-box');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        revealObserver.observe(el);
    });
    const counters = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-bar');

    const animateCounter = (counter) => {
        const targetText = counter.innerText;
        const targetNumber = parseFloat(targetText.replace(/[^0-9.]/g, ''));
        let current = 0;
        const duration = 2000; 
        const step = targetNumber / (duration / 16);

        const update = () => {
            current += step;
            if (current < targetNumber) {
                counter.innerText = Math.floor(current) + '+';
                requestAnimationFrame(update);
            } else {
                counter.innerText = targetText;
            }
        };
        update();
    };

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                counters.forEach(counter => animateCounter(counter));
                statsObserver.disconnect();
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }
    window.addEventListener('scroll', () => {
        const leaf = document.querySelector('.hero-bg-leaf');
        if (leaf) {
            let value = window.scrollY;
            leaf.style.transform = `translateY(${value * 0.2}px) rotate(${value * 0.02}deg)`;
        }
    });

    const cards = document.querySelectorAll('.animal-card, .hero-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * 10;
            const rotateY = ((x / rect.width) - 0.5) * -10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    const themeBtn = document.getElementById("theme-btn");
    const themes = ["light", "dark", "nature"];

    function setTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        if (themeBtn) {
            const icons = { light: "☀️", dark: "🌙", nature: "🌿" };
            themeBtn.textContent = icons[theme] || "☀️";
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            let current = localStorage.getItem("theme") || "light";
            let nextTheme = themes[(themes.indexOf(current) + 1) % themes.length];
            setTheme(nextTheme);
        });
    }
    setTheme(localStorage.getItem("theme") || "light");

    const langBtn = document.getElementById("lang-btn");
    const translations = {
        en: {
            home: "Home", shop: "Shop", categories: "Categories",
            extinct: "Extinct", endangered: "Endangered", ai: "AI Assistant",
            index: "Index", order: "Order", login: "Login"
        },
        ar: {
            home: "الرئيسية", shop: "المتجر", categories: "الأقسام",
            extinct: "منقرضة", endangered: "مهددة بالانقراض", ai: "مساعد ذكي",
            index: "الفهرس", order: "طلب", login: "تسجيل دخول"
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.body.dir = lang === "ar" ? "rtl" : "ltr";
        if (langBtn) {
            langBtn.textContent = lang === "ar" ? "English" : "العربية";
        }
        localStorage.setItem("lang", lang);
    }

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const current = localStorage.getItem("lang") || "en";
            setLanguage(current === "en" ? "ar" : "en");
        });
    }
    setLanguage(localStorage.getItem("lang") || "en");

});
