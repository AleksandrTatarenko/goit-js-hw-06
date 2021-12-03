const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach(element => {
  const ulEl = document.createElement('li');
ulEl.classList.add('item');
const textEl = document.createElement('h2');
textEl.textContent = element;
  ulEl.appendChild(textEl);
  const bodyUl = document.getElementById('ingredients');
bodyUl.append(ulEl);
})
