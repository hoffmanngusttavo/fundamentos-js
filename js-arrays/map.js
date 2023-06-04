const notas = [10, 9.5, 8, 7, 6];


//o map precisa como parametro uma função, nesse caso foi utilizado arrow function
// o map vai realizar modificação em cada elemento da lista e retornando o novo valor
const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);
