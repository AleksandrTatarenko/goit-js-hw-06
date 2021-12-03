const spnEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
    spnEl.textContent = getRandomHexColor();
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
