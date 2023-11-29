class VueAccueilJeu {
    constructor() {
        this.html = document.getElementById("html-vue-accueil-jeu").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("image-galerie-ecran-accueil").addEventListener("click",evenement =>this.allerPagePersonnalisationJeu(evenement));
    }

    allerPagePersonnalisationJeu(evenement){
        evenement.preventDefault();

        this.window.location.hash = "#perso";
    }

}