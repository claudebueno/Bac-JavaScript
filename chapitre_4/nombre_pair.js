/*
Ecrivez un programme manege.js qui fait faire 10 tours de manège en affichant un message à chaque tour.
*/

console.log("Bienvenue à Nombres pairs ou impairs");

// Mise en place de la boucle simple
// for (var i = 1; i <= 10; i++) {
//     console.log("C'est le tour " + i);
// }

// Mise en place boucle avec saisie nombre de tours maximum

// Demander un nombre
// nombre = Number(prompt("Entrez un nombre :"));
//
// for (var i = 1; i <= nombre; i++) {
//     console.log("C'est le tour " + i);
// }



for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est un nombre pair");
    } else {
        console.log(i + " est un nombre impair");
    }
}
