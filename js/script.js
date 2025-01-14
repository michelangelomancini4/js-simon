// creazione numero random
let numberRandom = document.getElementById('numbers-list');
numberRandom = Math.floor(Math.random() *50)+ 1;

// visualizzazione in console del numero random
console.log(numberRandom);

const listaNumeri = document.getElementById('numbers-list');

const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);
console.log(randomNumbers);

// visualizzazione in pagina
listaNumeri.innerText = randomNumbers;

// Da lì parte un timer di 30 secondi. 
setTimeout (myFunction, 5000);
function myFunction(){
    alert ('finito il tempo!!');
}

// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.







// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.








