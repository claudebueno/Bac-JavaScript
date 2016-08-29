/*
Ecrivez un programme manege.js qui fait faire 10 tours de manège en affichant un message à chaque tour.
*/

console.log("Bienvenue à Tournez Manège");

// Mise en place de la boucle simple
// for (var i = 1; i <= 10; i++) {
//     console.log("C'est le tour " + i);
// }

// Mise en place boucle avec saisie nombre de tours maximum

// Demander un nombre
nombre = Number(prompt("Entrez un nombre :"));

for (var i = 1; i <= nombre; i++) {
    console.log("C'est le tour " + i);
}
