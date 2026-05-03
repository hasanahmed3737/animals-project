const searchInput = document.getElementById('search');
        const animals = document.querySelectorAll('section div');
        const params = new URLSearchParams(window.location.search);
        const selectedCategory = params.get("category");
        if (selectedCategory) {
            animals.forEach(animal => {
                const cat = animal.getAttribute("data-category");
                if (cat !== selectedCategory) {
                    animal.style.display = "none";
                } else {
                    animal.style.display = "flex";
                }
            });
        }
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();

            animals.forEach(animal => {
                const name = animal.querySelector('p').textContent.toLowerCase();
                const cat = animal.getAttribute("data-category");
                const matchesSearch = name.includes(term);
                const matchesCategory = selectedCategory ? (cat === selectedCategory) : true;

                if (matchesSearch && matchesCategory) {
                    animal.style.display = 'flex';
                } else {
                    animal.style.display = 'none';
                }
            });
        });