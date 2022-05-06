
let saisie = prompt("Choisisser un nombre");
do {
    let saisie = prompt("Choisisser un nombre");
    if (saisie <= 50){
        alert("votre valeur est trop petit par rapport a 50")
    } else if (saisie >= 100){
        alert("votre valeur est trop grande par rapport a 100")
    } 
    else {
        document.write("Vous avez entrez " + saisie)
    }
} 
while (saisie <= 50 || saisie >= 100)

