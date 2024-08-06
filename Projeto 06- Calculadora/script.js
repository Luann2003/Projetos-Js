let result = document.getElementById('result');

let currentValor = '';

const updateResult = (number) => {
    currentValor += number;
    result.innerHTML = currentValor;
}

const back = document.getElementById('delete').addEventListener('click', () => {
    currentValor = currentValor.slice(0, -1);
    result.innerHTML = currentValor;
});

const clean = document.getElementById('clean').addEventListener('click', () => {
    result.textContent = '';
    currentValor = '';
});

const mais = document.getElementById('mais').addEventListener('click', () => {
    updateResult('+');
});

const menos = document.getElementById('menos').addEventListener('click', () => {
    updateResult('-');
});

const dividir = document.getElementById('dividir').addEventListener('click', () => {
    updateResult('/');
});

const multiplicar = document.getElementById('multiplicar').addEventListener('click', () => {
    updateResult('*');
});

const igual = document.getElementById('igual').addEventListener('click', () =>{
        result.innerHTML = eval(currentValor);
});

const ponto = document.getElementById('ponto').addEventListener('click', () =>{
    updateResult('.');
})

const zero = document.getElementById('0').addEventListener('click', () => {
    updateResult('0');
});

const um = document.getElementById('1').addEventListener('click', () => {
    updateResult('1');
});

const dois = document.getElementById('2').addEventListener('click', () => {
    updateResult('2');
});

const tres = document.getElementById('3').addEventListener('click', () => {
    updateResult('3');
});

const quatro = document.getElementById('4').addEventListener('click', () => {
    updateResult('4');
});

const cinco = document.getElementById('5').addEventListener('click', () => {
    updateResult('5');
});

const seis = document.getElementById('6').addEventListener('click', () => {
    updateResult('6');
});

const sete = document.getElementById('7').addEventListener('click', () => {
    updateResult('7');
});

const oito = document.getElementById('8').addEventListener('click', () => {
    updateResult('8');
});

const nove = document.getElementById('9').addEventListener('click', () => {
    updateResult('9');
});

