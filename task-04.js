const counterValue = document.getElementById('value');
const butDecr = document.querySelector('[data-action="decrement"]');
const butIncr = document.querySelector('[data-action="increment"]');

butDecr.addEventListener('click', () =>{
    --counterValue.textContent;
})

butIncr.addEventListener('click', () =>{
    ++counterValue.textContent;
})