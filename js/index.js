document.addEventListener("DOMContentLoaded", () => {

    // ============================================================
    // أنيميشن الأزرار عند الضغط
    // ============================================================
    document.querySelectorAll('button, .btn-accent, .btn-glass').forEach(btn => {
        btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
        btn.addEventListener('mouseup', () => btn.style.transform = '');
        btn.addEventListener('mouseleave', () => btn.style.transform = '');
    });

    // ============================================================
    // أنيميشن ظهور العناصر عند السكرول (Scroll Reveal)
    // ============================================================
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

    // ============================================================
    // أنيميشن عداد الأرقام في Stats Bar
    // ============================================================
    const counters = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-bar');

    const animateCounter = (counter) => {
        const targetText = counter.innerText;
        const targetNumber = parseFloat(targetText.replace(/[^0-9.]/g, ''));
        if (isNaN(targetNumber)) return;

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

    
    // Parallax للورقة في الخلفية عند السكرول
    
    window.addEventListener('scroll', () => {
        const leaf = document.querySelector('.hero-bg-leaf');
        if (leaf) {
            const value = window.scrollY;
            leaf.style.transform = `translateY(${value * 0.2}px) rotate(${value * 0.02}deg)`;
        }
    });

    
    //تأثير 3D على الكروت عند تحريك الماوس
    
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

});

