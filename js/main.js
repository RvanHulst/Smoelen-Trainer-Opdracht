var scoreGeschiedenis = []

var naamArray = []
var fotoArray = []

var naamCompare;
var fotoCompare;
var lastClick;
var goedCount = 0;
var foutCount = 0;

var fotoPersoon = [
 {name: 'BillCosby',source: 'https://media.nu.nl/m/yqqxcxcampsm_xwd640.jpg/bill-cosby-is-een-vrij-man-vijf-vragen-over-de-beslissing-van-de-rechter.jpg', punten: 0},
 {name: 'DonaldTrump',source: 'https://images0.persgroep.net/rcs/7Lx4ekG65vqHR6cfLMui2aRjItc/diocontent/208413025/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8', punten: 0},
 {name: 'BarrackObama', source: 'https://www.europa-nu.nl/9353000/1/j4nvh0qavhjkdqd_j9vvj9idsj04xr6/vlbjj03d1wny?sizew=933&sizeh=1200&crop=778:58:1081:1390&lm=qfo8io', punten: 0},
 {name: 'JoeBiden', source: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg', punten: 0},
 {name: 'JoeExotic', source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png/266px-Joe_Exotic_%28Santa_Rose_County_Jail%29.png', punten: 0},
 {name: 'HillaryClinton', source: 'https://ichef.bbci.co.uk/news/1024/branded_news/1683A/production/_120681229_hillaryclintonatqueensbelfast005.jpg', punten: 0},
 {name: 'GeorgeBush', source: 'https://images0.persgroep.net/rcs/XzH8uDIuWNNJynh-DQvEXmjLPXQ/diocontent/31665363/_crop/0/233/3496/1975/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8', punten: 0},
 {name: 'JohnKennedy', source: 'https://www.biography.com/.image/t_share/MTgwNDM2ODA3NjQzNTcyMDc2/gettyimages-97347150.jpg', punten: 0},
 {name: 'RobertOppenheimer', source: 'https://upload.wikimedia.org/wikipedia/commons/0/03/JROppenheimer-LosAlamos.jpg', punten: 0},
 {name: 'TheodoreRoosevelt ', source: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Roosevelt_-_Pach_Bros.jpg', punten: 0},
 {name: 'HarryPotter', source: 'https://upload.wikimedia.org//wikipedia/en/d/d7/Harry_Potter_character_poster.jpg', punten: 0}
];


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
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
    smoelenTrainer.style.display = "block";
    gridItems()
    time()
}

instellingenKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "block";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";

}

geschiedenisKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
    geschiedenisPagina.style.display = "block";
    document.getElementById('matchGeschiedenis').innerHTML = "";
    for (let i = 0; i < scoreGeschiedenis.length; i++) {
        if (i <= 10) {
            var p = document.createElement("p");
            p.innerHTML = "Juiste antwoorden " + scoreGeschiedenis[i].Goed +" - "+ " Onjuiste antwoorden " + scoreGeschiedenis[i].Fout + " - " + scoreGeschiedenis[i].tijd;
            document.getElementById('matchGeschiedenis').appendChild(p)         
        }
    }
}

blindeVlekKnop.onclick = function(){
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "block";
    console.log(fotoPersoon.sort((a,b) => (a.punten < b.punten) ? 1 : ((b.punten < a.punten) ? -1 : 0)))
    for (let i = 0; i < array.length; i++) {
        //zorgen dat alleen de 3 fouten zichtbaar zijn
    
       
        // met een if statement het ophalen en zorgen dat die alleen de meeste punten qua fout laat zien.


        if ( result.punten = 1)
        var result = fotoPersoon.find( ({ name }) => name === parameter.id);
        result.punten = result.punten + 1;
        
    }
}

terugKnop1.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
}

terugKnop2.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
}

terugKnop3.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";

}

function gridItems() {
    var persoonData = getRadioBtn();
    if (!persoonData) {
        persoonData = 5;
    }

    for (let index = 0; index < persoonData; index++ ) {
        var naam = document.createElement("div");
        var fotoDiv = document.createElement("div");
        var foto = document.createElement("img");

        naam.innerHTML = fotoPersoon[index].name;
        foto.src = fotoPersoon[index].source;
 
        naam.id = fotoPersoon[index].name;
        fotoDiv.id = fotoPersoon[index].name;

        naam.classList.add("gridItem")
        fotoDiv.classList.add("gridItem")

        fotoDiv.appendChild(foto);

        naamArray.push(naam);
        fotoArray.push(fotoDiv);
    }
    naamArray.sort(() => Math.random() - 0.5);
    fotoArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < naamArray.length; i++) {
        gridContainer1.appendChild(naamArray[i]);
        gridContainer2.appendChild(fotoArray[i]);


        //run functie "itemOnclick"
        //geef parameter [index] mee (Bijv op for loop 1 geeft hij "0" mee) 
        itemOnclick(naamArray[i], fotoArray[i]);
    }
}

function matchGeschiedenis(){
    scoreGeschiedenis.unshift({Goed: goedCount , Fout: foutCount, tijd: Date(), meesteFout: ""});
    console.log(scoreGeschiedenis);

}

function time(){
    var timeleft = document.getElementById("userInput").value;
    if (!timeleft) { timeleft = 10; }

    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "tijd is om";
        setTimeout(() => {
            matchGeschiedenis()
            startPagina.style.display = "block"; //verander terug naar none
            smoelenTrainer.style.display = "none";
            gridContainer1.innerHTML = "";
            gridContainer2.innerHTML = "";
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

    naamNummer.onclick = function () { checkClick(this); }
    fotoNummer.onclick = function () { checkClick(this); }
}

function checkClick(parameter){
    if (lastClick) {
        //Kijk of de cijfers gelijk zijn van lastchar en lastchar prev
        //Kijk of het div element hetzelfde is van lastClick en parameter
        if (lastClick.id == parameter.id && lastClick != parameter) {
            console.log("Het is een match")
            parameter.style.display = "none";
            lastClick.style.display = "none";
            lastClick = "";
            goedCount = goedCount + 1;
            document.getElementById("pointsGoed").innerHTML = goedCount + "Heeft u er goed";
        }
        else{
            
            console.log('Hij is fout ', parameter.id);
            lastClick = "";
            foutCount = foutCount + 1;
            document.getElementById("pointsFout").innerHTML = foutCount  + "Heeft u er fout";
            var result = fotoPersoon.find( ({ name }) => name === parameter.id);
            result.punten = (result.punten + 1);
            console.log(fotoPersoon);

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
