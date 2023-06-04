const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const listaSet = new Set(nomes);

// o set remove itens duplicados
const nomesAtualizados = [...listaSet];

console.log(nomesAtualizados);
