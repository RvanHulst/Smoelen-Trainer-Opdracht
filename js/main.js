    
const persoon = [
    {name: 'Persoon1', img: "fotopersoon1"},
    {name: 'Persoon2', img: "fotopersoon2"},
    {name: 'Persoon3', img: "fotopersoon3"},
    {name: 'Persoon4', img: "fotopersoon4"}
]

var naamCompare;
var fotoCompare;

const naamPersoon = ['Persoon1', 'Persoon2', 'Persoon3', 'Persoon4'];
const fotoPersoon = ['fotopersoon1', 'fotopersoon2', 'fotopersoon3', 'fotopersoon4'];

window.onload = function() {
    var aantalMensen = document.getElementsByClassName('aantalMensen'); // haal radio buttons op bij class.

    for (let i = 0; i < aantalMensen.length; i++) {
        console.log(aantalMensen)
        if (aantalMensen[i].checked == true) {
            console.log("het werkt")
        }
    }
}

startKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "block";
    
    gridItems()
}

function gridItems() {
   
    naamPersoon.sort(() => Math.random() - 0.5);
    fotoPersoon.sort(() => Math.random() - 0.5);

    for (let index = 0; index < naamPersoon.length; index++ ) {
       
        var naam = document.createElement("div");
        var foto = document.createElement("div");
    
        gridContainer.appendChild(naam);
        gridContainer.appendChild(foto);
    

        naam.innerHTML = naamPersoon[index];
        foto.innerHTML = fotoPersoon[index];
 
        naam.id = naamPersoon[index];
        foto.id = fotoPersoon[index];

        naam.classList.add("gridItem")
        foto.classList.add("gridItem")

        //run functie "itemOnclick"
        //geef parameter [index] mee (Bijv op for loop 1 geeft hij "0" mee) 
        itemOnclick(naamPersoon[index], fotoPersoon[index]);
    }
}

function itemOnclick(naamNummer, fotoNummer){
    var naam = document.getElementById(naamNummer);
    var foto = document.getElementById(fotoNummer);

    naam.onclick = function () { checkClick(this.id); }
    foto.onclick = function () {
        //fotoCompare = persoon.findIndex(findFoto => findFoto.img === foto.innerHTML);
        //console.log(fotoCompare)
        //compare();
        checkClick(event);

    }
}

var lastClick


function checkClick(parameter){
    console.log('The this: ', parameter);
    //console.log(event.target.id)  

    //if statement die controleerd of last click niet leeg is EN of last click als die gelijk is aan de nieuwe event data atributte.
    
    
    //zo ja match.
   
   
    //zo nee maak leeg.
    
    // if in een if statment met de laatste een else
    
    
    //  element.getAttribute('data-name');

}









// #3 Als gebruiker kan ik in de trainer een willekeurige volgorde één naam en één foto aanklikken. 
// Als ze bij dezelfde persoon horen dan verdwijnen beide


//functie maken de checked als ze bij elkaar horen
// geeft een true als ze bij elkaar horen en geeft een false als ze  niet bij elkaar horen.



// maak een if functie aan die Correct geeft als ze bij elkaar horen, 
// maak een else functioe aan als die incorrect is als ze niet bij elkaar horen.


function compare(){
    if (naamCompare == fotoCompare) {
        

    }
    //Haal data op die je kan gebruiken met de "persoon" array


// if array doorheen lopen en dan weer door heen lopen en dan vergelijken met de zelfde getalof naam
}
