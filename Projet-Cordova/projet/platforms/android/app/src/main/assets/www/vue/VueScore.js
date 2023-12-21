class VueScore {
    constructor(){
        this.html = document.getElementById("html-vue-score").innerHTML;
        this.score = 0;
        this.listeVingtPremiersNomsJoueurs = [];
        this.listeVingtPremiersScoreJoueurs = [];
        this.joueurCourant = null
        this.joueurDAO = new KliquencerieDAO();

        this.joueurDAO.retournerLesVingtMeilleursScores().then(() => {
            let listeDesJoueurs = this.joueurDAO.getListeObjetsJoueurs();
            for (let i = 0; i < listeDesJoueurs.length; i++) {
                this.listeVingtPremiersNomsJoueurs.push(listeDesJoueurs[i].getPseudoJoueur());
                this.listeVingtPremiersScoreJoueurs.push(listeDesJoueurs[i].getMeilleurScoreJoueur());
            }
        });
    }

    recupererJoueur(joueurCourant){
        this.joueurCourant = joueurCourant
    }

    recupererScoreJoueurCourant(score){
        this.score = score;
    }

    afficherScoresVingtPremiersJoueurs(){
        let divPremierJoueurPodium = document.getElementById("premier-joueur-podium");
        divPremierJoueurPodium.innerHTML = divPremierJoueurPodium.innerHTML.replace("{scoreJoueur1}", this.listeVingtPremiersNomsJoueurs[0] + "-" + this.listeVingtPremiersScoreJoueurs[0]);

        let divDeuxiemeJoueurPodium = document.getElementById("deuxieme-joueur-podium");
        divDeuxiemeJoueurPodium.innerHTML = divDeuxiemeJoueurPodium.innerHTML.replace("{scoreJoueur2}", this.listeVingtPremiersNomsJoueurs[1] + "-" + this.listeVingtPremiersScoreJoueurs[1]);

        let divTroisiemeJoueurPodium = document.getElementById("troisieme-joueur-podium");
        divTroisiemeJoueurPodium.innerHTML = divTroisiemeJoueurPodium.innerHTML.replace("{scoreJoueur3}", this.listeVingtPremiersNomsJoueurs[2] + "-" + this.listeVingtPremiersScoreJoueurs[2]);

        let listeClassementJoueurs = document.getElementById("classement-joueurs");
        const listeClassementJoueursItemHTML = listeClassementJoueurs.innerHTML;
        let listeClassementJoueursHTMLRemplacement = "";

        for(var i = 3; i < this.listeVingtPremiersScoreJoueurs.length; i++){
            let listeClassementJoueursItemHTMLRemplacement = listeClassementJoueursItemHTML;
            listeClassementJoueursItemHTMLRemplacement = listeClassementJoueursItemHTMLRemplacement.replace("{score-joueur-classement}",i+1 + "- " + this.listeVingtPremiersScoreJoueurs[i]);
            listeClassementJoueursItemHTMLRemplacement = listeClassementJoueursItemHTMLRemplacement.replace("{nom-joueur-classement}", this.listeVingtPremiersNomsJoueurs[i]);
            listeClassementJoueursHTMLRemplacement += listeClassementJoueursItemHTMLRemplacement;
        }

        listeClassementJoueurs.innerHTML = listeClassementJoueursHTMLRemplacement;

    }
    afficher(){
        console.log("pseudo du Joueur : " + this.joueurCourant.getPseudoJoueur())
        this.joueurDAO.retournerUnJoueurParSonId(this.joueurCourant.getIdJoueur()).then(() => {
            let listeDesJoueurs = this.joueurDAO.getListeObjetsJoueurs();
            for (let i = 0; i < listeDesJoueurs.length; i++) {
                console.log("pseudo du Joueur : " + listeDesJoueurs[i].getPseudoJoueur())
            }
        });
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        this.afficherScoresVingtPremiersJoueurs();
        document.getElementById("score-joueur-courant").innerHTML = this.score;
    }

}