/*
Activité : gestion des contacts
*/

// TODO : complétez le programme


// Création de l'objet Contact
var Contact = {
    structContact: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    afficheContact: function() {
        var description = 'Nom : ' + this.nom + ' Prénom : ' + this.prenom;
        return description;
    }
};

// Initialisation au lancement du programme
// Création des 2ers contacts
var contact1 = Object.create(Contact);
contact1.structContact('Lévisse', 'Carole');

var contact2 = Object.create(Contact);
contact2.structContact('Nelsonne', 'Mélodie');

// Création du tableau contacts pour stocker les contacts. Insertion des contact 1 et 2 dans ce tableau contacts
var contacts = [contact1, contact2];



console.log('Bienvenue dans le gestionnaire des contacts');

while (true) {
    // Proposition des choix
    console.log('\nVeuillez choisir une option ci-dessous :');
    console.log('1 : Lister les contacts');
    console.log('2 : Ajouter un contact');
    console.log('0 : Quitter');

    // Demander le choix de l'utilisateur
    var chaineSaisie = prompt('Choisissez une option'); // Récupérer la chaine saisie
    var choixOption = parseInt(chaineSaisie); // Transformer la chaine en nombre pour controler la saisie de l'utilisateur

    if (choixOption === 0) { // CHOIX 0 - Quitter le programme
        break; // Quitte la boucle While

    } else if (choixOption === 1) { // CHOIX 1 - Lister les contacts
        console.log('\nVoici la liste de tous vos contacts :');

        contacts.forEach(function(contact) {
            console.log(contact.afficheContact());
        });

        console.log('\n'); // Saut de ligne pour faciliter la lecture

    } else if (choixOption === 2) { // CHOIX 2 - Ajouter un contact

        // Initialiser les variables contact
        var nom = '';
        var prenom = '';

        while ((!nom) || (nom.trim() === '')) { // Gérer la chaine vide, espace vide sans caractères ou le bouton annuler
            console.log('\nVous devez saisir un nom valide - Vous ne pouvez pas quittez l\'application\n');
            nom = prompt('Entrez le nom du nouveau contact :');
        }

        while ((!prenom) || (prenom.trim() === '')) { // Quand un nom est saisi, on passe au prénom 
            console.log('\nVous devez saisir un prénom valide - Vous ne pouvez pas quittez l\'application\n');
            prenom = prompt('Entrez le prénom du nouveau contact :');
        }

        var contact = Object.create(Contact); // Création du contact
        contact.structContact(nom, prenom); // Initialisation du contact avec les valeurs saisies

        var nbreContactsBeforePush = contacts.length; // Calculer le nombre de contacts dans le tableau avant ajout

        contacts.push(contact); // Ajout du contact au tableau contacts

        var nbreContactsAfterPush = contacts.length; // Calculer le nombre de contacts dans le tableau après ajout

        // Vérifier si le contact est bien ajouté au tableau
        if (nbreContactsAfterPush > nbreContactsBeforePush) {
            console.log('\nLe nouveau contact a été ajouté.\n');
        } else {
            console.log('\nAucun contact n\'a été ajouté. Veuillez recommencer.\n');
        }

    } else { // Si l'utilisateur saisit une valeur non prise en compte (0, 1, 2, des lettres ou vide)

        console.log('\nVous devez saisir un nombre valide.');

    }
}

console.log('\nAu revoir');
