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

//funzione che restituisce pari o dispari
function oddOrEven (num){
    let oddOrEven;
    if (num % 2 === 0){
        //è pari
        oddOrEven = "pari";
    } else {
        //è dispari
        oddOrEven = "dispari";
    }
    return oddOrEven;
}


//chiedo all'utente di inserire scegliere pari o dispari
//BONUS verifico che l'utente abbia inserito solo le parole pari o dispari 
let userOddEven;
let isUserChoiceCorrect = false;
do{
    userOddEven = prompt ("Pari o dispari?");
    //tolgo tutti gli spazi
    userOddEven = userOddEven.replace(/\s/g, '');
    //tutto in minuscolo
    userOddEven = userOddEven.toLowerCase();
    if (userOddEven === "pari" || userOddEven === "dispari"){
        isUserChoiceCorrect = true;
    } else {
        alert("Devi inserire o pari o dispari, ritenta!");
    }
}while(!isUserChoiceCorrect);


//chiedo all'utente di inserire un numero da 1 a 5
//BONUS verifico che il numero inserito dall'utente sia nel range richiesto
let userNum;
let isUserNumCorrect = false;
do{
    userNum = prompt ("Inserisci un numero da 1 a 5");
    if (userNum>=1 && userNum<=5){
        isUserNumCorrect = true;
    } else {
        alert("Numero inserito non incluso nel range, ritenta!");
    }
}while(!isUserNumCorrect);


const pcNum = randomNumber();
const sum = parseInt(userNum) + pcNum;
const sumOddEven = oddOrEven (sum);

//Risultato
if (sumOddEven === userOddEven){
    alert(`Hai scelto ${userOddEven}, il numero generato è ${sum}: HAI VINTO!`)
} else {
    alert(`Hai scelto ${userOddEven}, il numero generato è ${sum}: HAI PERSO!`)
}
