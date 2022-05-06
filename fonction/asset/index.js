function letterA() {
    return "A";
}
function letterB() {
    return "B";
}
function letterC() {
    return "C";
}

let index;
let result;

result = letterA();
console.log(result);

result += letterC();
console.log(result);

result = letterA();

for(let i = 0; i < 2; i++){
    result += letterB()
}

for(let j = 0; j < 3; j++){
    result += letterC()
    } 

console.log(result);

result = ''

for(let h = 0; h < 2; h++){
    result += letterC() + letterB()
}

result += letterA()
console.log(result);

result = ''

function interro(){
    index = "!";
    return letterC() + letterB() + index
}

result = interro() + letterC() + " " + interro() + letterB() + " " + interro() + letterA()

console.log(result);
 