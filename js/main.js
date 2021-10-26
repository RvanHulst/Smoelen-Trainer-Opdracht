    
const persoon = [
    {name: 'Persoon1', img: "fotopersoon1"},
    {name: 'Persoon2', img: "fotopersoon2"},
    {name: 'Persoon3', img: "fotopersoon3"},
    {name: 'Persoon4', img: "fotopersoon4"}
]

var naamArray = []
var fotoArray = []

var naamCompare;
var fotoCompare;
var lastClick;
var goedCount = 0;
var foutCount = 0;

const naamPersoon = ['Persoon1', 'Persoon2', 'Persoon3', 'Persoon4', 'Persoon5', 'Persoon6', 'Persoon7', 'Persoon8', 'Persoon9', 'Persoon10', 'Persoon11'];
const fotoPersoon = ['fotopersoon1', 'fotopersoon2', 'fotopersoon3', 'fotopersoon4', 'fotopersoon5', 'fotopersoon6', 'fotopersoon7', 'fotopersoon8', 'fotopersoon9', 'fotopersoon10', 'fotopersoon11'];

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
    instellingenPagina.style.display = "none";
    smoelenTrainer.style.display = "block";
    gridItems()
    time()
}

instellingenKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "block";
}

terugKnop.onclick = function () {
startPagina.style.display = "block"; //verander terug naar none
smoelenTrainer.style.display = "none";
instellingenPagina.style.display = "none";
}

function gridItems() {
    var persoonData = getRadioBtn();
    if (!persoonData) {
        persoonData = 5;
    }

    for (let index = 0; index < persoonData; index++ ) {
        var naam = document.createElement("div");
        var foto = document.createElement("div");
    
        naam.innerHTML = naamPersoon[index];
        foto.innerHTML = fotoPersoon[index];
 
        naam.id = naamPersoon[index];
        foto.id = fotoPersoon[index];

        naam.classList.add("gridItem")
        foto.classList.add("gridItem")

        naamArray.push(naam);
        fotoArray.push(foto);
    }
    naamArray.sort(() => Math.random() - 0.5);
    fotoArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < naamArray.length; i++) {
        gridContainer.appendChild(naamArray[i]);
        gridContainer.appendChild(fotoArray[i]);

        //run functie "itemOnclick"
        //geef parameter [index] mee (Bijv op for loop 1 geeft hij "0" mee) 
        itemOnclick(naamArray[i].id, fotoArray[i].id);
    }
}

function time(){
    var timeleft = document.getElementById("userInput").value;
    if (!timeleft) { timeleft = 10; }

    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "tijd is om";
        setTimeout(() => {
            startPagina.style.display = "block"; //verander terug naar none
            smoelenTrainer.style.display = "none";
            gridContainer.innerHTML = "";
            document.getElementById("pointsGoed").innerHTML = "";
            document.getElementById("pointsFout").innerHTML = "";
            naamArray = [];
            fotoArray = [];
            foutCount = 0;
            goedCount = 0;
        }, 3000);
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
        timeleft -= 1;
    }, 1000);
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
            goedCount = goedCount + 1;
            document.getElementById("pointsGoed").innerHTML = goedCount + "Heeft u er goed";
        }
        else{
            console.log('Hij is fout ', parameter);
            lastClick = "";
            foutCount = foutCount + 1;
            document.getElementById("pointsFout").innerHTML = foutCount  + "Heeft u er fout";
        }
    }
    else{
        console.log('Filling lastclick because its empty: ', parameter);
        lastClick = parameter;
    }
}

function getRadioBtn(){
    var radios = document.getElementsByName('spelerAantal');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

