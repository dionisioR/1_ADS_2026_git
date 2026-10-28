let nomes = ["João", "Maria", "Pedro", "Ana", "Lucas"];
console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[4]);
console.log(nomes[5]); //undefined

nomes.push("Carla");
console.log(nomes);
console.log(nomes[5]); //Carla

let tamanho = nomes.length; // tamanho do array
console.log(tamanho);

let div = document.getElementById("resultado");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);

    if (i % 2 === 0) {
        div.innerHTML += `
        <strong style="color: blue;">${nomes[i]} </strong>`;
    } else {
        div.innerHTML += `<em style="color: red;">${nomes[i]} </em>`;

    }
}

// let nome = "Gabriel";
// console.log(nome[0]);

document.querySelector("h1").classList.add("titulo");