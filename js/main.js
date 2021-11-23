var scoreHistory = []

var names = []
var photos = []
var blindeVlekPoints = []
var backButtons = Array.from(document.getElementsByClassName("backButton"));

var lastClick;
var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;

var persons = [
 {name: 'BillCosby',source: 'https://media.nu.nl/m/yqqxcxcampsm_xwd640.jpg/bill-cosby-is-een-vrij-man-vijf-vragen-over-de-beslissing-van-de-rechter.jpg', points: 0},
 {name: 'DonaldTrump',source: 'https://images0.persgroep.net/rcs/7Lx4ekG65vqHR6cfLMui2aRjItc/diocontent/208413025/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8', points: 0},
 {name: 'BarrackObama', source: 'https://www.europa-nu.nl/9353000/1/j4nvh0qavhjkdqd_j9vvj9idsj04xr6/vlbjj03d1wny?sizew=933&sizeh=1200&crop=778:58:1081:1390&lm=qfo8io', points: 0},
 {name: 'JoeBiden', source: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg', points: 0},
 {name: 'JoeExotic', source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png/266px-Joe_Exotic_%28Santa_Rose_County_Jail%29.png', points: 0},
 {name: 'HillaryClinton', source: 'https://ichef.bbci.co.uk/news/1024/branded_news/1683A/production/_120681229_hillaryclintonatqueensbelfast005.jpg', points: 0},
 {name: 'GeorgeBush', source: 'https://images0.persgroep.net/rcs/XzH8uDIuWNNJynh-DQvEXmjLPXQ/diocontent/31665363/_crop/0/233/3496/1975/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8', points: 0},
 {name: 'JohnKennedy', source: 'https://www.biography.com/.image/t_share/MTgwNDM2ODA3NjQzNTcyMDc2/gettyimages-97347150.jpg', points: 0},
 {name: 'RobertOppenheimer', source: 'https://upload.wikimedia.org/wikipedia/commons/0/03/JROppenheimer-LosAlamos.jpg', points: 0},
 {name: 'TheodoreRoosevelt ', source: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Roosevelt_-_Pach_Bros.jpg', points: 0},
 {name: 'HarryPotter', source: 'https://upload.wikimedia.org//wikipedia/en/d/d7/Harry_Potter_character_poster.jpg', points: 0}
];

function displayAllHidden(){
    //give everything hidden
    instellingenPagina.classList.add("hidden");
    smoelenTrainer.classList.add("hidden");
    startPagina.classList.add("hidden");
    geschiedenisPagina.classList.add("hidden");
    blindeVlekPagina.classList.add("hidden");

    instellingenPagina.classList.remove("shown");
    smoelenTrainer.classList.remove("shown");
    startPagina.classList.remove("shown");
    geschiedenisPagina.classList.remove("shown");
    blindeVlekPagina.classList.remove("shown");
}

backButtons.forEach(backButton => backButton.onclick = () => switchDisplay());

startButton.onclick = () => {
    displayAllHidden() 
    smoelenTrainer.classList.remove("hidden");
    smoelenTrainer.classList.add("shown");
    gridItems()
    setGameTimeCounter()
}

settingsButton.onclick = () => {
    displayAllHidden() 
    instellingenPagina.classList.remove("hidden");
    instellingenPagina.classList.add("shown");
}

historyButton.onclick = () => {
    displayAllHidden() 
    geschiedenisPagina.classList.remove("hidden");
    geschiedenisPagina.classList.add("shown");

    document.getElementById('matchHistory').innerHTML = "";
    for (let i = 0; i < scoreHistory.length; i++) {
        if (i <= 10) {
            var p = document.createElement("p");
            p.innerHTML = "Juiste antwoorden " + scoreHistory[i].Goed +" - "+ " Onjuiste antwoorden " + scoreHistory[i].Fout + " - " + scoreHistory[i].tijd;
            document.getElementById('matchHistory').appendChild(p)         
        }
    }
}

blindeVlekButton.onclick = () => {
    displayAllHidden() 
    blindeVlekPagina.classList.remove("hidden");
    blindeVlekPagina.classList.add("shown");

   document.getElementById("blindeVlekGeschiedenis").innerHTML = "";
    for (let i = 0; i < blindeVlekPoints.length; i++) {
        blindeVlekPoints[i].sort((a,b) => (a.points < b.points) ? 1 : ((b.points < a.points) ? -1 : 0));
        if (blindeVlekPoints != 0 && i <= 5){
            for (let index = 0; index < 3; index++) {
                var p = document.createElement("p");
                p.innerHTML = "Meeste fouten antwoorden " + blindeVlekPoints[i][index].name + " Aantal fouten points " + blindeVlekPoints[i][index].points;
                document.getElementById('blindeVlekGeschiedenis').appendChild(p)      
            }     
        }        
    }
}

function switchDisplay(){
    displayAllHidden() 
    startPagina.classList.remove("hidden");
    startPagina.classList.add("shown");
}

function gridItems() {
    var persoonData = getPlayerCount();


    for (let index = 0; index < persoonData; index++ ) {
        var naam = document.createElement("div");
        var fotoDiv = document.createElement("div");
        var foto = document.createElement("img");

        naam.innerHTML = persons[index].name;
        foto.src = persons[index].source;
 
        naam.id = persons[index].name;
        fotoDiv.id = persons[index].name;

        naam.classList.add("gridItem")
        fotoDiv.classList.add("gridItem")

        fotoDiv.appendChild(foto);

        names.push(naam);
        photos.push(fotoDiv);
    }
    names.sort(() => Math.random() - 0.5);
    photos.sort(() => Math.random() - 0.5);

    for (let i = 0; i < names.length; i++) {
        gridContainer1.appendChild(names[i]);
        gridContainer2.appendChild(photos[i]);

        names[i].onclick = () => checkClick(names[i])
        photos[i].onclick = () => checkClick(photos[i]) 
    }
}

function matchHistory(){
    scoreHistory.unshift({Goed: correctAnswersCounter , Fout: incorrectAnswersCounter, tijd: Date()});
}

function setGameTimeCounter(){
    var timeleft = document.getElementById("userInput").value;
    if (!timeleft) { timeleft = 10; }

    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "tijd is om";
        setTimeout(() => {
            matchHistory()
            displayAllHidden() 

            startPagina.classList.remove("hidden");
            startPagina.classList.add("shown");

            gridContainer1.innerHTML = "";
            gridContainer2.innerHTML = "";
            document.getElementById("pointsGoed").innerHTML = "";
            document.getElementById("pointsFout").innerHTML = "";
            names = [];
            photos = [];
            incorrectAnswersCounter = 0;
            correctAnswersCounter = 0;

            var tempArray = [];

            for (let i = 0; i <  getPlayerCount(); i++) {
                tempArray.push({name: persons[i].name, points: persons[i].points});      
            }
           blindeVlekPoints.unshift(tempArray);

            for (let index = 0; index < persons.length; index++) {
                persons[index].points = 0;
                
            }
            

// maak een lege array aan  boven de for loop en tijdens de eerste for loop vult die blindebelekkepunten.
// vul die met de points 
// daarna gaat die met een andere for loop de  array fotopersoon leeg maken maar de lege array boven aan staat dan nog vol met de points.


        }, 3000);
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
        timeleft -= 1;
    }, 1000);
}

function checkClick(parameter){
    if (lastClick) {
        //Kijk of de cijfers gelijk zijn van lastchar en lastchar prev
        //Kijk of het div element hetzelfde is van lastClick en parameter
        if (lastClick.id == parameter.id && lastClick != parameter) {
            parameter.classList.add("hidden");
            lastClick.classList.add("hidden");
            lastClick = "";
            correctAnswersCounter = correctAnswersCounter + 1;
            document.getElementById("pointsGoed").innerHTML = correctAnswersCounter + "Heeft u er goed";
        }
        else{
            lastClick = "";
            incorrectAnswersCounter = incorrectAnswersCounter + 1;
            document.getElementById("pointsFout").innerHTML = incorrectAnswersCounter  + "Heeft u er fout";
            var result = persons.find( ( name ) => name === parameter.id);
            result.points = (result.points + 1);
        }
    }
    else{
        console.log('Filling lastclick because its empty: ', parameter);
        lastClick = parameter;
    }
}

function getPlayerCount(){
    var radios = document.getElementsByName('spelerAantal');
    var playerCount = 5;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            playerCount = radios[i].value;
        }
    }

    // radios.forEach(radio => radio.checked ? playerCount = radio.value : null)

    // radios.forEach(radio => {
    //     if (radio.checked) {
    //         playerCount = radio.value;
    //     }
    // })

    // return 5 wordt uitgevoerd als die tijdens de for loop van radios geen input vind.
    return playerCount;
}
