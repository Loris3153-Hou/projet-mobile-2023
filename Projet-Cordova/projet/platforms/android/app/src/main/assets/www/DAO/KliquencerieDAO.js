class KliquencerieDAO {

    constructor() {
        this.token = "valeurAuthentification";
    }

    test() {
        var xhr = new XMLHttpRequest();

        // Remplacez l'URL de votre API et de votre frontend
        var apiUrl = 'https://149.202.53.74/arbredusavoir.com/projetCordova/controlleurs/JoueurControlleur.php?joueur=1&token=' + this.token;
        var frontendUrl = 'https://localhost/index.html';

        xhr.open('GET', apiUrl, true);
        xhr.setRequestHeader('Origin', frontendUrl);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // La requête a réussi, faire quelque chose avec la réponse
                    var response = xhr.responseText;
                    var listeObjetsJoueurs = this.convertirJsonEnString(response);

                    // Afficher la liste d'objets Joueur de manière lisible dans la console
                    for (let joueur of listeObjetsJoueurs) {
                        console.log('ID du joueur :', joueur.getIdJoueur());
                    }
                } else {
                    // Gérer les erreurs ici
                    console.error('La requête a échoué.');
                }
            }
        };

        xhr.send();
    }

    convertirJsonEnString(jsonInput) {
        // Convertir la réponse JSON en une liste d'objets Joueur
        var listeObjetsJoueurs = JSON.parse(jsonInput).map(jsonJoueur => {
            const joueur = new Joueur();
            joueur.setIdJoueur(jsonJoueur.idJoueur);
            joueur.setPseudoJoueur(jsonJoueur.pseudoJoueur);
            joueur.setMeilleurScoreJoueur(jsonJoueur.meilleurScoreJoueur);
            return joueur;
        });
        return listeObjetsJoueurs;
    }
}
