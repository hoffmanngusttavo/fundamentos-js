const nomes = ["Evaldo", "Mari", "Camis"];

//1º exemplo : cada elemento do for chama uma função interna
nomes.forEach(function (nome) {
  console.log(nome);
});

//2º exemplo : cada elemento do for chama uma função interna com arrow function
nomes.forEach((nome) => {
  console.log(nome);
});


function imprimeNome(nome) {
  console.log(nome);
}

//3º exemplo : cada elemento do for chama uma função externa
nomes.forEach(imprimeNome);
