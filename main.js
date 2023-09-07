//ESERCIZIO 1 JS
// let ntiri = 3;
// let giocatore1= "utente1"
// let giocatore2= "utente2"
// let punteggio1= 0;
// let punteggio2= 0;


// for (let i = 0; i < ntiri; i++) {
//     let random =Math.floor(Math.random() * (6 - 1) + 1)
//     punteggio1 += random
//     console.log(random);
    
// }
// console.log(`${giocatore1} il tuo punteggio è  ${punteggio1} `);

// for (let i = 0; i <ntiri; i++) {
//     let random1=Math.floor(Math.random() * (6 - 1) + 1) 
//     punteggio2 += random1;
//     console.log(random1);
    
// }
// console.log(`${giocatore2} il tuo punteggio è  ${punteggio2} `);

// if(punteggio1 > punteggio2){
//     console.log(punteggio1);
// } else if(punteggio2 > punteggio1){
//     console.log(punteggio2);
// } else {
//     console.log(`il punteggio è pari ${punteggio1} ${punteggio2}`);
// }

//ESERCIZIO 2 
// let settimana = "8"
// switch (settimana) {
//     case "1":
//         console.log(`il giorno scelto è lunedi`);
//         break;
//     case "2":
//         console.log(`il giorno scelto è martedi`);
//         break;
//     case "3":
//         console.log(`il giorno scelto è mercoledi`);
//         break;
//     case "4":
//         console.log(`il giorno scelto è giovedi`);
//         break;
//     case "5":
//         console.log(`il giorno scelto è venerdi`);
//         break;
//     case "6":
//         console.log(`il giorno scelto è sabato`);
//         break;
//     case "7":
//         console.log(`il giorno scelto è domenica`);
//         break;

//         default:
//         console.log(`Errore! Giorno della settimana non valido!`);
// }

//ESERCIZIO 3
 let bevande = prompt(`Seleziona la bevanda presente in lista:
 1 acqua 
 2 coca cola 
 3 birra `)
switch (bevande){
    case "1":
        console.log(`E' stata selezionata l'acqua`);
        break;
    case "2":
        console.log(`E' stata selezionata coca cola`);
        break;
    case "3":
        console.log(`E' stata selezionata birra `);
        break;
    default:
        alert(`Errore`)
        let bevande = prompt(`Seleziona la bevanda presente in lista:
        1 acqua
        2 coca cola
        3 birra`);
}

//ESERCIZIO 4 
// let temperatura = "-11"

// if (temperatura < -10){
//     console.log(`copriti....ancora ti raffreddi`);
// }
// else if (temperatura < 0){
//     console.log(`non è tanto il freddo quanto l'umidità`);
// }

// else if( temperatura <= 20 ){
//     console.log(`non ci sono più le mezze stagioni`);
// }
//  else if(temperatura >= 30){
//     console.log(`lu mare, lu sole, lu ientu`);
// }
// else if (temperatura < 30){
//     console.log(`mi dia una peroni sudata`);
// }







