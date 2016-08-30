/*
Le programme bonjour.js demande à saisir le prénom et le nom de l'utilisateur dans deux variables
Puis affiche le résultat de l'appel à la fonction direBonjour().
*/

// Fonction renvoie un message de bienvenue

function direBonjour(prenom, nom) {
    var message = "Bonjour " + prenom + " " + nom + " !";
    return message;

}

// Faire saisir le prénom et le nom de l'utilisateur

var p = prompt("Entrez votre prénom :");
var n = prompt("Entrez votre nom :");

// Appeler direBonjour() avec les bons arguments et afficher son résultat

console.log(direBonjour(p, n));


var a = {
    prop1: "toto"
};
var b = Object.create(a);
b.prop2 = "titi";
var c = Object.create(b);
c.prop3 = "tutu";
console.log(c.prop1);
