function formatarValorDecimal (valor){
    valorReal = `R$  ${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valorReal)
}

formatarValorDecimal(0.1 + 0.2)