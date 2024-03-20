class VueAnimation {
    constructor() {
        this.html = document.getElementById("page-animation-application").innerHTML;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        this.faireTournerCarre();
    }

    async faireTournerCarre(){
        let inverse;
        for (var i = 1; i <= 25; i++) {
            inverse = 50-i+1;
            let carre = document.getElementById('carre' + i);
            let carreInverse = document.getElementById('carre' + inverse);

            carre.style.display = 'block';
            console.log(carre.id);
            switch(carre.id){
                case 'carre17':
                    carre.style.color = 'blue';
                    break;
                case 'carre18':
                    carre.style.color = 'yellow';
                    break;
                case 'carre19':
                    carre.style.color = 'red';
                    break;
                default:
                    break;
            }
            carreInverse.style.display = 'block';
            carre.style.backgroundColor = 'black';
            carreInverse.style.backgroundColor = 'black';
            gsap.to('#carre' + i, {
                rotate: '+=360',
                ease: 'back.out',
                duration: 0.2
            })
            gsap.to('#carre' + inverse, {
                rotate: '+=360',
                ease: 'back.out',
                duration: 0.2
            })
            await this.sleep(400);
        }
    }
break;
    sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
    }
}