 let nb1 = Number(prompt("Quelle age a tu ?"));
 let nb2 = Number(prompt("On est quel jours"));
let nb3 = Number(prompt("On est quel moi"));
if (nb1 > nb2){
    nb1 = nb3*2
} else {
    nb1++
    if (nb2 > nb3){
        nb1 = nb2 + nb3*3
    } else{
        nb1 = 0
        nb3 = nb3*2 + nb2
    }
}
console.log(nb1);
console.log(nb2);
console.log(nb3);