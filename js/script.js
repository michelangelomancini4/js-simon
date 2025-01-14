// richiamo elemento della lista numeri
let numberRandom = document.getElementById('numbers-list');
const randomNumbers = []; // Crea un array vuoto

for (let i = 0; i < 5; i++) {

    // Genero un numero random
  let numberRandom = Math.floor(Math.random() * 50) + 1; 

  // Controllo se il numero è già presente nell'array
  if (randomNumbers.includes(numberRandom)) {

    // tolgo eventuale numero duplicato
    i=i-1; 
  } 
   else {

    // Aggiungo il numero all'array vuoto
    randomNumbers.push(numberRandom); 
  }
}

console.log(randomNumbers); // Mostra l'array con i numeri generati

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








