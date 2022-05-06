let info = prompt("Combien voulez vous en taille ?");
let étoile = "*";
let div = document.getElementById("sapin");
for (let i = 0; i < info; i++) {
    div.innerHTML += étoile + "<br>";
    étoile += "*";
  
}
