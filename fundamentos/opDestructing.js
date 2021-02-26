//Novo atributo do ES2015
const pessoas = { 
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradoro: 'Rua abc',
        numero: 234
     }

}

const {nome, idade} = pessoas
console.log(nome)

const {nome: n, idade: i} = pessoas
console.log(n, i)

const {casa, rua} = pessoas
console.log(casa)

const {endereco:{logradoro, numero}} = pessoas
console.log(logradoro, numero)