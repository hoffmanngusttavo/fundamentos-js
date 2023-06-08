

const cliente = {
    nome: 'Gustavo',
    idade : 32,
    cpf: '080.234.987-32'
}

console.log(`Olá ${cliente.nome} , você tem ${cliente.idade} e seus primeiros 3 dígitos do cpf são : ${cliente.cpf.substring(0,3)}`)



const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
  };

  console.log(`O nome do cachorro é : ${pet["nome"]}`)



  const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem)

   objPersonagem.nome = "Gandalf Hoff"

   console.log(objPersonagem.nome)