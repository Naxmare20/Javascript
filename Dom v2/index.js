// // let link = document.getElementById("google");
// // let link = document.getElementsByClassName("google");
// // let link = document.getElementsByTagName(".a");
let link = document.querySelector("#google");
let daniel = document.querySelector("body");
// // let link = document.querySelectorAll('a');

console.log(link);

// // -- acceder au lien vers lequel pointue la balise
console.log(link.href);
// // -- acceder a l ID
console.log(link.id);

// // -- acceder a la classe
console.log(link.className);

// // -- acceder au texte/contenu de la balise
console.log(link.textContent);

// // -- modifier le contenu
link.textContent = "Aller chez Eden School ? ";

// // -- créer un nouvel élément
let span = document.createElement("span");

// // -- lui donner un ID
span.id = "Mon";
// // -- lui ajouter un contenu
span.textContent = "Friday Yay !";
// // -- l'insérer dans le HTML
link.appendChild(span);

/* -------------------------------
           EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h2> ayant un contenu de votre choix :
"A la niche !".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.

-------------------------------- */

let h2 = document.createElement("h2");
let a = document.createElement("a");
a.textContent = "A la niche Daniel ";
a.href = "https://fr.wikipedia.org/wiki/Darling_in_the_Franxx";
h2.appendChild(a);
a.style.color = "red";
a.style.textDecoration = "none";
document.body.appendChild(h2);
