// document.getElementById("resultado").innerHTML = `<h3>FATEC GT</h3>`;

//--------------------------
// let nome = "FATEC Guaratinguetá";
// document.getElementById("resultado").innerHTML = nome;

//--------------------------
// let nome = prompt("Digite um texto: ");
// document.getElementById("resultado").innerHTML = nome;


// let num_1 = prompt("Digite um número: ");
// let num_2 = prompt("Digite outro número: ");

// let soma = parseFloat(num_1) + parseFloat(num_2);

// document.getElementById("resultado").innerHTML = soma;


// let num_1 = parseFloat(prompt("Digite um número: "));
// let num_2 = parseFloat(prompt("Digite outro número: "));

// let soma = num_1 + num_2;

// document.getElementById("resultado").innerHTML = soma;


// let nome = prompt("Digite seu nome: ");
// let sobrenome = prompt("Digite seu sobrenome: ");
// let idade = prompt("Digite sua idade: ");

// // concatenação
// let texto = "Meu nome é " + nome + ' ' + sobrenome + ' e minha idade é ' + idade + " anos.";

// document.getElementById("resultado").innerHTML = texto;

let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let idade = prompt("Digite sua idade: ");

console.log(typeof nome);

// template string  -  interpolação de variáveis
let texto = `Nome completo ${nome} ${sobrenome} e idade ${idade} anos.`;


document.getElementById("resultado").innerHTML = texto;

alert(texto);