// 1- declarer les variables

let btn = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let carre = document.querySelector(".rose");
let x = 0;
let y = 0;


// 2- fonction
// action prévues pour interagir avec un user

function deplacerLeft() {
  // augmenter la valeur de la variable de 10px
  x += 10;
  // applique le changement de style
  carre.style.left = x + "px";
    tespP[i].onclick = function(){
       rP += 10;
        gP -= 5;
         bP += 12;
         this.style.color = '('+ rP +','+ gP +','+ bP +')';
     }
}
// change la couleur de fond du carré
// variable.style.backgroundColor
function deplacerRight() {
  x -= 10;
  carre.style.left = x + "px";
}
function deplacerUp() {
  y -= 10;
  carre.style.top = y + "px";
}
function deplacerDown() {
  y += 10;
  carre.style.top = y + "px";
}

// 3- Ecouteurs évènement avec appel des fonctions
// btn.addEventListener('click', deplacer)

btn.addEventListener("click", deplacerRight);
btn2.addEventListener("click", deplacerDown);
btn3.addEventListener("click", deplacerUp);
btn4.addEventListener("click", deplacerLeft);

// btn.addEventListener("click", function () {
//   carre.style.border = "2px dashed lightblue";
//   carre.style.backgroundColor = "blue";
// });
