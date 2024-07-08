let quebrada = document.getElementById("quebrada");
const ligada = document.getElementById("ligada");
const desligada = document.getElementById("desligada");
const divImagem = document.querySelector(".imagem");


ligada.addEventListener("click", ligar);
desligada.addEventListener("click", desligar);

function ligar(){
    if(divImagem.classList.contains("imagem-1")){
        divImagem.classList.remove("imagem-1");
        divImagem.classList.add("imagem-2");
    }
}

function desligar(){
    if(divImagem.classList.contains("imagem-2")){
        divImagem.classList.remove("imagem-2");
        divImagem.classList.add("imagem-1");
    }
}

quebrada.addEventListener('dblclick', function() {
    divImagem.classList.remove("imagem-1");
    divImagem.classList.add("imagem-3")
});

quebrada.addEventListener('mouseover', function() {
    divImagem.classList.remove("imagem-1");
    divImagem.classList.add("imagem-2")
});

quebrada.addEventListener('mouseout', function() {
    divImagem.classList.remove("imagem-2");
    divImagem.classList.add("imagem-1")
});