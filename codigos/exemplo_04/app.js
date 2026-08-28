// * / - + %

let num = 11;
//--------------------
let mult = num * 2;
console.log(mult);  // 20
let div = num / 2;
console.log(div); // 5
let sub = num - 2;
console.log(sub); // 8
let sum = num + 2;
console.log(sum); // 12

// resto de divisão %
let resto = num % 3;
console.log(resto); // 1

// ++ --


document.getElementById("row").innerHTML = ''

for (let i = 0; i < 10; i++) {

    document.getElementById("row").innerHTML += `
     <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <img src="https://picsum.photos/200/100" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card’s content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

    
    `
}


let tabela = ''

for (let i = 0; i < 10; i++) {
    tabela += `
     <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Profissão</th>
    </tr>
    `
}

document.getElementById("teste").innerHTML = tabela