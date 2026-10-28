let nomes = []
let repetir = true;
let arr_nomes = document.getElementById("resultado");

do {

    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
    repetir = confirm("Deseja adicionar outro nome?");
    console.log(nomes);

    arr_nomes.innerHTML = ""; // apagando o conteúdo do div para não duplicar os nomes
    for (let i = 0; i < nomes.length; i++) {
        if (i % 2 == 0) {
            arr_nomes.innerHTML += `<h3>${nomes[i].toUpperCase()}</h3>`
        } else {
            arr_nomes.innerHTML += `<h3>${nomes[i].toLowerCase()}</h3>`
        }
    }



} while (repetir)


// }while(repetir === true)

//  let repetir = confirm("Deseja adicionar outro nome?");
//  console.log(repetir);