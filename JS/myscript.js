// chiedi il nome
let nameUser = prompt("Qual'è il tuo nome?");

// chiedi il cognome
let surnameUser = prompt("Qual'è il tuo cognome?");

// chiedi il colore preferito
let colorUser = prompt("Qual'è il tuo colore preferito?");

// costante dopo ogni password
const anno = 21;

// generazione password
let passwordGenerator = nameUser + surnameUser + colorUser + anno;

// display generazione password
document.getElementById("mio_id").innerHTML = `La tua Password generata è: ${passwordGenerator} `;