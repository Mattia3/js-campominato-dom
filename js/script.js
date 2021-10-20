//1 - Recuperiamo le classi della difficoltà e il button e il container grid
//2 - al click sul bottone recuperiamo il valore della select
  //2.1 - al click (eventlistener)
    //2.2 - In base al livello scelto, andiamo a generare e stampare in html la nostra griglia
      //2.3 - questa dovrà tenere conto della scelta dell'utente per stampare il numero corretto di celle.
        
//3 - Stampiamo la griglia in base al livello scelto dll'utente

const difficolta = document.getElementById("difficolta");
const btnPlay = document.getElementById("btn-play");
const contGrid = document.getElementById("container-grid");

btnPlay.addEventListener("click", function(){
  const value = difficolta.value;
  const totalCell = numeroCelle(value);
  gridCreate(totalCell);
})

function numeroCelle(value){
  let  celleDif;
switch (parseInt(value)){
  case 1:
    celleDif = 100;
    break;

  case 2:
    celleDif = 81;
    break;

  case 3:
    celleDif = 49;
    break;
}

return celleDif;
}

function gridCreate(cellsNumber){
  contGrid.innerHTML = "";

  const perRowCells = Math.sqrt(cellsNumber);
  const cellSize = 100 / perRowCells;
  //Creo un ciclo dove vado a determinare le celle in base alla difficoltà
  for(let i = 0; i < cellsNumber; i++){
   
    const cella = document.createElement("div")
    cella.classList.add("celle")
    if(difficolta.value === "1" ){
      cella.style.width = cellSize + "%"
      cella.style.height = cellSize + "%"
    }if(difficolta.value === "2"){
      cella.style.width = cellSize + "%"
      cella.style.height = cellSize + "%"
    }if(difficolta.value === "3"){
      cella.style.width = cellSize + "%"
      cella.style.height = cellSize + "%"
    }
    cella.innerHTML = [i +1];
    
    contGrid.append(cella);

    cella.addEventListener("click", backgroundCella);
  } 

  //creo un ciclo dove vado a specificare i numeri in base alla difficoltà
  
  let arrayBomb = [];
  for (x = 0; x < 16; x++){
    let nuovaBomba = generaNumeriRandom()
    if(difficolta.value === "1"){
        nuovaBomba = generaNumeriRandom(1, 100)
        arrayBomb.push(nuovaBomba)
        console.log("Numeri bombe", nuovaBomba)
    }
    if(difficolta.value === "2"){
        nuovaBomba = generaNumeriRandom(1, 81)
        console.log("Numeri bombe", nuovaBomba)
    }
    if(difficolta.value === "3"){
        nuovaBomba = generaNumeriRandom(1, 49)
        console.log("Numeri bombe", nuovaBomba)
    }
  }
}
      

function backgroundCella(){
  this.classList.toggle("background-cella");
}

function backgroundLose(){
  this.classList.toggle("background-lose")
}



//1- Generare 16 numeri casuali(bombe) Fatto
  //1_2 - Tenedo conto delle varie difficoltà(1, 2, 3)
  //1_2 - I numeri non devono essere replicati
//2 - Al click: se il numero è presente nella lista dei numeri generati
  //2_2 - abbiamo calpestato una bomba
    //2_3 - la cella si colora di rosso e la partita termina
     //2_4 - altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.


  //Genera i numeri random da 1 a 16
function generaNumeriRandom(minNumber, maxNumber) {
  const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return numRandom;
}
 