// Visualizzare in pagina 5 numeri casuali. 
// creazione numeri random
// 1
let numberRandom1 = document.getElementById('numbers-list1');
numberRandom1 = Math.floor(Math.random() *50)+ 1;

// aggiunta numero random alla pagina
const listaNumeri = document.getElementById('numbers-list1');
listaNumeri.innerText = numberRandom1;

// 2
let numberRandom2 = document.getElementById('numbers-list2');
numberRandom2 = Math.floor(Math.random() *50)+ 1;

// aggiunta numero random alla pagina
const listaNumeri2 = document.getElementById('numbers-list2');
listaNumeri2.innerText = numberRandom2;

let numberRandom3= document.getElementById('numbers-list3');
numberRandom3= Math.floor(Math.random() *50)+ 1;

// aggiunta numero random alla pagina
const listaNumeri3 = document.getElementById('numbers-list3');
listaNumeri3.innerText = numberRandom3;
// 4
let numberRandom4 = document.getElementById('numbers-list4');
numberRandom4 = Math.floor(Math.random() *50)+ 1;

// aggiunta numero random alla pagina
const listaNumeri4 = document.getElementById('numbers-list4');
listaNumeri4.innerText = numberRandom4;
// 5
let numberRandom5 = document.getElementById('numbers-list5');
numberRandom5 = Math.floor(Math.random() *50)+ 1;

// aggiunta numero random alla pagina
const listaNumeri5 = document.getElementById('numbers-list5');
listaNumeri5.innerText = numberRandom5;


// Da lì parte un timer di 30 secondi. 
setTimeout (myFunction, 5000);
function myFunction(){
    alert ('finito il tempo!!');
}

// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.






// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.








