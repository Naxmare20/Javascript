/*alert('a la niche !');

// 1 - declarer une variable

// var(prenom)

let joueur;
let joueur_1;
let joueurUn;
// 2 - affecter une variable
prenom ='Pixel';

// 3. afficher dans la console la valeur de la variable
console.log(prenom);

let name = 'Daniel';

//4. reafffection
prenom = 'Mila';
console.log(prenom);

//5. types de variable

let age  = 11;
let taille = 1.4;
let parents = false;

console.log(typeof(age));
console.log(typeof(taille));
console.log(typeof(parents));

// 6. constantes

const PAYS = "France";

// 7- Les boites de dialogue
let info = alert('Info pour le client');
let question = confirm('Question au client');
let form = prompt('Champq à rensigner');

console.log(info);
console.log(question);
console.log(form);

let tonPrenom = prompt('Ton nom');
let niche =  ', a la niche !';
document.write(tonPrenom + ', a la niche !');

let age = prompt('Quel et ton prenom',"");
alert(" ${age} Ala nich ");

let fruit1 = 'pommes',
    fruit2 = 'poires',
    poids1 = 0.8,
    poids2 = 0.7;

document.write('<h3>Vous avez acheté des ' +  fruit1 + ' et des ' +  fruit2 + ' pour un poids total de ' + (poids1 + poids2) + ' kg.</h3>');
console.log('Vous avez acheté des ' +  fruit1 + ' et des ' +  fruit2 + ' pour un poids total de ' + (poids1 + poids2) + ' kg.');
alert('Vous avez acheté des ' +  fruit1 + ' et des ' +  fruit2 + ' pour un poids total de ' + (poids1 + poids2) + ' kg.');

let age = prompt('quelle age a tu')
if(isNaN(age)){
    alert('le nombre est inconnu')
    console.log(age)
}
else if(age >= 18){
    alert('vous avez plus de 18 ans')
    console.log(age)
}else if (age == ""){
    alert('vous avez pas repondu')
    console.log(age)
}
else{
    alert('vous avez pas 18 ans')
    console.log(age)
}

let age = prompt ('Quel Age avez vous ?')
if(isNaN(age)){
    alert('le nombre est inconnu')
    console.log(age)
}
else if(age >= 16){
    alert('bienvenue sur mon site')
}
else{
   window.location.href = "https://fr.wikipedia.org/wiki/Darling_in_the_Franxx";
}

/**
 * Operation sur les variables
 */
// connaitre le type
//let name = 'Harry'
//console.log(typeof(name));

// retourne un entier a partir d'une chaide de caracteres 
//let nb1 = parseInt(prompt('nb ?'));
//let nb2 = prompt('nb ?');

//console.log(typeof(nb1));
//console.log(typeof(nb2));

//let res = nb1 * nb2;
//console.log(res);

 //convertir un Numbrr en String

 // let nb = 10;
 // let str = nb.toString();
 // console.log(nb);
 // console.log(str);
 // console.log(typeof(nb));
 // console.log(typeof(str));

 // -- compter le nb de letrre d'une string
 // let phrase = "Si vous etes aoités , a la niche !";
 //console.log(phrase.length); // 33 

// -- retourner une string en MAJ
// console.log(phrase.toUpperCase());

// -- retour une string en minuscules
// console.log(phrase.toLowerCase());

// -- extraire une partie d'une string
// console.log(phrase.slice(3, 10));
// slice(pt depart + 1, pt d'arrivée)

// -- extraire une partie d'une string 
//console.log(phrase.substring(3, 10));