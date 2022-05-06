let saisie = prompt("Dit oui");
do {
    let saisie = prompt("Dit oui");
    if (saisie === "oui"){
        alert("Vous avez perdu")
    } else if (saisie === "non"){
        alert("vous avez perdu")
    } 
    else {
        document.write("aller continuont")
    }
} 
while (saisie === "non" || saisie === "oui")