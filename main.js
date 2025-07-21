// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*Tools:
-let/const 
-prompt
-funzione isPalindrome (return booleano - deve verificare che la parola inserita è palindroma)
-funzione revertWord (return parola invertita - c)
-metodo split (per convertire parola in array)
-metodo join (per riconvertire array in parola)
-console.log (stampa del risultato)
*/


//funzione revertWord per invertire la parola inserita dall'utente
function revertWord (word){
    let revWordArray = new Array();
    //ciclo sulla lunghezza dell'array in input e riempio l'array della parola invertita
    for (let i = 0; i < word.length; i++){
        revWordArray[i] = word[word.length-1-i]
    }
    //trasformo l'array della parola invertita in stringa e lo ritorno come risultato della funzione
    const reverseWord = revWordArray.join("");
    return reverseWord;
}

//chiedere all'utente di inserire una parola
const word = prompt('Inserire una parola o frase');


//trasformo la parola in array per poterla invertire
const wordArray = word.split("");
console.log(wordArray);
//passo alla funzione reverseWord l'array contenente la parola: mi restituirà la parola invertita
const reverseWord = revertWord (wordArray);




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.