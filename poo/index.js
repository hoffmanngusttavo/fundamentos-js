import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Gustavo'
console.log(novoAdmin.nome)