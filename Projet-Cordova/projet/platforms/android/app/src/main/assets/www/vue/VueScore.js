class VueScore {
    constructor(){
        this.html = document.getElementById("html-vue-score").innerHTML;
        this.htmlCelebration = document.getElementById("html-celebration-record-battu").innerHTML;
        this.score = 0;
        this.listeVingtPremiersNomsJoueurs = [];
        this.listeVingtPremiersScoreJoueurs = [];
        this.joueurCourant = null
        this.joueurDAO = new KliquencerieDAO();
        this.recordPersonnelBattu = null;

    }

    recupererJoueur(joueurCourant){
        this.joueurCourant = joueurCourant
    }

    recupererScoreJoueurCourant(score, recordPersonnelBattu){
        this.score = score;
        this.recordPersonnelBattu = recordPersonnelBattu;
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

    async afficher(){

        this.joueurDAO.retournerLesVingtMeilleursScores().then(() => {
            let listeDesJoueurs = this.joueurDAO.getListeObjetsJoueurs();
            this.listeVingtPremiersNomsJoueurs = [];
            this.listeVingtPremiersScoreJoueurs = [];
            for (let i = 0; i < listeDesJoueurs.length; i++) {
                this.listeVingtPremiersNomsJoueurs.push(listeDesJoueurs[i].getPseudoJoueur());
                this.listeVingtPremiersScoreJoueurs.push(listeDesJoueurs[i].getMeilleurScoreJoueur());
            }


        });

        console.log("lala : " + this.recordPersonnelBattu);
        await this.sleep(300);

        if (this.recordPersonnelBattu == true) {
            document.getElementsByTagName("body")[0].innerHTML = this.htmlCelebration;

            gsap.registerPlugin(MotionPathPlugin);

            gsap.set(".astronaut", {scale: 0.5, autoAlpha: 1});

            gsap.to(".astronaut", {
              duration: 5,
              ease: "power1.inOut",
              immediateRender: true,
              motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: 90
              }
            });

            await this.sleep(6000);
        }

        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("score-joueur-courant").innerHTML = this.score;
        this.afficherScoresVingtPremiersJoueurs();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


}