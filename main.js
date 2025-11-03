/*SNACK 1
Crea una funzione che somma due numeri.
-Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
-Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
-Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/

const somma = (a, b) => a + b;
console.log(somma(1, 2));

/*SNACK 2
Crea una arrow function che calcola il quadrato di un numero.
-Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga. */

const quadrato = n => n * n;
console.log(quadrato(2));

/*SNACK 3
Crea una funzione eseguiOperazione
-Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */

const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 4, moltiplica));

/*SNACK 4
Crea un generatore di funzioni creaTimer
-Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

function creaTimer(tempo) {

  return () => {
    setTimeout(() => {
      console.log('Tempo scaduto!');
    }, tempo);
  }

};

const timer3s = creaTimer(3000);
timer3s();

/*SNACK 5
Crea una funzione stampaOgniSecondo con setInterval.
-Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script. */

/*function stampaOgniSecondo(messaggio) {

  setInterval(() => {
    console.log(messaggio);
  }, 1000);

};

stampaOgniSecondo('Ciao');*/


