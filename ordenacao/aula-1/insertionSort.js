const livros = require('./lista-livros');
const troca = require('./troca');


function insertionSort(lista) {

  for (let atual = 1; atual < lista.length; atual++) {
    let analise = atual;
    while (lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise);
      analise--
    }
  }
  console.log(lista);
}

insertionSort(livros);

