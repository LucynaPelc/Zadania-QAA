const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const lists = document.querySelectorAll('#ingredients');

const ingredientItems = ingredients.map(ingredient => {
    const li = document.createElement('li');  // Tworzymy element <li>
    li.textContent = ingredient;  // Dodajemy tekst składnika
    li.classList.add('item');  // Dodajemy klasę 'item'
    return li;
  });
  

  lists.append(...ingredients);
  