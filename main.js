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

function isPalindrome (input, reverseInput) {
    let isPal;
    if (input === reverseInput){
        isPal = true;
    } else {
        isPal = false;
    }

    const p = "il risultato della funzione isPalindrome è ";
    console.log( p + isPal);
    return isPal;
}


//creo una variabile booleana per identificare se la parola/frase inserita è palindroma o meno
let isPal;

//chiedo all'utente di inserire una parola o una frase
const userInput = prompt('Inserire una parola o frase');
//Se è una frase sarà true altrimenti se è una parola singola è false
const isWordOrPhrase = userInput.includes(" ");
console.log(isWordOrPhrase)

//distinguo se è stata inserita una parola o una frase
if (isWordOrPhrase){
    console.log ("sei nell'if");
    //l'input dell'utente è una frase
    //rimuovo gli spazi dalla frase
    const phrase = userInput.replace(/\s/g, '');
    //trasformo la frase in array
    phraseArray = phrase.split('');
    //chiamo la funzione che inverte la mia frase (senza spazi)
    reversePhrase = revertWord (phraseArray);
    //chiamo la funzione isPalindrome che verifica se la frase è palindroma
    isPal = isPalindrome(phrase,reversePhrase);
} else {
    //l'input dell'utente è una parola
    console.log ("sei nell'else");
    //trasformo la parola in array per poterla invertire  
    const wordArray = userInput.split("");
    console.log(wordArray);
    //passo alla funzione reverseWord l'array contenente la parola: mi restituirà la parola invertita
    const reverseWord = revertWord (wordArray);
    console.log(reverseWord);
    isPal = isPalindrome(userInput,reverseWord);
    console.log (isPal);
}






// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.