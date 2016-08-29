/*
Exercice : table de multiplication avec saisie utilisateur
*/

var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle

nombre = Number(prompt("Entrez un nombre entre 1 et 10 : "));
if ((nombre < 1) || (nombre > 10)) {
    console.log("Nombre incorrect !");
} else {
    console.log("Voici la table de multiplication de " + nombre);
    var i = 1;
    while (i <= 10) {
        document.write(nombre + " x " + i + " = " + (nombre * i) + "<br>");
        i++;
    }
}
