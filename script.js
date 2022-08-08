let cores = document.getElementsByClassName('color');
let corSelecionada = document.getElementById('selected-color');
let botaoLimpar = document.getElementById('clear-board');
let tamanhoQuadro = document.getElementById('board-size');
let criaQuadro = document.getElementById('generate-board');
let quadroPixel = document.getElementById('pixel-board'); // elemento pai para receber os filhos

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
    corSelecionada.id = event.target.id
    for (let i = 0; i <= cores.length - 1; i++) {
        cores[i].classList.remove('selected')
    }
    event.target.classList.add('selected')
}
function colorirPixel() {
    event.target.id = corSelecionada.id;
    console.log('colore pixel')
}
function limpaQuadro() {
    let pixelsQuadro = document.querySelectorAll('#pixel-board .pixel');
    for (let i = 0; i <= pixelsQuadro.length - 1; i += 1) {
        pixelsQuadro[i].id = 'branco'
    }
    adicionaColorir()
}
function pegaValores() {

}
function criaBoard() {
    let pixelsQuadro = document.querySelectorAll('#pixel-board .pixel');
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