const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);


const clienteEmString = JSON.stringify(dados); // vai transformar objeto em string

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString); // vai transformar a string em objeto

console.log(objetoCliente);