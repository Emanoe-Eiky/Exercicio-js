const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // método que tira um index de um array da ultima possição
console.log(pilotos)

pilotos.push('Verstappen') // metodo que add 
console.log(pilotos)

pilotos.shift() //remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // add na primeira posição do array
console.log(pilotos)

// splice pde remover e add elementos 

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // taz em um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // taz da posiçao 1 a 3
console.log(algunsPilotos2)
