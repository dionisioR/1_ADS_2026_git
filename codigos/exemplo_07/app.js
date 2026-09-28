// let dia = prompt("Digite o dia da semana (0-6):");

// if (dia == 0) {
//     document.getElementById("resultado").innerHTML = "final de semana";
// }else{
//     document.getElementById("resultado").innerHTML = "dia de semana";
// }

// //----------------------------------------

// let dia = prompt("Digite o dia da semana (0-6):");
// // let div = document.getElementById("resultado");

// // 0 == '0'
// if(dia == 0){
//     div.innerHTML = "domingo";
// }else{
//     if(dia == 1){
//         div.innerHTML = "segunda-feira";
//     }else{
//         if(dia == 2){
//             div.innerHTML = "terça-feira";
//         }else{
//             if(dia == 3){
//                 div.innerHTML = "quarta-feira";
//             }else{
//                 if(dia == 4){
//                     div.innerHTML = "quinta-feira";
//                 }else{
//                     if(dia == 5){
//                         div.innerHTML = "sexta-feira";
//                     }else{
//                         if(dia == 6){
//                             div.innerHTML = "sábado";
//                         }else{
//                             div.innerHTML = "dia inválido";
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

//----------------------------------------

// let dia = prompt("Digite o dia da semana (0-6):");
// let div = document.getElementById("resultado");

// if(dia == 0) {
//     div.innerHTML = "domingo";
// }else if(dia == 1) {
//     div.innerHTML = "segunda-feira";
// }else if(dia == 2) {
//     div.innerHTML = "terça-feira";
// }else if(dia == 3) {
//     div.innerHTML = "quarta-feira";
// }else if(dia == 4) {
//     div.innerHTML = "quinta-feira";
// }else if(dia == 5) {
//     div.innerHTML = "sexta-feira";
// }else if(dia == 6) {
//     div.innerHTML = "sábado";
// }else {
//     div.innerHTML = "dia inválido";
// }

//----------------------------------------

// let dia = parseFloat(prompt("Digite o dia da semana (0-6):"));
// console.log(dia);
// console.log(typeof 4);
// console.log(typeof 4.5);
// let div = document.getElementById("resultado");

// if (dia == 0) {
//     div.innerHTML = "domingo";
// } else if (dia == 1) {
//     div.innerHTML = "segunda-feira";
// } else if (dia == 2) {
//     div.innerHTML = "terça-feira";
// } else if (dia == 3) {
//     div.innerHTML = "quarta-feira";
// } else if (dia == 4) {
//     div.innerHTML = "quinta-feira";
// } else if (dia == 5) {
//     div.innerHTML = "sexta-feira";
// } else if (dia == 6) {
//     div.innerHTML = "sábado";
// } else {

//     if (isNaN(dia)) {
//         div.innerHTML = "o valor digitado não é um número";
//     } else {
//         div.innerHTML = "dia inválido";
//     }

// }

//-----------------------------------------------
let dia = parseFloat(prompt("Digite o dia da semana (0-6):"));
let div = document.getElementById("resultado");

console.log(typeof 5);
console.log(typeof (5.5.toFixed(2)));

switch(dia){
    case 0:
        div.innerHTML = 'Domingo';
        break
    case 1:
        div.innerHTML = 'Segunda';
        break
    case 2:
        div.innerHTML = 'Terça';
        break
    case 3:
        div.innerHTML = 'Quarta';
        break
    case 4:
        div.innerHTML = 'Quinta';
        break
    case 5:
        div.innerHTML = 'Sexta';
        break
    case 6:
        div.innerHTML = 'Sábado';
        break
    default:
        div.innerHTML = "Valor inválido!!!"
}

console.log(`${dia} \n texto`);
console.log(`${dia} \n ${dia}`);
console.log(dia + "\n" + dia);