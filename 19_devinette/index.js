let ordi = Math.floor(Math.random() * 101);  
console.log(ordi);
  for(let i = 0; i < 6; i++){
      str = parseInt(prompt("Entrez une valeur"));
      if(str === ordi){
          console.log("Bravo le chiffre etait bien " + ordi);
          break;
      } else{
          if (str > ordi){
              alert("Votre Chiffre Est trop Grand");
          } else{
              alert("Votre Chiffre est trop Petit");
          }
      }
  }
  console.log("Bienvenue a toi dans le jeu");
 
  