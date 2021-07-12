function bhaskara (ax2, bx, c){
    let resultados = []
    let delta = (bx **2) - (4 * ax2 * c)
    if (delta < 0){
        return 'Delta é negativo'
    }
    let x1 = (-bx + Math.sqrt (delta))/2* ax2
    let x2 = (-bx - Math.sqrt(delta))/2 * ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))














function bhaskara (ax2, bx, c){
    let resultados = []
    let delta = (ax2 **2) - (4 * bx * c )
    if(delta < 0){
        return 'Delta é negativo'
    }
    let x1 = (- bx + Math.sqrt (delta))/ 2* ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(bhaskara(1, 3, 4))

function bhaskara (ax2, bx, c){
    let resultados = []
    let delta  = (ax2 **2) - (4 * bx * c)
    if (delta < 0){
        return 'Delta é negativo!'
    }
    let x1 = (-bx + Math.sqrt(delta))/2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) /2 * ax2
    resultados.push(x1.toFixed(2))
    resultados.push(x2.toFixed(2))
    return resultados
}

console.log(bhaskara( 2, -5, 12))