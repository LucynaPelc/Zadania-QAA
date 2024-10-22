// //Rozszerzony przykład:

// const bookShelf = {
//     authors : ["Maria Konopnicka",],
//     getAuthors (){
//         return this.authors
//     },
//     addAdutor(newAuthor){
//         this.authors.push(newAuthor);
//     },
// }
// console.log(bookShelf.getAuthors());

// bookShelf.addAdutor(`Adam Mickiewicz`);
// bookShelf.addAdutor(`Joanna Chmielewska`);
// console.log(bookShelf.getAuthors());

// //opis: Obiekt bookShelf, posiada element authors z danymi w tablicy, 
// //metoda getAuthors zwrwca nam za pomocą this i kropki, dane z tablicy authors, 
// //kolejna metoda w obiekcie to addAuthors, tu za pomocą this i kropki i 
// //push dodajemy kolejne stringi do tablicy authors.  
// //Pierwszy console.log daje nam pierwothą wartość tablicy authors a następny
// //pokazuje tablicę authors po dodaniu do niej dwóch autorów(stringów).
