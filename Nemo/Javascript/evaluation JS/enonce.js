/*
 1. créer une variable de chaque type primitif et les afficher dans la console
 */

let slt = prompt('comment tu va');
document.write(slt);
let nombre = 123;
console.log(nombre);
let html = ('<p> Hello </p>');
document.write(html);
let tableau = ['1', '2', '3'];
document.write(tableau);
let attention = alert("salut");

/* 2. déclarer et définir trois variables numériques.

- Si elles sont toutes égales, écrire : « Les trois variables sont identiques. »
- Si seulement deux sont identiques, écrire : « deux des variables sont de valeurs égales. »
- Sinon, écrire : « Les trois variables sont différentes. »
*/

/* 3.
Etape 1 - créer les variables suivantes :

*/

let num = 255;
let txt = "deux-cent-cinquante-cinq";
let flt = 7.23;

/*
    num qui contient le nombre 255
    txt qui contient la chaîne de caractère 255
    bin qui contient la valeur booléenne vraie
    flt qui contient la valeur 7,23

Etape 2 - créer les variables suivantes :

    Appliquez à num l'opérateur d'incrémentation
    Concaténez à la chaîne txt la chaîne " est ici une chaîne de caractères"
    Inversez la valeur logique de bin
    Ajoutez à flt la valeur contenue dans num

*/

/* 4. créer les variables suivantes :

    num qui contient le nombre 23
    txt qui contient la chaîne de caractère 33
    Affichez le résultat de txt + num avec la commande console.log( txt + num );
    Affichez le résultat de num + txt
*/

let num = 23;
let txt = "trente-trois";
console.log( txt + num );
console.log( num + txt );


/*
Ce programme met en évidence (sélectionner les propositions qui sont exactes) :
    1- que la variable txt a été traitée comme un nombre
    2- que la variable num a été traitée comme une chaîne de caractères
    3- que le langage JavaScript réalise des conversions automatiques
    4- qu'il est dangereux de faire des opérations avec des variables de types différents
    5- qu'il faut explicitement écrire les conversions dans le script pour ne pas avoir de mauvaises surprises
    6- que le langage JavaScript est faiblement typé
    7- que le langage JavaScript est fortement typé
 */
// 2 - 3 - 4 - 5 - 6

/* 5. créer les variables suivantes :
    num qui contient le nombre 23
    txt qui contient la chaine de caractère 33
    tmp qui contient le nombre 0
*p
Convertir la chaîne contenue dans txt en nombre et mettre le résultat dans tmp

Ajouter à num le contenu de tmp

Afficher le résultat dans la console
 */

let num = 23;
let txt = "trente-trois";
let tmp = 0 ;
txt = 33;
document.write(txt); 
num + tmp;
console.log(num + tmp);

/* 6. Reprenez l'exercice précédent mais sans la variable tmp.

Créer les variables suivantes :
    num qui contient le nombre 23
    txt qui contient la chaine de caractère 33
    
Convertir la chaîne contenue dans txt en nombre et ajouter à num

Afficher le résultat dans la console
 */

let num = 23;
    let txt = "trente-trois";
    txt = 33;
    console.log(num + txt);

/* 7. Créez un tableau qui se nomme tablo et qui contient 1, 2 et 3
     
Accédez au 2ème élément du tableau tablo et rangez la valeur dans une variable nommée item

Remplacez le 2ème élément du tableau par le nombre 5

Ajoutez une ligne de code qui ajoute la valeur 13 à la fin du tableau

 */
     let tablo = ['1', '2', '3'];
     document.write(tablo);

/* 8. Ecrivez une fonction nommée isTooLong qui :

    prend une chaîne de caractères comme argument
    renvoie vrai dans une boîte de dialogue si la longueur de la chaîne dépasse 10 caractères
    renvoie faux dans une boîte de dialogue dans les autres cas

    appelez la fonction pour la tester et affichez chaque résultat
 */

    /* 9. Créez un tableau qui contient les prénoms des élèves d'EDEN School Paris

Affichez dans la page la liste des élèves.
 */

   let tab = ['Nathan', 'Daniel', 'Mathias', 'Tom', 'Jonas', 'Killian', 'leny', 'brice', 'melchior', 'hugo', ];
   document.write(tab);

/* 10. Demandez à l'utilisateur d'indiquer la saison

Ecrivez le script qui affichera la phrase correctement
Ex : 'printemps' => 'Nous sommes au printemps'
     'été' => 'Nous sommes en été'
N'oubliez pas de gérer les erreurs de saisie
 */
