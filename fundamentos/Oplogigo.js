function comprar(trabalho1, trabalho2){
    const comprarSorve = trabalho1 || trabalho2
    const  comprarTv50 = trabalho1  &&  trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = ! comprarSorve
    return{comprarSorve, comprarTv50, comprarTv32, manterSaudavel}
}

console.log (comprar (true, false))