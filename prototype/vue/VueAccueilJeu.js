class VueAccueilJeu {
    constructor() {
        this.html = document.getElementById("html-vue-accueil-jeu").innerHTML;
        this.actionAllerPagePersonnalisationJeu = null;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }

}