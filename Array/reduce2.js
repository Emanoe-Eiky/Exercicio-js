const alunos = [
    {nome: 'Joãos', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.0, bolsista: true},
    {nome: 'Pedro', nota: 8.9, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

// Desafio 1: Todos os alunos são bolsista
const todosBolsistas = (resultado, bolsista ) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: algum aluno é blsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))