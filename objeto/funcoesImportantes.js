const pessoas ={
    nome: 'Rebeca',
    idade: 21,
    peso: 43,
}
 
console.log(Object.keys(pessoas))
console.log(Object.values(pessoas))
console.log(Object.entries(pessoas))

Object.entries(pessoas).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoas, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoas.dataNascimento = '01/01/2017'
console.log(pessoas.dataNascimento)
console.log(Object.keys(pessoas))

// Object.assign (ECmAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = { c: 3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 11234
console.log(obj)
