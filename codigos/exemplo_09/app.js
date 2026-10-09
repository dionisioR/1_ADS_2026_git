let div = document.getElementById("resultado")

let i = 0
while(i <= 10){
     i++    //11
    if(i % 2 == 0){
        // azul
        div.innerHTML += `<p class="btn btn-outline-primary w-25 mx-2">${i}</p>` 
    }else{
        // vermelho
        div.innerHTML += `<p class="btn btn-outline-danger w-25 mx-2">${i}</p>` 
    }
   
}