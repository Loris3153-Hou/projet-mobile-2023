class VueParametre {
    constructor() {
        this.html = document.getElementById("html-vue-parametre").innerHTML;
        this.score = 26;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("score-ecran-parametre").innerHTML = this.score;
    }

}