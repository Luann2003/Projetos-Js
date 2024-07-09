let buttons = document.getElementsByClassName("btn");
let divImagem = document.querySelector(".imagem");
let auto = document.getElementById("automatico");

let currentColor = 1;

for (let btn of buttons) {
    btn.addEventListener("click", function () {
        changeImage(btn.id);
    });
}

auto.addEventListener("click", function(){
    setInterval(automatico, 2000); // Muda a imagem a cada 2 segundos
});

function changeImage(color) {
    if (color === "desligado") {
        divImagem.className = "imagem imagem-1";
    } else if (color === "vermelho") {
        divImagem.className = "imagem imagem-2";
    } else if (color === "amarelo") {
        divImagem.className = "imagem imagem-3";
    } else if (color === "verde") {
        divImagem.className = "imagem imagem-4";
    }
}

function automatico() {
    if (currentColor === 1) {
        divImagem.className = "imagem imagem-1";
        currentColor = 2;
    } else if (currentColor === 2) {
        divImagem.className = "imagem imagem-2";
        currentColor = 3;
    } else if (currentColor === 3) {
        divImagem.className = "imagem imagem-3";
        currentColor = 4;
    } else if (currentColor === 4) {
        divImagem.className = "imagem imagem-4";
        currentColor = 1;
    }
}



