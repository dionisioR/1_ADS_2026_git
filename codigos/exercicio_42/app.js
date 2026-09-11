let idade_anos = prompt("Digite sua idade em anos: ");

if (idade_anos > 0) {
    let idade_dias = idade_anos * 365;
    document.getElementById("resultado").innerHTML = `
   <h1>
    Anos: ${idade_anos} <br>
    Dias: ${idade_dias}
   </h1>
`
    console.log(`Anos: ${idade_anos} - Dias: ${idade_dias} `);
} else {
    document.getElementById("resultado").innerHTML = `
   <h1 style="color:red">
    Idade inválida! <br>
    A idade deve ser maior que 0.
   </h1>
`
console.log('Idade inválida! \nA idade deve ser maior que 0.');
}