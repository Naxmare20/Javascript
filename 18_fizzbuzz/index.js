function calc() {
  let nb1 = prompt("Entrez une valeur");
//   if (!isNaN(nb1)) {
//    return alert("Merci d'entrez une valeur");
//   }
  if (nb1 % 15 === 0){
      console.log("FuzzBuzz");
  } else if (nb1 % 5 === 0){
      console.log("Buzz");
  } else if (nb1 % 3 === 0){
      console.log("Fuzz");
  }
}
console.log(calc());
