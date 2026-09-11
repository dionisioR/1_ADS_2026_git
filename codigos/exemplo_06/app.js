let div = document.getElementById("resultado");
// let num = parseFloat(prompt("Digite um número: "));

// if(num % 2 == 0){
//     div.innerHTML = "<h1>Par</h1>";
// } else{
//     div.innerHTML = "<h1>Ímpar</h1>";
// }

// let num = prompt("Digite um número: ");
// // let num = "11"

// if(num === 11){
//     div.innerHTML = "<h1>Igual</h1>";
// } else{
//     div.innerHTML = "<h1>Diferente</h1>";
// }


let num = prompt("Digite um número: ");

let result = (num % 2 == 0) ? `<h1>Par</h1>` : `<h1>Ímpar</h1`;

console.log(result);
div.innerHTML = result;
