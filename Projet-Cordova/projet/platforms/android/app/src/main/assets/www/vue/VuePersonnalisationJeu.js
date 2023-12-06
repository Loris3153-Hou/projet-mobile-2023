class VuePersonnalisationJeu {
    constructor() {
        this.html = document.getElementById("html-vue-personnalisation-jeu").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }

}