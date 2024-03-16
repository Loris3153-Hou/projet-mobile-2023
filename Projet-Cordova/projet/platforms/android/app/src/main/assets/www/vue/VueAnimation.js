class VueAnimation {
    constructor() {
        this.html = document.getElementById("page-animation-application").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;


    }

}