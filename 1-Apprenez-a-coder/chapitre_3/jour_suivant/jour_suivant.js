/*
Exercice : afficher le jour suivant
*/

console.log("Affichage du jour suivant");

// Demander un jour de la semaine + Transformer la saisie en minuscule
var jour = prompt("Saisir un jour de la semaine").toLowerCase();
// Test transformation en minuscule avant concaténation au dessus.
// var jour = jour.toLowerCase();

switch (jour) {
    // Différents cas à traiter
    case "lundi":
        console.log("Demain, nous serons mardi");
        break;
    case "mardi":
        console.log("Demain, nous serons mercredi");
        break;
    case "mercredi":
        console.log("Demain, nous serons jeudi");
        break;
    case "jeudi":
        console.log("Demain, nous serons vendredi");
        break;
    case "vendredi":
        console.log("Demain, nous serons samedi");
        break;
    case "samedi":
        console.log("Demain, nous serons dimanche");
        break;
    case "dimanche":
        console.log("Demain, nous serons lundi");
        break;
    default:
        console.log("Je n'ai pas compris !")
}
