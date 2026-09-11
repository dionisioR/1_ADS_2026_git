// Crie uma aplicação que receba com quatro números e imprimir a média ponderada, sabendo-se que os pesos são respectivamente 1,2,3 e 4.
let numero_1 = parseFloat(prompt("Digite o primeiro número:"));
let numero_2 = parseFloat(prompt("Digite o segundo número:"));
let numero_3 = parseFloat(prompt("Digite o terceiro número:"));
let numero_4 = parseFloat(prompt("Digite o quarto número:"));

let p1 = 1;
let p2 = 2;
let p3 = 3;
let p4 = 4;

let media = ((numero_1 *p1)+(numero_2 * p2)+(numero_3 * p3)+(numero_4 * p4))/(p1+p2+p3+p4);

document.getElementById("resultado").innerHTML = `A média ponderada é: ${media}.`;