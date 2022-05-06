// --1-- TANT QUE // WHILE

/*
variable pour compter les tours

tant que (condition si TRUE){
    code à répéter ...
    ...


    incrémentation du compteur (pour passer au tour de coucle suivant)

}
*/
// let i = 1; // compteur initialisé a 0 

//while( i <= 10){ // tant que i est inférieur ou egal a 5
    
    //document.write(i + '<br>').style.color = "red";

    // incrématation
   // i++;
//}

//while( i <= 5 ){
   // if (i % 2 == 0) { // valeur de i
    //document.write('<p style="color: blue;">' + i + '</p>');
//} else { // sinon si i est impaire

   // document.write('<p style="color: red;">' + i + '</p>');
//}

// oncrémentation
//i++

//}

// --2-- boucle FOR / POUR

/*
pour (initialisation du compteur ; condition ; incrémentation){
    script a répeter
}

*/
//for(let i = 0; i <= 5; i++){
    //document.write(i + '<br>')
//}
//let star = "*";
//for(i = 0;i <= 6; i++ ){
 ///   document.write(star);
 //    star += '*';
//    document.write( '<br>');
    
//}
//document.write('<hr>');
//document.write('<select>');

   // document.write('<option>2020</option>');
//for(let i = 2020; i >= 1; i--){
  //  document.write('<option>'+ i +'</option>');
//}
   // document.write('<option>1</option>');

//document.write('</select>');
//document.write('<hr>');

//

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);