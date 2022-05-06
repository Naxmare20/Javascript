// partie 1 exo / exo fait sans switch //
//
// let jours = prompt("Quel jour sommes nous");
//let dimanche = 'dimanche';
//let inconnu = 'jour inconnu';
//for(let i = 0; i < 1; i++){
//    if(jours === 'dimanche'){
//        document.write(dimanche);
//    }
//   else{
//       document.write(inconnu);
//   }
//
//} 
//
// partie 2 exo / exo fait avec switch // 
let jours = prompt("Quel jour sommes nous");
 switch(jours){
   case 'lundi':
     if(jours === 'lundi'){
         document.write("tu t'es tromper de jours , recommence");
     }
   break;
   case 'Mardi':
       if(jours === 'Mardi'){
        document.write("je pense que tu es fatiguer , recommence") ;
       }
       break;
    case 'Mercredi':
        if(jours === 'Mercredi'){
            document.write("Daniel a fait un date mais bon c'est pas le bon jours , recommence");
        }
        break;
        case 'Jeudi':
            if(jours === 'Jeudi'){
                document.write("C'est bientot le weekend mais bon toujours pas ça , recommence");
            }
            break;
            case 'Vendredi':
        if(jours === 'Vendredi'){
            document.write("Ce soir t'es en weekend mais toujours pas la bonne date , recommence");
        }
        break;
        case 'Samedi':
        if(jours === 'Samedi'){
            document.write("C'est le weekend mais c'est pas le bon jours , recommence");
        }
        break;
        case 'Dimanche':
        if(jours === 'Dimanche'){
            document.write("C'est bien j'espere que tu as trouver du premier coup");
        }
        break;
        default : 
            document.write('je crois que tu as mal marquer , redéfini ta phrase');
 }