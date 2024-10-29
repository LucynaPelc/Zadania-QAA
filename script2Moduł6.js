//Zastosowanie praktyczne:

const Maciej={
    userName: "Maciej",
    showName(){
        return this.userName;
    },
}
console.log(Maciej.showName);

//Obiekt Maciej, posiada elementy username z danymi w string, 
//posiada metodę showName która zwraca nam za pomoca this i kropki 
//dane z UserName.
