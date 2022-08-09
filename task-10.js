function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.getElementById('input'),
  mainContainer: document.getElementById('boxes'),
  createBtn: document.getElementById('create'),
  destroyBtn: document.getElementById('destroy'),
};

const array = [];
let amount = 0;

function createBoxes(amount) {
  for (let i = 0; i <= amount-1; i += 1) {
    array.push(`<div style="background-color:${getRandomHexColor()}; width:${30 + i * 10}px; height:${30 + i * 10}px"></div>`);
  };
  console.log(array.join(''));
  refs.mainContainer.insertAdjacentHTML('beforeend', array.join(''));
};

refs.input.addEventListener('input', inputAmount);

function inputAmount(e) { 
  e.preventDefault();
  amount=e.currentTarget.value
  console.log(amount);
};

refs.createBtn.addEventListener('click', onCreateButton);

function onCreateButton(e) {
  createBoxes(amount);
  array.length = 0;
}
refs.destroyBtn.addEventListener('click', onDestroyButton);

function onDestroyButton(e) { 
  refs.mainContainer.innerHTML = "";
  array.length = 0;
}