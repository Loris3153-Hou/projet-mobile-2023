class Application {
    constructor(window, vueAccueilJeu, vueJeu, vuePersonnalisationJeu, vueScore, vueAnimation, joueur) {
        this.window = window;
        this.joueurDAO = new KliquencerieDAO();
        this.vueAccueilJeu = vueAccueilJeu;
        this.vueAnimation = vueAnimation;
        this.vueJeu = vueJeu;
        this.vuePersonnalisationJeu = vuePersonnalisationJeu;
        this.vueScore= vueScore;
        this.joueurCourant = joueur;
        this.getJoueur();

        this.vueJeu.initialiserActionAllerVersPageScore(score =>this.allerVersPageScore(score));
        this.vueAccueilJeu.initialiserActionTransmettreCouleursTheme(listeCouleursTheme =>this.transmettreCouleursTheme(listeCouleursTheme))
        this.vueAccueilJeu.initialiserActionTransmettreListeImagesTheme(listeImagesTheme =>this.transmettreListeImagesTheme(listeImagesTheme))
        this.vuePersonnalisationJeu.initialiserActionTransmettreListe(liste=>this.transmettreListe(liste));

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

    allerVersPageScore(score){
        this.vueScore.recupererScoreJoueurCourant(score);
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

    async getJoueur() {
        //localStorage.removeItem('deviceID');
        let deviceID = localStorage.getItem('deviceID');
        let pseudo = "";
        if (deviceID==null) {
            deviceID = this.generateDeviceID();
            let ID = deviceID.split("_")[1];
            pseudo = 'Joueur_' + ID;
            localStorage.setItem('deviceID', deviceID);
            await this.joueurDAO.ajouterJoueur(pseudo, deviceID);
        }
        const listeDesJoueurs = await this.joueurDAO.getJoueurParToken(deviceID);
        for (let joueur of listeDesJoueurs) {
            this.joueurCourant.setIdJoueur(joueur.idJoueur);
            this.joueurCourant.setPseudoJoueur(joueur.pseudoJoueur);
            this.joueurCourant.setMeilleurScoreJoueur(joueur.meilleurScoreJoueur);
            this.joueurCourant.setTokenJoueur(joueur.token);
        }
        this.vueAccueilJeu.recupererJoueur(this.joueurCourant);
        this.vueScore.recupererJoueur(this.joueurCourant);
        this.vueJeu.recupererJoueur(this.joueurCourant);
    }

    generateDeviceID() {
        return 'device_' + Date.now();
    }
}


new Application(window, new VueAccueilJeu(), new VueJeu(), new VuePersonnalisationJeu(), new VueScore(), new VueAnimation(),new Joueur());