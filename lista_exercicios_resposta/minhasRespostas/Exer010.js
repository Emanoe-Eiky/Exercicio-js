//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificandoNumero (numero) {
    if (numero % 3 == 0){
        return true
    }else{
        return false
    }

}

console.log(verificandoNumero(3))
console.log(verificandoNumero(150))
console.log(verificandoNumero(10))
console.log(verificandoNumero(1000))