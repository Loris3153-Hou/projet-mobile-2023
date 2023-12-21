class VuePersonnalisationJeu {
    constructor() {
        this.html = document.getElementById("html-vue-personnalisation-jeu").innerHTML;
        this.idElementCliquer = "";
        this.liste = {};
        this.actionTransmettreListe = null;
        this.imageURI= "";
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        for (let i = 1; i <= 9; i++) {
            this.liste[i.toString()] = "";
            document.getElementById(i.toString()).addEventListener('click', evenement=>this.choisirImage(evenement));
        }
        let listeEnJSON = JSON.stringify(this.liste);
        console.log("liste en json" + listeEnJSON);
    }

    choisirImage = (evenement) => {
        console.log(evenement.target.id);
        this.idElementCliquer = evenement.target.id;
        navigator.camera.getPicture(this.imageSucces, this.erreur, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });
    }

    imageSucces = (imageURI) => {
        console.log(imageURI);
        if (imageURI.indexOf('file://') !== 0) {
            imageURI = 'file://' + imageURI;
        }
        window.resolveLocalFileSystemURL(imageURI, (fileEntry) => {
            console.log(JSON.stringify(fileEntry));

            var elem = document.getElementById(this.idElementCliquer);
            const fullPath = fileEntry.fullPath;
            console.log(fullPath);
            elem.src = fullPath;
            this.liste[this.idElementCliquer] = fullPath;
            this.actionTransmettreListe(this.liste);

        }, this.erreur);
    }

    erreur(message) {
            console.error('Erreur : ' + message);
    }

    initialiserActionTransmettreListe(actionTransmettreListe){
        this.actionTransmettreListe = actionTransmettreListe;
    }
}

