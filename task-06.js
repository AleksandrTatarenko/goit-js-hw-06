const passEl = document.getElementById('validation-input');
console.log(passEl);
const lengthPassEl = Number(passEl.dataset.length);
console.log(lengthPassEl);
passEl.addEventListener('focus', onFocusInput);
passEl.addEventListener('blur', onBlurInput);
function onFocusInput(event) {
}
function onBlurInput(event) {
   if(event.currentTarget.value.length === lengthPassEl){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}