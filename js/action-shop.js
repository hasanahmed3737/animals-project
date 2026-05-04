const searchInput = document.getElementById('search');
const animals = document.querySelectorAll('.div-shop');
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category")?.toLowerCase();

// وظيفة الحركة باستخدام البرمجة مباشرة
function playFadeAnimation(element) {
    element.animate([
        // الحالة البداية
        { opacity: 0, transform: 'translateY(20px)' }, 
        // الحالة النهائية
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 500, // نصف ثانية
        easing: 'ease-out',
        fill: 'forwards'
    });
}

function displayAnimal(animal, shouldShow) {
    if (shouldShow) {
        if (animal.style.display !== "flex") { // إذا كان مخفي وسيظهر الآن
            animal.style.display = "flex";
            playFadeAnimation(animal); // تشغيل الحركة
        }
    } else {
        animal.style.display = "none";
    }
}

// الفلترة عند التحميل (April 2026 Project)
animals.forEach(animal => {
    const cat = animal.getAttribute("data-category")?.toLowerCase();
    const matchesCategory = selectedCategory ? (cat === selectedCategory) : true;
    displayAnimal(animal, matchesCategory);
});

// البحث عند الكتابة
searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();

    animals.forEach(animal => {
        const name = animal.querySelector('p').textContent.toLowerCase();
        const cat = animal.getAttribute("data-category")?.toLowerCase();
        
        const matchesSearch = name.includes(term);
        const matchesCategory = selectedCategory ? (cat === selectedCategory) : true;

        displayAnimal(animal, matchesSearch && matchesCategory);
    });
});