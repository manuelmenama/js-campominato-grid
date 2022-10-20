console.log('Loaded "Campo Minato"');

//1 creare html funzionale 
//2 generare dinamicamente le caselle
//3 quando clicchiamo sulla casella questa si colora + messaggio in console con numero casella
//4 creare bottone di start
//5 creare un una select con tre livelli di difficoltà (1 - 100(10), 2 - 81(9), 3 - 49(7))

const objectContainer = document.querySelector('.container');
const playButton = document.querySelector('button');
const gameDifficulty = playgroundChoose();

const playgroundDimension = Math.pow(playgroundChoose(), 2);

//dopo aver dichiarato il container voglio creare una funzione che generi delle caselle

playButton.addEventListener('click', playFunction);

function playFunction() {
  objectContainer.innerHTML = "";
  for (let i = 0; i < playgroundDimension; i++) {
    generateNumeratedCard(i, objectContainer);
  };
}


//creo una function che scriva numeri progressivi all'interno della card

// function orderedNumerator(iterationCounter, createdObject) {
//   createdObject.innerText = iterationCounter + 1;
// }

//creo una funzione che cambi la grandezza del playground
function playgroundChoose(){
  return document.getElementById('game-changer').value;
}

function generateNumeratedCard(iterationCounter, objectContainer) {

  const cardCreated = document.createElement('div');
  objectContainer.append(cardCreated);
  cardCreated.className = 'card';
  cardCreated.innerText = `${iterationCounter + 1}`;
  cardCreated.style.width = generateCalcCss();
  cardCreated.style.height = generateCalcCss();
  cardCreated.idCard = iterationCounter + 1;
  cardCreated.addEventListener('click', activateCard);
  
}

function generateCalcCss(){
  return `calc(100% / ${gameDifficulty})`
}

function activateCard() {
  this.classList.add('active');
  console.log(this.idCard);
};