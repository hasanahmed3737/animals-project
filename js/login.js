
        const toggleBtn = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        const eyeOpen = document.getElementById('eye-open');
        const eyeClosed = document.getElementById('eye-closed');

        toggleBtn.addEventListener('click', function () {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            eyeOpen.classList.toggle('hidden');
            eyeClosed.classList.toggle('hidden');
        });
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            window.location.href = 'animals.html';
        });