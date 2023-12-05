

let livros = [];

const urlEndpointlivros = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

buscarLivros();

async function buscarLivros(){

    const response = await fetch(urlEndpointlivros);
    livros = await response.json();
    
    let livrosComDesconto = aplicarDescontoLivros(livros);

    exibirLivrosNaTela(livrosComDesconto);

}


const botoes = document.querySelectorAll(".btn");

botoes.forEach( btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const btn = document.getElementById(this.id);
    const categoria = btn.value;

   const livrosFiltrados = (categoria == 'disponivel' )
                        ? filtrarPorDisponibilidade()
                        : filtrarPorCategoria(categoria)

    exibirLivrosNaTela(livrosFiltrados);
    if((categoria == 'disponivel' )){
        const valorTotal = calcularValortotal(livrosFiltrados);
        exibirValorTotalDisponivel(valorTotal);
    }

}


function calcularValortotal(livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

function exibirValorTotalDisponivel(valor){
    elementoComValorTotal.innerHTML += 
    `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
  </div>`;
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function aplicarDescontoLivros(livros){
    const desconto = 0.03;
    const listaComDesconto = livros.map( livro => {
        return {
            ...livro, preco : livro.preco - (livro.preco * desconto)
        }
    })
    return listaComDesconto;
}


const btnOrdenar = document.getElementById("btnOrdenarPorPreco");
btnOrdenar.addEventListener('click', ordenarLivros);

function ordenarLivros(){
    let ordenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(ordenados);
}


const elementoSecao = document.getElementById('livros');
const elementoComValorTotal = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaLivros){

    elementoComValorTotal.innerHTML = '';
    elementoSecao.innerHTML = '';

    listaLivros.forEach(livro => {
        
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

        elementoSecao.innerHTML += 
        `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" 
            alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`;

    });

}

