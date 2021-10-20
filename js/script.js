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
  let arrayBombe = generaBombeFor(totalCell, 16)
  gridCreate(totalCell);
  console.log("stampa arrey", arrayBombe)
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
   /*let arrayBomb = [];
  for (x = 1; x < 16; x++){
    let nuovaBomba = generaNumeriRandom()
    
    if(difficolta.value === "1"){
        nuovaBomba = generaNumeriRandom(1, 100)
        console.log("Numeri bombe", nuovaBomba)
        arrayBomb.push(nuovaBomba)
    }
   console.log(arrayBomb)
    if(difficolta.value === "2"){
        nuovaBomba = generaNumeriRandom(1, 81)
        console.log("Numeri bombe", nuovaBomba)
    }
    if(difficolta.value === "3"){
        nuovaBomba = generaNumeriRandom(1, 49)
        console.log("Numeri bombe", nuovaBomba)
    }
  }*/
}
     
function backgroundCella(){
  const nCella = parseInt(this.textContent)
  console.log(nCella)
  if(arrayBombe.includes(nCella)){
    this.classList.add("background-lose")
    console.log(this)
    alert("Hai perso")
    location.reload()
  }
  this.classList.toggle("background-cella");
}


 function generaBombeFor(numCels, numBombe){
     arrayBombe = [];

    for(let x = 0; x < numBombe; x++){
      const nuovaBomba = generaNumeriRandom(1, numCels);
      console.log("Numero random tra 1 e max Random", nuovaBomba)
      let numeroEsiste = arrayBombe.includes(nuovaBomba);
      if(!numeroEsiste){
        arrayBombe.push(nuovaBomba);
      }else{
        x--;
      }
    }
    return arrayBombe;
  }
  
  
  //Genera i numeri random da 1 a 16
function generaNumeriRandom(minNumber = 1, maxNumber = 16) {
  const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return numRandom;
}
console.log(generaNumeriRandom(1, 16))