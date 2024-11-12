
//1. Analiza pliku JSON:
// Plik JSON jest plikiem tekstowym, jego struktura pozwala na łatwe umieszczenie go na serwerze.
// JSON jest reprezentacją obiektu w postaci ciągu wartości, które są ujęte w cudzysłów.

// Plik User.json zawiera dane:
// tekstowe name, eyecolor, title, author.
// liczbowe weight, age, rating.
// boolean isHappy.
// tablica cars.
// obiekt favourite


//user.json
{  
    "name": "Josh";    //klucz-name, wartość-Josh, string
    "weight": 175;     //klucz-weight, wartość-175, number
    "age": 30;         //klucz-age, wartość 30, number
    "eyecolor":"brown";   //klucz-eyecolor, wartość-brown, string
    "isHappy": true;      //klucz-isHappy, wartość-true, boolean
    "cars": ["Chevy", "Honda"];   //klucz-cars, wartość- [...] , array
    "favouriteBook":  {             //klucz-favouriteBook, wartość-{...}, object
        "title":"The Last Kingdom";  //klucz-title, wartość-The Last Kingdom, strink
        "author": "Bernard Cornwell";  //klucz-author, wartość-Bernard Cornwell, string
        "rating": 8,38;    //klucz-rating, wartość-8,38, nmber
    }
}

//2. Analiza metody JSON.parse():

const json = '{"name":"Mango","age":3,"isHappy":true}';

const username = JSON.parse(json);
console.log(username);

// Otrzymany obiekt po konwersjii ma zmienioną kolejność name (miało być na pozycji 0 a jest na pozycji 2).

// 3. Obsługa błędów:


// nieprawidłowy JSON.

 const json = '{name:"Mango",age:3,isHappy:true}';

 const username = JSON.parse(json);
 console.log(username);

  try...catch 




// Json z  błędem

 let dane
let test = '{"Dowolny json"}';

try {  
    dane = JSON.parse(test);

} catch (error) {
    console.error(error);
    dane = '{"Json, który przeszedł mimo błędu":}'
}
console.log(dane);

//treść błędu:  
//(name )SyntaxError: Expected ':' 
//(message) after property name in JSON at position 15 (line 1 column 16)at JSON.parse (<anonymous>)
