const nota = [7.5, 5.4, 8.9, 9.4, 6.5]
for(let i in nota){
    console.log(i, nota[i])
}

const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 23,
    sexo: 'F'
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}