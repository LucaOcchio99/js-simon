/*Visualizzare in pagina 5 numeri casuali. Da lì parte un 
timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e 
l’utente deve inserire, uno alla volta, i numeri che ha visto
 precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice 
quanti e quali dei numeri da indovinare sono stati individuati.*/


//REFERENZE
const number_pagina = document.querySelector('.numeri_casuali');
console.log(number_pagina);

//Visualizzare in pagina 5 numeri casuali
for (let i = 0; i < 5; i++) {
const gen_num = Math.round(Math.random()*20)+1; 
number_pagina.innerHTML += `<p>${gen_num}</p>`;
}

//Dopo 30 secondi i numeri in pagina devono essere rimossi
setTimeout(() => {
    number_pagina.innerHTML = '';
}, 3000);


