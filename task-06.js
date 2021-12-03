const passEl = document.getElementById('validation-input');

passEl.addEventListener('blur', () => {
    if (passEl.value.length >= 6) {
        passEl.classList.add('valid');
        passEl.classList.remove('invalid');
    } else {
        passEl.classList.add('invalid');
        passEl.classList.remove('valid');
    }
})

passEl.addEventListener('focus', () => {
    passEl.classList.remove('valid');
    passEl.classList.remove('invalid');
})