/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// Initialisation des variables
var nombre = 0;
var tentative = 0;
var tentativeMax = 6;

// Affichage règle du jeu de devinette
console.log('Vous devez trouver un nombre compris entre 1 et 100 (en 6 essais maximum).');

while ((nombre !== solution) && (tentative < tentativeMax)) {

  // Demander un nombre
  nombre = Number(prompt("Entrez un nombre (entre 0 et 100) :"));
  // Incrémente le compteur de tentative
  tentative++;

  // Verification du nombre saisi répond au critères
  if ((nombre < 0 ) || (nombre > 100) || isNaN(nombreSaisi)) {
    console.log("ERREUR : votre proposition doit être comprise entre 0 et 100");
  }
  else if (nombre > solution) {
    console.log(nombre + " est trop grand");
  }
  else if (nombre < solution) {
    console.log(nombre + " est trop petit");
  }

}
// Le nombre est trouvé
if (nombre === solution ) {
  console.log("Bravo ! La solution était : " + solution);
}
// Nombre de tentative est dépassé
else {
  console.log('Désolé, vous avez perdu. Vous avez utilisé vos ' + tentative + ' essais.');
  console.log('La solution était ' + solution + '.');
}
