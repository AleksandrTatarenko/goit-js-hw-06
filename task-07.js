const scrollEl = document.getElementById('font-size-control');
const spEl = document.getElementById('text');

scrollEl.addEventListener('input', () => {
    spEl.style.fontSize = scrollEl.value + "px";
})