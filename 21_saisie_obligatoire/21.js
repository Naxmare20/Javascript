for (let i = 0; i < 100; i++) {
  let chiffre = prompt("Entrez une valeur");
  if (isNaN(chiffre)) {
    alert("Entrez une valeur");
  } else if (chiffre == "") {
    alert("Entrez une valeur");
  } else {
    document.write(chiffre);
    break;
  }
}
