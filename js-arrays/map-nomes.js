const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];


//o map precisa como parametro uma função, nesse caso foi utilizado arrow function
// o map vai realizar modificação em cada elemento da lista e retornando o novo valor
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);
