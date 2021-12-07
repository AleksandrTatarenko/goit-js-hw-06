const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const bodyUl = document.getElementById('ingredients');

const newArray = [];

ingredients.forEach(element => {
  const ulEl = document.createElement('li');
  ulEl.classList.add('item');
  ulEl.textContent = element;
  newArray.push(ulEl);
})
  bodyUl.append(...newArray);
 

  