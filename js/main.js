    
const persoon = [
    {name: 'Persoon1', img: "fotopersoon1"},
    {name: 'Persoon2', img: "fotopersoon2"},
    {name: 'Persoon3', img: "fotopersoon3"},
    {name: 'Persoon4', img: "fotopersoon4"}
]

var naamCompare;
var fotoCompare;
var lastClick;

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

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = alert("tijd is om");
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


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
        //foto.src = "https://picsum.photos/200";
 
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

    naam.onclick = function () { checkClick(this); }
    foto.onclick = function () { checkClick(this); }
}


function checkClick(parameter){
    var lastChar = parameter.id.substr(parameter.id.length - 1);
    if (lastClick) var lastCharPrev = lastClick.id.substr(lastClick.id.length - 1);  

    if (lastClick) {
        //Kijk of de cijfers gelijk zijn van lastchar en lastchar prev
        //Kijk of het div element hetzelfde is van lastClick en parameter
        if (lastCharPrev == lastChar && lastClick != parameter) {
            console.log("Het is een match")
            parameter.style.display = "none";
            lastClick.style.display = "none";
            lastClick = "";
        
        }
        else{
            console.log('Filling lastclick because its empty: ', parameter);
            lastClick = parameter;
        }
    }
    else{
        console.log('Filling lastclick because its empty: ', parameter);
        lastClick = parameter;
    }
}

