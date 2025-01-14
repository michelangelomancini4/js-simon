// richiamo elemento della lista numeri
let numberRandom = document.getElementById('numbers-list');

//  creazione array vuoto per  numeri random
const randomNumbers = []; 

// Genera un numero random

for (let i = 0; i < 5; i++) {
  const genNumberRandom = Math.floor(Math.random() * 50) + 1; 

  // Aggiungi il numero random all'array vuoto
  randomNumbers.push(genNumberRandom); 
}

// mostra l'array in console
console.log(randomNumbers); 

// visualizzazione in pagina
const listaNumeri = document.getElementById('numbers-list');
listaNumeri.innerText = randomNumbers;

// Da lì parte un timer di 30 secondi. 
setTimeout (myFunction, 5000);
function myFunction(){
    alert ('finito il tempo!!');
}

// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.







// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.








