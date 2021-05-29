const fabricante = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricante.forEach(imprimir)

fabricante.forEach(function(a){
    console.log(a)
})

//erom function

fabricante.forEach(a => console.log(a))