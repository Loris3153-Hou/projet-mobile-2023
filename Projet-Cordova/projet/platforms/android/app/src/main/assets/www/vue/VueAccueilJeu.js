class VueAccueilJeu {
    constructor() {
        this.html = document.getElementById("html-vue-accueil-jeu").innerHTML;
        this.joueurCourant = null
    }

    recupererJoueur(joueurCourant){
        this.joueurCourant = joueurCourant
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-recuperation-pseudo").addEventListener("submit", evenement =>this.recupererPseudo(evenement));
    }

    recupererPseudo(evenement){
        evenement.preventDefault()
        console.log("valeur du pseudo : " + document.getElementById("input-text-pseudo").value)
        this.joueurCourant.setPseudoJoueur(document.getElementById("input-text-pseudo").value)
    }



}