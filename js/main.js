    
const persoon = [
    {name: 'Persoon1', img: "fotopersoon1"},
    {name: 'Persoon2', img: "fotopersoon2"},
    {name: 'Persoon3', img: "fotopersoon3"},
    {name: 'Persoon4', img: "fotopersoon4"}
]
    
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
 
        naam.id = "persoonNaam" + [index];
        foto.id = "persoonFoto" + [index];

        naam.classList.add("gridItem")
        foto.classList.add("gridItem")

        //run functie "itemOnclick"
        //geef parameter [index] mee (Bijv op for loop 1 geeft hij "0" mee) 
        itemOnclick([index]);
    }
    console.log(fotoPersoon)
}

function itemOnclick(nummer){
    var naam = document.getElementById('persoonNaam' + nummer);
    var foto = document.getElementById('persoonFoto' + nummer);

    naam.onclick = function () {
        console.log(naam);
    }
    foto.onclick = function () {
        console.log(foto);
    }
}


// maak een onclick functie voor aanklikken van de namen en fotos
// functie, wanneer je klikt run console log

// zorgen dat de juiste namen console loggen op de juiste possitie (ook voor de foto's)
