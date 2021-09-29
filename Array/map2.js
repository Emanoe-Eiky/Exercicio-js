const carrinho = [
    '{"nome": "Borracha", "preco1": 3.45}',
    '{"nome": "Caderno", "preco1": 31.45}',
    '{"nome": "Kid Lapis", "preco1": 30.45}',
    '{"nome": "Caneta", "preco1": 3.45}'
]

// Retone um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco1

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)