
const html = document.querySelector('html');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBT = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span');
const imgBTIniciarPausar = document.querySelector('#start-pause img');
const timer = document.querySelector('#timer');
const musicaInput = document.querySelector('#alternar-musica');
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const musicaStart = new Audio("/sons/play.wav");
const musicaPause = new Audio("/sons/pause.mp3");
const musicaAlert = new Audio("/sons/beep.mp3");

musica.loop = true;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musicaInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
});


const btFC = document.querySelector('.app__card-button--foco');
btFC.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    btFC.classList.add('active');
});

const btCurto = document.querySelector('.app__card-button--curto');
btCurto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    btCurto.classList.add('active');
});

const btLongo = document.querySelector('.app__card-button--longo');
btLongo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    btLongo.classList.add('active');
});


function alterarContexto(contexto) {

    mostrarTempo();

    botoes.forEach(function(botao){
        botao.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML = `
                Que tal dar uma respirada ?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
                `
            break;

        case "descanso-longo":
            titulo.innerHTML = `
                    Hora de voltar a superfície.<br>
                    <strong class="app__title-strong">Faça uma pausa longa.</strong>
                    `
            break;

        default:
            break;
    }
}



const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        musicaAlert.play()
        alert('Tempo finalizado!')
        zerar()
        return;
    }
    mostrarTempo();
    tempoDecorridoEmSegundos -= 1;
}

startPauseBT.addEventListener('click', iniciarOuPausar)


function iniciarOuPausar() {
    if(intervaloId){
        musicaPause.play()
        zerar()
        return
    }
   
    textoIniciarPausar.textContent = 'Pausar';
    imgBTIniciarPausar.setAttribute('src', '/imagens/pause.png');
    musicaStart.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId) 
    intervaloId = null;
    textoIniciarPausar.textContent = 'Começar';
    imgBTIniciarPausar.setAttribute('src', '/imagens/play_arrow.png');
}


function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempoFormatado}`
}

mostrarTempo();