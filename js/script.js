// DATA
const number = 21;

// INPUT
const firstName = prompt("Inserisci il tuo primo nome");
console.log(firstName, typeof firstName);
const lastName = prompt("Inserisci il tuo primo cognome");
console.log(lastName, typeof lastName);
const favColor = prompt("Inserisci il tuo colore preferito");
console.log(favColor, typeof favColor);

// ELABORATION
const pwd = `${firstName}${lastName}${favColor}21`;
console.log(pwd, typeof pwd);
const pwdPhrase = `Password: ${pwd}`
console.log(pwdPhrase, typeof pwdPhrase);

// OUTPUT
document.getElementById("pwdTxt").innerHTML = pwdPhrase;