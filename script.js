let cores = document.getElementsByClassName('color');
let corSelecionada = document.getElementById('selected-color');
let pixelsQuadro = document.querySelectorAll('#pixel-board .pixel');
// ADICIONANDO EVENT LISTENER EM TODAS AS CORES
// for (let i = 0; i <= cores.length - 1; i += 1) {    
//     cores[i].addEventListener('click', selecionaCor);    
// }    

cores[0].addEventListener('click', selecionaCorUm)
cores[1].addEventListener('click', selecionaCorDois)
cores[2].addEventListener('click', selecionaCorTres)
cores[3].addEventListener('click', selecionaCorQuatro)

// pixelsQuadro.addEventListener('click', colorirPixel)

for (let i = 0; i <= pixelsQuadro.length - 1; i += 1) {    
    pixelsQuadro[i].addEventListener('click', colorirPixel)    
}
function selecionaCorUm() {   
    corSelecionada.id = cores[0].id;
    console.log('Selecionou a cor UM')
}
function selecionaCorDois() {   
    corSelecionada.id = cores[1].id;
    console.log('Selecionou a cor DOIS')
}
function selecionaCorTres() {   
    corSelecionada.id = cores[2].id;
    console.log('Selecionou a cor TRES')
}
function selecionaCorQuatro() {   
    corSelecionada.id = cores[3].id;
    console.log('Selecionou a cor QUATRO')
}

function colorirPixel(){     
    console.log('colore pixel')
}