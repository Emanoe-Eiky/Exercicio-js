// Closure é o escopo criado quando uma função é declarada
//Esse escopo permite  função acessar e manipular variáveis externas a função 

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFucao = fora()
console.log(minhaFucao())