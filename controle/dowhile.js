function getInteiroAleatorioEntrte(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
do{
    opcao = getInteiroAleatorioEntrte(-1, 2)
    console.log(`A opção escolhida foi ${opcao}.`)
} while(opcao != -1) //a expreção fica depois do bloco, antes do bloco vem o 'DO'

console.log('Até a próxima')
