class VueJeu {
    constructor() {
        this.html = document.getElementById("html-vue-jeu").innerHTML;
        this.score = 0;
        this.sequenceJeu = [];
        this.sequenceJoueur = [];
        this.actionAllerVersPageScore = null;
    }

    initialiserActionAllerVersPageScore(actionAllerVersPageScore){
        this.actionAllerVersPageScore = actionAllerVersPageScore;
    }

    afficher(){

        this.score = 0;
        this.sequenceJeu = [];
        this.sequenceJoueur = [];

        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("score-ecran-de-jeu").innerHTML = this.score;
        document.getElementById("score-ecran-parametre").innerHTML = this.score;

        let cartes = document.getElementsByClassName("carre-ecran-de-jeu")

        setTimeout(() => this.faireJouerSequence(), 1000);

        for (var i = 0; i < cartes.length; i++) {
            let idCarte = cartes[i].id;
            cartes[i].addEventListener("click", () =>this.verifierSequence(idCarte));
        }

    }

    verifierSequence(idCarte){
        this.faireTournerCarte(idCarte);
        if (this.sequenceJeu[this.sequenceJoueur.length] == idCarte) {
            this.sequenceJoueur.push(idCarte);
            if (this.sequenceJoueur.length == this.sequenceJeu.length) {
                this.augmenterScore();
                setTimeout(() =>this.faireJouerSequence(), 2000);
            }
        }
        else {
            this.actionAllerVersPageScore(this.score);
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

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}