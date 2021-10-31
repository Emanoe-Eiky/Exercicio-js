Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco1": 3.45}',
    '{"nome": "Caderno", "preco1": 31.45}',
    '{"nome": "Kid Lapis", "preco1": 30.45}',
    '{"nome": "Caneta", "preco1": 3.45}'
]

// Retone um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)