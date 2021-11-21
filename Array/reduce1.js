const alunos = [
    {nome: 'Joãos', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.0, bolsista: true},
    {nome: 'Pedro', nota: 8.9, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual

}, 10)
console.log(resultado)
