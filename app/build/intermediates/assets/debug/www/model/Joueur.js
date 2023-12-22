class Joueur {
    constructor() {
        this.idJoueur = "";
        this.pseudoJoueur = "";
        this.meilleurScoreJoueur = "";
    }

    getIdJoueur() {
        return this.idJoueur;
    }

    setIdJoueur(idJoueur) {
        this.idJoueur = idJoueur;
    }

    getPseudoJoueur() {
        return this.pseudoJoueur;
    }

    setPseudoJoueur(pseudoJoueur) {
        this.pseudoJoueur = pseudoJoueur;
    }

    getMeilleurScoreJoueur() {
        return this.meilleurScoreJoueur;
    }

    setMeilleurScoreJoueur(meilleurScoreJoueur) {
        this.meilleurScoreJoueur = meilleurScoreJoueur;
    }
}