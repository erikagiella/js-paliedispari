// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*Tools:
-let/const 
-prompt
-funzione isPalindrome (return booleano - deve verificare che la parola/frase inserita è palindroma)
-funzione revertWord (return parola invertita)
-metodo split (per convertire parola in array)
-metodo join (per riconvertire array in parola)
-metodo replace (per eliminare spazi nella frase)
-if/else
-ciclo for
-console.log (stampa del risultato)
*/

/*

//Elaborazione

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
    //trasformo la parola in array per poterla invertire  
    const wordArray = userInput.split("");
    console.log(wordArray);
    //passo alla funzione reverseWord l'array contenente la parola: mi restituirà la parola invertita
    const reverseWord = revertWord (wordArray);
    console.log(reverseWord);
    isPal = isPalindrome(userInput,reverseWord);
}


//stampa del risultato
if (isPal){
    console.log(`La parola/frase inserita "${userInput}" è palindroma!`)
} else {
    console.log(`La parola/frase inserita "${userInput}" non è palindroma!`)
}

*/

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//

/*Tools:
-let/const 
-prompt
-funzione randomNum (return numero da 1 a 5 random)
-funzione oddOrEven (ritorna true se pari, false se dispari)
-if/else
-console.log (stampa del risultato)
*/

//Elaborazione

//funzione che restituisce un numero random tra 1 e 5
function randomNumber(){
    const randomNum = Math.floor(Math.random()*(5)) + 1;
    return randomNum;
}

//funzione che restituisce true se il numero è paro e false se è dispari
function oddOrEven (num){
    let oddOrEven;
    if (num % 2 === 0){
        //è pari
        oddOrEven = true;
    } else {
        //è dispari
        oddOrEven = false;
    }
    return oddOrEven;
}


//chiedo all'utente di inserire scegliere pari o dispari
const userOddEven = prompt ("pari o dispari?");

//BONUS verifico che l'utente abbia inserito solo le parole pari o dispari 
//let userOddEven;
//const isUserChoiceCorrect = false;
// do{
//     userOddEven = prompt ("Inserisci un numero da 1 a 5");
//     //tolgo tutti gli spazi
//     userOddEven = userOddEven.replace(/ g/,"");
//     if (userOddEven === "pari" || userOddEven === "dispari"){
//         isUserChoiceCorrect = true
//     } else {
//         console.log ("Numero inserito non incluso nel range, ritenta!")
//     }
// }while(!isUserChoiceCorrect);


//chiedo all'utente di inserire un numero da 1 a 5,
const userNum = prompt ("Inserisci un numero da 1 a 5");

//BONUS verifico che il numero inserito dall'utente sia nel range richiesto
//let userNum;
//const isUserNumCorrect = false;
// do{
//     userNum = prompt ("Inserisci un numero da 1 a 5");
//     if (userNum>=1 && userNum<=5){
//         isUserNumCorrect = true
//     } else {
//         console.log ("Numero inserito non incluso nel range, ritenta!")
//     }
// }while(!isUserNumCorrect);


const pcNum = randomNumber();
console.log(pcNum);
const sum = parseInt(userNum) + parseInt(pcNum);
console.log(sum);
const sumOddEven = oddOrEven (sum);
console.log(sumOddEven)