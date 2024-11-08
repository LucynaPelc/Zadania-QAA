const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const lists = document.querySelectorAll('#ingredients');

ingredients.forEach((ingredient,index) =>{
  const li = document.createElement ('li');
  li.classList.add ('item');
  
})
console.log(ingredients);
lists.append(...ingredients);
