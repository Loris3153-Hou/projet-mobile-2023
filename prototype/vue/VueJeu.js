class VueJeu {
    constructor() {
        this.html = document.getElementById("html-vue-jeu").innerHTML;
        this.score = 26;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("score-ecran-de-jeu").innerHTML = this.score;
    }

}