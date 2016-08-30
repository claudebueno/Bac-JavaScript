// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}


console.log("Accéder au parent d'un nœud");

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log("Affiche null : document n'a aucun noeud parent");
console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent
