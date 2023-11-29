class VueParametre {
    constructor() {
        this.html = document.getElementById("html-vue-parametre").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
    }

}