console.log('Loaded "Campo Minato"');

//1 creare html funzionale 
//2 generare dinamicamente le caselle
//3 quando clicchiamo sulla casella questa si colora + messaggio in console con numero casella
//4 creare bottone di start
//5 creare un una select con tre livelli di difficoltà (1 - 100(10), 2 - 81(9), 3 - 49(7))

const objectContainer = document.querySelector('.container');
const playgroundDimension = Math.pow(10, 2);

//dopo aver dichiarato il container voglio creare una funzione che generi delle caselle

for (let i = 0; i < playgroundDimension; i++) {
  generateCard(objectContainer);
}

function generateCard(objectContainer) {

  const cardCreated = document.createElement('div');
  objectContainer.append(cardCreated);
  cardCreated.className = 'card';

}