const searchInput = document.getElementById('search');
const animals = document.querySelectorAll('.div-shop'); // استخدام الكلاس الخاص بك
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category")?.toLowerCase();

// وظيفة التحكم في الظهور مع الحركة
function displayAnimal(animal, shouldShow) {
    if (shouldShow) {
        animal.style.display = "flex";
        // إزالة الكلاس وإضافته مجدداً لإعادة تشغيل الحركة
        animal.classList.remove('animate-card');
        void animal.offsetWidth; // Force reflow لضمان إعادة تشغيل الأنميشن
        animal.classList.add('animate-card');
    } else {
        animal.style.display = "none";
        animal.classList.remove('animate-card');
    }
}

// الفلترة عند تحميل الصفحة بناءً على القسم (Category)
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