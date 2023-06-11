const livros = require('./lista-livros');
const menorValor = require('./menorValor');
const troca = require('./troca');

              // 1
for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual)
  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];
  troca(livros, menor);
}

console.log(livros)
