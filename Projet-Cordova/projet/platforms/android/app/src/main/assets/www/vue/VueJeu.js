class VueJeu {
    constructor() {
        this.html = document.getElementById("html-vue-jeu").innerHTML;
        this.score = 0;
        this.sequenceJeu = [];
        this.sequenceJoueur = [];
        this.actionAllerVersPageScore = null;
        this.imageURI = null;
        this.listeJeu = null;
        this.listeCouleursTheme = null;
        this.joueurCourant = null
        this.joueurDAO = new KliquencerieDAO();
    }

    recupererJoueur(joueurCourant){
        this.joueurCourant = joueurCourant
    }

    initialiserActionAllerVersPageScore(actionAllerVersPageScore){
        this.actionAllerVersPageScore = actionAllerVersPageScore;
    }

    initialiserThemeJeu(listeCouleursTheme){
        this.listeCouleursTheme = listeCouleursTheme;
    }

    reinitialiserListesTheme(){
        this.listeJeu = null;
        this.listeCouleursTheme = null;
    }

    afficher(){
        /*console.log("pseudo : " + document.getElementById("input-text-pseudo").value)
        this.joueur.setPseudoJoueur(document.getElementById("input-text-pseudo").value)
        console.log(this.joueur.getPseudoJoueur())*/
        this.score = 0;
        this.sequenceJeu = [];
        this.sequenceJoueur = [];

        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("score-ecran-de-jeu").innerHTML = this.score;
        document.getElementById("score-ecran-parametre").innerHTML = this.score;

        /*if (this.listeJeu) {
            let listeEnJSON = JSON.stringify(this.listeJeu);
            console.log("Tesssst" + listeEnJSON);

            for (let i = 1; i <= 9; i++) {
                this.imageURI = this.listeJeu[i];
                let elem = document.getElementById("carte" + i.toString());
                if (this.imageURI) {
                    elem.style.backgroundImage = "url('" + this.imageURI + "')";
                    elem.style.backgroundSize = "cover";
                    elem.style.backgroundRepeat = "no-repeat";
                }
            }
        }*/

        let cartes = document.getElementsByClassName("carre-ecran-de-jeu")

        setTimeout(() => this.faireJouerSequence(), 1000);

        for (var i = 0; i < cartes.length; i++) {
            let idCarte = cartes[i].id;
            cartes[i].addEventListener("click", () =>this.verifierSequence(idCarte));
            if (this.listeCouleursTheme) {
                cartes[i].style.backgroundColor = this.listeCouleursTheme[i];
                cartes[i].style.backgroundImage = "";
                cartes[i].style.backgroundSize = "";
                cartes[i].style.backgroundRepeat = "";
            }
            if (this.listeJeu) {
                this.imageURI = this.listeJeu[i+1];
                if (this.imageURI) {
                    cartes[i].style.backgroundImage = "url('" + this.imageURI + "')";
                    cartes[i].style.backgroundSize = "cover";
                    cartes[i].style.backgroundRepeat = "no-repeat";
                }
            }
        }

    }

    verifierSequence(idCarte){
        this.faireTournerCarte(idCarte);
        if (this.sequenceJeu[this.sequenceJoueur.length] == idCarte) {
            this.sequenceJoueur.push(idCarte);
            if (this.sequenceJoueur.length == this.sequenceJeu.length) {
                this.augmenterScore();
                setTimeout(() =>this.faireJouerSequence(), 1000);
            }
        }
        else {
            console.log("pseudo du Joueur : " + this.joueurCourant.getPseudoJoueur())
            this.joueurDAO.retournerUnJoueurParSonId(this.joueurCourant.getIdJoueur()).then(() => {
                let listeDesJoueurs = this.joueurDAO.getListeObjetsJoueurs();
                for (let i = 0; i < listeDesJoueurs.length; i++) {
                    if(this.joueurCourant.getPseudoJoueur() != listeDesJoueurs[i].getPseudoJoueur()){
                        this.joueurDAO.miseAJourPseudo(this.joueurCourant.getIdJoueur(), this.joueurCourant.getPseudoJoueur())
                        console.log("pseudo du Joueur : " + listeDesJoueurs[i].getPseudoJoueur())
                    }
                    if(this.score > listeDesJoueurs[i].getMeilleurScoreJoueur()){
                        this.joueurDAO.miseAJourScore(this.joueurCourant.getIdJoueur(), this.score)
                    }

                }
            });

            setTimeout(() => this.actionAllerVersPageScore(this.score), 1000);
        }
    }

    augmenterScore() {
        this.score += 1;
        document.getElementById("score-ecran-de-jeu").innerHTML = this.score;
        document.getElementById("score-ecran-parametre").innerHTML = this.score;
    }

    async faireJouerSequence(){
        for (var i = 0; i < this.sequenceJeu.length; i++) {
            //await this.sleep(3000);
            await this.faireTournerCarte(this.sequenceJeu[i]);
            console.log(this.sequenceJeu[i]);
        }
        let idCarte = 'carte' + (Math.floor(Math.random() * 9) + 1);
        this.faireTournerCarte(idCarte);
        this.sequenceJeu.push(idCarte);
        this.sequenceJoueur = [];
    }

    async faireTournerCarte(idCarte){
        gsap.to('#' + idCarte, {
            rotate: '+=360',
            ease: 'back.out'
        })
        await this.sleep(1000);
    }

    initialiserListe(liste){
        this.listeJeu = liste;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}