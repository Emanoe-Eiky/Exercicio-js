const peso1 = 1.0
const peso2 = Number('2.0')
console.log (peso1, peso2)
console.log (Number.isInteger(peso1))
console.log (Number.isInteger(peso2))

const validacao1 = 9.432
const validacao2 = 6.889

const total = validacao1 * peso1 + validacao2 * peso2
const media = total / (peso2 + peso1)

console.log (media.toFixed(2))
console.log(media.toString(2)) //converte para binário
console.log(typeof media) 