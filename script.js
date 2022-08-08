const cores = document.getElementsByClassName('color');
const corSelecionada = document.getElementById('selected-color');
const botaoLimpar = document.getElementById('clear-board');
const tamanhoQuadro = document.getElementById('board-size');
const criaQuadro = document.getElementById('generate-board');
const quadroPixel = document.getElementById('pixel-board');

geraRbg()
adicionaColorir()


// ADICIONANDO EVENT LISTENER EM TODAS AS CORES
for (let i = 0; i <= cores.length - 1; i += 1) {
    cores[i].addEventListener('click', selecionaCor);
}
// ADICIONANDO EVENT LISTENER NO BOTAO DE LIMPAR QUADRO  
botaoLimpar.addEventListener('click', limpaQuadro)
// ADICIONANDO EVENT LISTENER NO BOTAO DE GERAR QUADRO
criaQuadro.addEventListener('click', criaBoard)

function selecionaCor() {
    corSelecionada.style.backgroundColor = event.target.style.backgroundColor
        for (let i = 0; i <= cores.length - 1; i++) {
        cores[i].classList.remove('selected')
    }
    event.target.classList.add('selected')
}
function colorirPixel() {
    event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}
function limpaQuadro() {
    let pixelsQuadro = document.querySelectorAll('#pixel-board .pixel');
    for (let i = 0; i <= pixelsQuadro.length - 1; i += 1) {        
        pixelsQuadro[i].style.backgroundColor = 'white';
    }
    adicionaColorir()
}

function criaBoard() {
    
    quadroPixel.innerHTML = '';
    let tamanho = tamanhoQuadro.value;
    if (tamanho === '') {
        alert('Board inválido!')
    }
    if (tamanho < 5) {
        tamanho = 5;
    }
    if (tamanho > 50) {
        tamanho = 50;
    }
    for (let i = 0; i < tamanho; i += 1) {
        console.log('Cria Linha')
        let linhaPixel = document.createElement('div');
        quadroPixel.append(linhaPixel);
        linhaPixel.classList = 'linha-pixel-board';
        for (let j = 0; j < tamanho; j += 1) {
            let pixel = document.createElement('li');
            linhaPixel.append(pixel)
            pixel.classList = 'pixel'
        }
    }
    adicionaColorir()
}
function adicionaColorir() {
    let pixelsQuadro = document.querySelectorAll('#pixel-board .pixel');
    for (let i = 0; i <= pixelsQuadro.length - 1; i += 1) {
        pixelsQuadro[i].addEventListener('click', colorirPixel)
    }
}
function geraRbg() {
    cores[0].style.backgroundColor = 'black'
    corSelecionada.style.backgroundColor = 'black';
    let min = Math.ceil(0);
    let max = Math.floor(255);
    for (let i = 1; i <= 3; i += 1) {
        let r = (Math.floor(Math.random() * (max - min) + min));
        let g = (Math.floor(Math.random() * (max - min) + min));
        let b = (Math.floor(Math.random() * (max - min) + min));
        let rgb = `rgb(${r},${g},${b})`;
        cores[i].style.backgroundColor = rgb;
        console.log(rgb)
    }
}
