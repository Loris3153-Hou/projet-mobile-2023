class VueAccueilJeu {
    constructor() {
        this.html = document.getElementById("html-vue-accueil-jeu").innerHTML;
        //this.html = document.getElementById("page-animation-application").innerHTML;
        this.joueurCourant = null
        this.liste = null;
        this.theme = "div-theme-bleu";
        this.actionTransmettreCouleursTheme = null;
        this.joueurDAO = new KliquencerieDAO();
        this.listeImagesTheme = null;
        this.actionTransmettreListeImagesTheme = null;
    }

    reinitialiserListesImagesTheme(){
        this.listeImagesTheme = null;
    }

    initialiserListe(liste){
        this.listeImagesTheme = liste;
    }

    initialiserActionTransmettreListeImagesTheme(actionTransmettreListeImagesTheme){
        this.actionTransmettreListeImagesTheme = actionTransmettreListeImagesTheme;
    }

    recupererJoueur(joueurCourant){
        this.joueurCourant = joueurCourant
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        //console.log("pseudo : " + this.joueurDAO.retournerUnJoueurParSonId(joueurCourant.getIdJoueur())[0].getPseudoJoueur())
        //document.getElementById("input-text-pseudo").placeholder = this.joueurDAO.retournerUnJoueurParSonId(joueurCourant.getIdJoueur())[0].getPseudoJoueur();

        document.getElementById("formulaire-recuperation-pseudo").addEventListener("submit", evenement =>this.recupererPseudo(evenement));

        this.selectionnerTheme(this.theme);

        let themes = document.getElementsByClassName("div-themes");

        for (var i = 0; i < themes.length; i++) {
            let idTheme = themes[i].id;
            themes[i].addEventListener("click", () =>this.selectionnerTheme(idTheme));
        }


    }

    recupererPseudo(evenement){
        evenement.preventDefault()
        console.log("valeur du pseudo : " + document.getElementById("input-text-pseudo").value)
        this.joueurCourant.setPseudoJoueur(document.getElementById("input-text-pseudo").value)

        let cartes = document.getElementById(this.theme).children;
        let listeCouleursTheme = [];
        for (var i = 0; i < cartes.length; i++) {
            const style = getComputedStyle(cartes[i]);
            listeCouleursTheme.push(style.backgroundColor);
        }

        this.actionTransmettreCouleursTheme(listeCouleursTheme);
        this.actionTransmettreListeImagesTheme(this.listeImagesTheme)
    }

    selectionnerTheme(idTheme){

        let themes = document.getElementsByClassName("div-themes");

        for (var i = 0; i < themes.length; i++) {
            if(themes[i].id == idTheme){
                document.getElementById(idTheme).style.background = "rgba(217, 217, 217, 0.78)";
            } else {
                document.getElementById(themes[i].id).style.background = "rgba(217, 217, 217, 0.38)";
            }
        }

        this.theme = idTheme;
    }

    initialiserActionTransmettreCouleursTheme(actionTransmettreCouleursTheme){
        this.actionTransmettreCouleursTheme = actionTransmettreCouleursTheme;
    }

}