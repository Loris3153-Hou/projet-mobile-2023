class KliquencerieDAO {
    constructor() {
        this.token = "valeurAuthentification";
        this.listeObjetsJoueurs = null;
    }

    retournerLesVingtMeilleursScores() {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'http://144.217.240.64/app_kliquencerie/controlleurs/JoueurControlleur.php?methode=retournerLesVingtMeilleursScores&token=' + this.token;

            xhr.open('GET', apiUrl, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var response = xhr.responseText;
                        this.listeObjetsJoueurs = this.convertirJsonEnString(response);
                        for (let joueur of this.listeObjetsJoueurs) {
                            console.log('ID du joueur :', joueur.getIdJoueur());
                        }
                        resolve();  // Resolve the promise when the operation is complete
                    } else {
                        reject('La requête a échoué.');  // Reject the promise on error
                    }
                }
            };

            xhr.send();
        });
    }

    retournerUnJoueurParSonId(idJoueur) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'http://144.217.240.64/app_kliquencerie/controlleurs/JoueurControlleur.php?methode=getJoueurParId&joueur='+ idJoueur +'&token=' + this.token;

            xhr.open('GET', apiUrl, true);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var response = xhr.responseText;
                        this.listeObjetsJoueurs = this.convertirJsonEnString(response);
                        for (let joueur of this.listeObjetsJoueurs) {
                            console.log('ID du joueur :', joueur.getIdJoueur());
                        }
                        resolve();  // Resolve the promise when the operation is complete
                    } else {
                        reject('La requête a échoué.');  // Reject the promise on error
                    }
                }
            };

            xhr.send();
        });
    }


    miseAJourPseudo(idJoueur, NewPseudo) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'http://144.217.240.64/app_kliquencerie/controlleurs/JoueurControlleur.php?methode=ModifierLePseudo&newPseudo='+ NewPseudo +'&joueur='+ idJoueur +'&token=' + this.token;
            var frontendUrl = 'https://localhost/index.html';

            xhr.open('GET', apiUrl, true);
            xhr.setRequestHeader('Origin', frontendUrl);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        console.log("Pseudo Modifié : " + NewPseudo)
                        resolve();  // Resolve the promise when the operation is complete
                    } else {
                        reject('La requête a échoué.');  // Reject the promise on error
                    }
                }
            };

            xhr.send();
        });
    }

    miseAJourScore(idJoueur, NewScore) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            var apiUrl = 'http://144.217.240.64/app_kliquencerie/controlleurs/JoueurControlleur.php?methode=ModifierLeScore&newScore='+ NewScore +'&joueur='+ idJoueur +'&token=' + this.token;
            var frontendUrl = 'https://localhost/index.html';

            xhr.open('GET', apiUrl, true);
            xhr.setRequestHeader('Origin', frontendUrl);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        console.log("Score Modifié : " + NewScore)
                        resolve();  // Resolve the promise when the operation is complete
                    } else {
                        reject('La requête a échoué.');  // Reject the promise on error
                    }
                }
            };

            xhr.send();
        });
    }


    convertirJsonEnString(jsonInput) {
        var listeObjetsJoueurs = JSON.parse(jsonInput).map(jsonJoueur => {
            const joueur = new Joueur();
            joueur.setIdJoueur(jsonJoueur.idJoueur);
            joueur.setPseudoJoueur(jsonJoueur.pseudoJoueur);
            joueur.setMeilleurScoreJoueur(jsonJoueur.meilleurScoreJoueur);
            return joueur;
        });
        return listeObjetsJoueurs;
    }

//------------------------GETTERS AND SETTERS------------------------

    getListeObjetsJoueurs() {
        return this.listeObjetsJoueurs;
    }
}
