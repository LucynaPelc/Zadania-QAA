//Zadanie:  1
const categories = document.querySelectorAll('#categories .item');
console.log("Number of categories: " + categories.length);

// Zadanie: 2
categories.forEach(category =>{
    const categoryName = category.querySelector('h2').textContent;
    console.log("Category: " + categoryName);
    const categories = category.querySelectorAll ('li');
    console.log("Elements: " + categories.length );
})



