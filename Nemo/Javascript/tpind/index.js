/*
 * EXERCICE
 * Array - Best Friends
 *

let people = ["Greg", "Mary", "Devon", "James"];

    1- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console
    2- Supprimer "Greg" du tableau > afficher.
    3- Supprimer "James" du tableau > afficher.
    4- Ajouter "Matt" en début de tableau > afficher.
    5- Ajouter votre prénom en fin de tableau > afficher.
    6- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console jusqu'à "Mary" puis sortir de la boucle (petite recherche à faire).
    7- Faire une copie du tableau avec slice : cette copie ne doit PAS inclure ni "Mary" ni "Matt".
    8- Trouver l'indice de "Mary".
    9- Trouver l'indice de "Foo" (le résultat devrait être -1).
    10- Redéfinir la variable avec le tableau de départ : let people = ["Greg", "Mary", "Devon", "James"];.
    Avec la propriété splice, supprimer "Devon" et ajouter "Elizabeth" et "Artie". Le résultat attendu est le suivant >> ["Greg", "Mary", "Elizabeth", "Artie", "James"].
    11- Créer une nouvelle variable appelée withBob contenant le tableau people concaténé avec la string "Bob".


 */
let arr = ["Greg", "Mary", "Devon", "James"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.shift();
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("Matt");
console.log(arr);
arr.push("Nathan");
console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "Mary") {
//     console.log(arr[i]);
//     break;
//   }
//   console.log(arr[i]);
// }

console.log(arr.slice(2));
console.log(arr.indexOf('Mary'));
console.log(arr.indexOf('Foo'));
arr = ["Greg", "Mary", "Devon", "James"];
arr.splice(2, 1 , "Elizabeth", "Artie");
console.log(arr);

let WhitBob = arr;
console.log (WhitBob + "Bob");
