startKnop.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "block";

    var radiotButtonArray = document.getElementsByClassName('aantalMensen'); // haal radio buttons op bij class
    console.log(radiotButtonArray[0].value);
}