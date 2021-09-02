startKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "block";
    
    gridItems()
}
var aantalMensen = document.getElementsByClassName('aantalMensen'); // haal radio buttons op bij class.

for (let i = 0; i < aantalMensen.length; i++) {
    console.log(aantalMensen)
    if (aantalMensen[i].checked == true) {
        console.log("het werkt")
    }

}

const persoon = [
    {name: 'Persoon1', img: "fotopersoon1"},
    {name: 'Persoon2', img: "fotopersoon2"},
    {name: 'Persoon3', img: "fotopersoon3"},
    {name: 'Persoon4', img: "fotopersoon4"}
]

const naamPersoon = ['Persoon1', 'Persoon2', 'Persoon3', 'Persoon4'];
const fotoPersoon = ['fotopersoon1', 'fotopersoon2', 'fotopersoon3', 'fotopersoon4'];

/*for (var b = 0; b < naamPersoon.length; b++) {
    console.log(naamPersoon[b]);
}*/


function gridItems() {
   
    for (let index = 0; index < naamPersoon.length; index++ ) {
       
        var naam = document.createElement("div");
        var foto = document.createElement("div");
    
        gridContainer.appendChild(naam);
        gridContainer.appendChild(foto);
    
        naam.innerHTML = naamPersoon[index];
        foto.innerHTML = fotoPersoon[index];
    
        naam.classList.add("gridItem")
        foto.classList.add("gridItem")
    
    }
  }