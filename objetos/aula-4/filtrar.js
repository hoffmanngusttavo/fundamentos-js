const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento") // verifica se a propriedade endereço não tem a propriedade complemento
    );
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);