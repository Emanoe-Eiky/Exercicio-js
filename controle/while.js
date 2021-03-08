function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}
 
let opcao = 0

while (opcao = -3){
    opcao = getInteiroAleatorioEntre(-1, 1)
    console.log(`Opçao escolheda foi ${opcao}.`)
}
 
console.log('Até a proxima!')
