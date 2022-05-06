let wave = prompt("combien de tours voulez vous ?");
let tour = prompt("combien de tours voulez vous ?");
let p = 1;
for (let i = 1; i <= wave; i++) {
  document.write("C'est le tour n°" + i);
  document.write("<br>");
}
while (p <= tour) {
  document.write("C'est le tour n°" + p);
  document.write("<br>");
  p++;
}
