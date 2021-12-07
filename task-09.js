const spnEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const color = getRandomHexColor()

btnEl.addEventListener('click', () => {
    document.body.style.backgroundColor = color;
    spnEl.textContent = color;
})

console.log(color);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
