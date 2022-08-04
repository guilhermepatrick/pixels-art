let cores = document.getElementsByClassName('color');
let corSelecionada = document.getElementById('selected-color');
let pixelsQuadro = document.querySelectorAll('#pixel-board .pixel');

// ADICIONANDO EVENT LISTENER EM TODAS AS CORES
for (let i = 0; i <= cores.length - 1; i += 1) {    
    cores[i].addEventListener('click', selecionaCor);    
} 
// ADICIONANDO EVENT LISTENER EM TODOS PIXELS DO QUADRO  
for (let i = 0; i <= pixelsQuadro.length - 1; i += 1) {    
    pixelsQuadro[i].addEventListener('click', colorirPixel)    
}
function selecionaCor() {   
    corSelecionada.id = event.target.id
    console.log('Selecionou a cor')
}

function colorirPixel(){
    event.target.id = corSelecionada.id;
    console.log('colore pixel')
}