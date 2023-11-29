class VueScore {
    constructor(){
        this.html = document.getElementById("html-vue-score").innerHTML;
        this.score = 26;
        this.listeVingtPremiersNomsJoueurs = ["louis", "carolle", "jean", "fanny", "edwardo", "elinadu53"];
        this.listeVingtPremiersScoreJoueurs = [48, 36, 25, 18, 15, 9];
    }

    afficherScoreJoueurCourant(){
        document.getElementById("score-joueur-courant").innerHTML = this.score;
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
            listeClassementJoueursItemHTMLRemplacement = listeClassementJoueursItemHTMLRemplacement.replace("{score-joueur-classement}", this.listeVingtPremiersScoreJoueurs[i]);
            listeClassementJoueursItemHTMLRemplacement = listeClassementJoueursItemHTMLRemplacement.replace("{nom-joueur-classement}", this.listeVingtPremiersNomsJoueurs[i]);
            listeClassementJoueursHTMLRemplacement += listeClassementJoueursItemHTMLRemplacement;
        }

        listeClassementJoueurs.innerHTML = listeClassementJoueursHTMLRemplacement;

    }
    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        this.afficherScoresVingtPremiersJoueurs();
        this.afficherScoreJoueurCourant();
    }

}