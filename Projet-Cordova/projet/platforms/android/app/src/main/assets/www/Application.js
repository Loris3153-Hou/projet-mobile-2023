class Application {
    constructor(window, vueAccueilJeu, vueJeu, vuePersonnalisationJeu, vueScore, vueAnimation, joueur) {
        this.window = window;
        this.vueAccueilJeu = vueAccueilJeu;
        this.vueAnimation = vueAnimation;
        this.vueJeu = vueJeu;
        this.vuePersonnalisationJeu = vuePersonnalisationJeu;
        this.vueScore= vueScore;
        this.joueurCourant = joueur;
        this.joueurCourant.setIdJoueur(1)

        this.vueJeu.initialiserActionAllerVersPageScore((score, recordPersonnelBattu) =>this.allerVersPageScore(score, recordPersonnelBattu));
        this.vueAccueilJeu.initialiserActionTransmettreCouleursTheme(listeCouleursTheme =>this.transmettreCouleursTheme(listeCouleursTheme))
        this.vueAccueilJeu.initialiserActionTransmettreListeImagesTheme(listeImagesTheme =>this.transmettreListeImagesTheme(listeImagesTheme))
        this.vuePersonnalisationJeu.initialiserActionTransmettreListe(liste=>this.transmettreListe(liste));
        this.vueAccueilJeu.recupererJoueur(this.joueurCourant)
        this.vueScore.recupererJoueur(this.joueurCourant)
        this.vueJeu.recupererJoueur(this.joueurCourant)

        this.window.addEventListener('hashchange', () =>this.naviguer());

        this.naviguer();
        //setTimeout(() =>this.naviguer(), 3000);
    }

    naviguer(){
        let hash = window.location.hash;
        console.log("naviger :" + hash);
        if(!hash){
            this.vueJeu.reinitialiserListesTheme();
            this.vueAnimation.afficher();

        }else if(hash.match(/^#jeu/)){

            this.vueAccueilJeu.reinitialiserListesImagesTheme();
            this.vueJeu.afficher();
            //let urlSansFragment = window.location.href.split('#')[0];
            //window.location.href = urlSansFragment + "#score";
            //setTimeout(() =>this.naviguer(), 5000);

        }else if(hash.match(/^#accueil/)){

            this.vueJeu.reinitialiserListesTheme();
            this.vueAccueilJeu.afficher();

         }
        else if(hash.match(/^#jeuRejouer/)){

            this.window.location.hash = "#jeu";

        }
        else if (hash.match(/^#score/)){

            this.vueScore.afficher();

        }
        else if (hash.match(/^#perso/)){
            this.vuePersonnalisationJeu.afficher();
        }
    }

    allerVersPageScore(score, recordPersonnelBattu){
        this.vueScore.recupererScoreJoueurCourant(score, recordPersonnelBattu);
        this.window.location.hash = "#score";
    }

    transmettreCouleursTheme(listeCouleursTheme){
        this.vueJeu.initialiserThemeJeu(listeCouleursTheme);
    }

    transmettreListe(liste){
        this.vueAccueilJeu.initialiserListe(liste);
    }

    transmettreListeImagesTheme(liste){
        this.vueJeu.initialiserListe(liste);
    }
}


new Application(window, new VueAccueilJeu(), new VueJeu(), new VuePersonnalisationJeu(), new VueScore(), new VueAnimation(),new Joueur());