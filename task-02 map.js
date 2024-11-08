const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const lists = document.querySelector('#ingredients');

const ingredientItems = ingredients.map(ingredient => {
    const li = document.createElement('li');  
    li.classList.add('item');  
    return li;
  });
  

  lists.append(...ingredients);
  lists.append(...ingredientItems);
  