startKnop.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "block";

}
var aantalMensen = document.getElementsByClassName('aantalMensen'); // haal radio buttons op bij class.

for (let i = 0; i < aantalMensen.length; i++) {
    const radioButtonArray = aantalMensen[i];
    console.log(radioButtonArray)
}