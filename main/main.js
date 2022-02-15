/*Visualizzare in pagina 5 numeri casuali. Da lì parte un 
timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e 
l’utente deve inserire, uno alla volta, i numeri che ha visto
 precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati.
*/

 
const numeri_pagina = document.querySelector('.numeri_casuali')

const numeri = genNumRandom(1, 100);
console.log(`I numeri generati sono i seguenti: ${numeri}`);
let numeri_indovinati = [];

numeri_pagina.innerHTML = `<p> ${numeri} </p>` 

       setTimeout(function() {
       numeri_pagina.innerHTML = '';


    const num_vist = numeri_visti(numeri.length);
    console.log(num_vist);

console.log(`I numeri indovinati dall'utente sono i seguenti: ${numeri_indovinati}. Ne ha indovinati ${numeri_indovinati.length}`);
},3000);




function numeri_visti(lunghezza_numeri) {
    const array_utente = [];
    for (let i = 0; i < lunghezza_numeri; i++) {
        const numero_inserito = parseInt(prompt('Quali numeri hai visto?'));
        array_utente.push(numero_inserito);
        if(numeri.includes(numero_inserito)) {
             numeri_indovinati.push(numero_inserito);
        }
    }
    return array_utente;
}




function genNumRandom(min, max) {
    let numeri_generati = [];

    for(let i = 0;  i < 5; i++) {
     const numeri_random =  Math.round(Math.random()*max)+min;
     numeri_generati.push(numeri_random);
    }
    return numeri_generati;
}