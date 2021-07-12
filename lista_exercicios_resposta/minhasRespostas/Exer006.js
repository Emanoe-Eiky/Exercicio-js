function capitaSiples (capitalInicial, taxa, tempo){
    return capitalInicial + (capitalInicial * taxa * tempo)
}

const capitalCompostos = (capitalInicial, taxa, tempo) =>{
    return capitalInicial * (1+taxa) ** tempo} 


console.log(capitaSiples(100, 10/100, 2))
console.log(capitalCompostos(100, 10/100, 2))