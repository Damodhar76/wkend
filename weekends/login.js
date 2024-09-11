document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
    const form = document.getElementById('signin-form');

    closeButton.addEventListener('click', () => {
        popup.classList.remove('show-popup');
    });

    // Optional: Hide popup when clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show-popup');
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Basic form validation
        const email = document.getElementById('email');
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        let valid = true;

        // Email validation
        if (!email.validity.valid) {
            document.getElementById('email-error').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
        }

        // Username validation
        if (username.value.trim() === '') {
            document.getElementById('username-error').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('username-error').style.display = 'none';
        }

        // Password validation
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
        if (!passwordPattern.test(password.value)) {
            document.getElementById('password-error').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('password-error').style.display = 'none';
        }

        if (valid) {
            // Submit the form or proceed with further actions
            alert('Form submitted successfully!');
        }
    });
});
