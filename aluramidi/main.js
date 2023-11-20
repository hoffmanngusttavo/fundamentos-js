

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];
    const idTocaSom = `#som_${som}`;

    tecla.onclick = function (){
        tocaSom(idTocaSom);
    };

    tecla.onkeydown = function (evento){
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    };

}