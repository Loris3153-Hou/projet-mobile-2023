class VueJeu {
    constructor() {
        this.html = document.getElementById("html-vue-jeu").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }

}