var nome = prompt("Dimmi il tuo nome");
console.log(nome);

var cognome = prompt("Dimmi ora il tuo cognome");
console.log(cognome);

var colore = prompt("Il tuo colore preferito?");
console.log(colore);

document.getElementById('titolo').innerHTML = "Benvenuti nel pwdGen di " + nome
document.getElementById('saluto').innerHTML = "Ciao " + nome + " " + cognome;
document.getElementById('psw').innerHTML = "Una pessima password generata potrebbe essere: " + nome + cognome + colore + "21";
