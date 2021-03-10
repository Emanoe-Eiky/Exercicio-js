function area (largura, Altura){
    const area = largura * Altura
    if(area > 20){
        console.log(`valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(2, 4))
console.log(area(2))
console.log(area())
console.log(area(2, 3 ,34, 2, 5,6))
console.log(area(5, 5))
