// Amazenar uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) //o valor de a e b está sendo atribuido nesta linha
  
// Amazenando  uma variavel  dentro de uma função arrow

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3)) 

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))