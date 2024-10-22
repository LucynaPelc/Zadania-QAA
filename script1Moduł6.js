// Definicja This
// This, stosuje się, by uzyskać dostęp do obiektu bez potzeby używania nazwy zmiennej. 
// Poprzez this i operator kropki odwołujemy się do konkretnego "tego" obiektu.
// Nazwy zmiennych sa różne ale dzięki operatorowi this możemy skopiować całą metodę do kolejnych obiektów
// i w tych nowych obiektach this odwoła się do nazwy nowego obiektu, bez potrzeby wpisywania jej w tej skopiwanej metodzie.


//przykład 1
 const box = {
    colors: [],
    getColors() {
        return this.colors;
    },
    addColors (newColor) {
        this.colors.push(newColor);
    },
 }

box.addColors ("pink");
box.addColors ("blue");
console.log(box.getColors());

// Dzięki this odwołujemy sie do elementów umieszczonych w obiekcie, bez wpisywania  tej nazwy (pomaga gdy nie znamy nazwy).
// Wpisywana metoda i this w obiekcie odnosi się do obiektu, w którym została użyta. 



//przykład 2
class pies {
    constructor(rasa,wiek){
        this.rasa = rasa;
        this.wiek = wiek;
    }
  
}
console.log(pies);

//This wywołuje rasę lub wiek psa
