let str = prompt("Entrez une valeur");
let ordi = Math.floor(Math.random() * 4);
if (str == "" && str == Number) {
  alert("entrez une valeur");
}

if (ordi === 1) {
  ordi = "pierre";
} else if (ordi === 2) {
  ordi = "ciseau";
} else {
  ordi = "feuille";
}

if (str == "pierre") {
  if (ordi == "pierre") {
    alert("égalité");
  } else if (ordi == "ciseau") {
    alert("joueur a gagner avec pierre");
  } else {
    alert("l'ordinateur a gagner avec feuille");
  }
}

if (str == "feuille") {
  if (ordi == "feuille") {
    alert("égalité");
  } else if (ordi == "pierre") {
    alert("joueur a gagner avec feuille");
  } else {
    alert("l'ordinateur a gagner avec ciseau");
  }
}

if (str == "ciseau") {
  if (ordi == "ciseau") {
    alert("égalité");
  } else if (ordi == "feuille") {
    alert("joueur a gagner avec ciseau");
  } else {
    alert("l'ordinateur a gagner avec pierre");
  }
}
