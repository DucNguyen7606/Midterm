const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const phoneNumber = document.getElementById('phoneNumber');
const successMessage = document.getElementById('successMessage');

function showError(input, message) {
    const small = input.nextElementSibling;
    input.classList.add('error');
    small.textContent = message;
    small.classList.add('visible');
}

function showSuccess(input) {
    input.classList.remove('error');
    input.nextElementSibling.classList.remove('visible');
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function isValidPassword(password) {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}

function isValidPhone(phone) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (username.value.trim().length < 3) {
        showError(username, 'Username must be at least 3 characters long');
        isValid = false;
    } else {
        showSuccess(username);
    }

    if (!isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        showSuccess(email);
    }

    if (!isValidPassword(password.value.trim())) {
        showError(password, 'Password must be at least 8 characters long and contain at least one number and one special character');
        isValid = false;
    } else {
        showSuccess(password);
    }

    if (password.value.trim() !== confirmPassword.value.trim()) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        showSuccess(confirmPassword);
    }

    if (!isValidPhone(phoneNumber.value.trim())) {
        showError(phoneNumber, 'Please enter a valid phone number (e.g., XXX-XXX-XXXX)');
        isValid = false;
    } else {
        showSuccess(phoneNumber);
    }

    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
    }
});
