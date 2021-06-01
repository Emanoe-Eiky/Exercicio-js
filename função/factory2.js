function   criarProdutos(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProdutos('nootboock', 2500.40))
console.log(criarProdutos('ipad', 300.67))