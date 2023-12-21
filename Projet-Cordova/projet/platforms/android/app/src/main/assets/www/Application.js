class Application {
    constructor(window, vueAccueilJeu, vueJeu, vuePersonnalisationJeu, vueScore, joueur) {
        this.window = window;
        this.vueAccueilJeu = vueAccueilJeu;
        this.vueJeu = vueJeu;
        this.vuePersonnalisationJeu = vuePersonnalisationJeu;
        this.vueScore= vueScore;
        this.joueurCourant = joueur;
        this.joueurCourant.setIdJoueur(1)

        this.vueJeu.initialiserActionAllerVersPageScore(score =>this.allerVersPageScore(score));
        this.vueAccueilJeu.initialiserActionTransmettreCouleursTheme(listeCouleursTheme =>this.transmettreCouleursTheme(listeCouleursTheme))
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
            this.vueAccueilJeu.afficher();

        }else if(hash.match(/^#jeu/)){

            this.vueJeu.afficher();
            //let urlSansFragment = window.location.href.split('#')[0];
            //window.location.href = urlSansFragment + "#score";
            //setTimeout(() =>this.naviguer(), 5000);

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

    allerVersPageScore(score){
        this.vueScore.recupererScoreJoueurCourant(score);
        this.window.location.hash = "#score";
    }

    transmettreCouleursTheme(listeCouleursTheme){
        this.vueJeu.initialiserThemeJeu(listeCouleursTheme);
    }

    transmettreListe(liste){
        this.vueJeu.initialiserListe(liste);
    }
}


new Application(window, new VueAccueilJeu(), new VueJeu(), new VuePersonnalisationJeu(), new VueScore(), new Joueur());