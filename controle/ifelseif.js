Number.prototype.entre = function (incio, fim){
    return this >=  incio && this <= fim
}

const imprimirResultadoFinal = function (nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Horra!')
    }else if (nota.entre(7, 8.99)){
        console.log('Aprovado!')
    }else if (nota.entre(4, 6.99)){
        console.log('Reculperação!')
    }else if (nota.entre(0, 3.99)){
        console.log('Reprovado!')
    }else{
        console.log('Nota invalida!')
    }

    console.log('Final')
}
imprimirResultadoFinal(9)
imprimirResultadoFinal(8)
imprimirResultadoFinal(5)
imprimirResultadoFinal(3)
imprimirResultadoFinal(-32)