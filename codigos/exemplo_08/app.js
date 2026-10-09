let div = document.getElementById("resultado")

for(let i = 0; i <= 100 ; i++){
    console.log(i);

    if(i % 2 == 0){
        // azul
        div.innerHTML += `<p class="btn btn-outline-primary w-25 mx-2">${i}</p>` 
    }else{
        // vermelho
        div.innerHTML += `<p class="btn btn-outline-danger w-25 mx-2">${i}</p>` 
    }
}