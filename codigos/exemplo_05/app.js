// var / let / const
// const PI = 3.14;
let div = document.getElementById("resultado");

let numero = parseFloat(prompt("Digite um número:"));
// let numero = 10
let tipoDado = typeof numero;

div.innerHTML = `O número digitado foi ${numero} e o tipo de dado do número é: ${tipoDado}`

// Potência
let potencia = Math.pow(numero,2);

div.innerHTML += `<br>A potência do número digitado é: ${potencia}`

let PI = Math.PI;
div.innerHTML += `<br>O valor de PI é: ${PI}`

let volumeEsfera = (4 * Math.PI * Math.pow(numero,3)) / 3;
div.innerHTML += `<br>O volume da esfera é: ${volumeEsfera}`


// raiz quadrada
let raizQuadrada = Math.sqrt(numero);
div.innerHTML += `<br>A raiz quadrada do número digitado é: ${raizQuadrada}`

// raiz cúbica
let raizCubica = Math.cbrt(numero);
div.innerHTML += `<br>A raiz cúbica do número digitado é: ${raizCubica}`

// raiz sétima
let raizSetima = Math.pow(numero, 1/7);
div.innerHTML += `<br>A raiz sétima do número digitado é: ${raizSetima}`

document.title = "FATEC"

numero = 10.467
let numeroArredondado = Math.round(numero);
div.innerHTML += `<br>O número ${numero} arredondado é: ${numeroArredondado}`

//ceil arredonda para cima
let numeroArredondadoParaCima = Math.ceil(numero);
div.innerHTML += `<br>O número ${numero} arredondado para cima é: ${numeroArredondadoParaCima}`

//floor arredonda para baixo
let numeroArredondadoParaBaixo = Math.floor(numero);
div.innerHTML += `<br>O número ${numero} arredondado para baixo é: ${numeroArredondadoParaBaixo}`