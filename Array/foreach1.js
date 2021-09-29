const aprovados = ['Agatha',  'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indece, array) {
    console.log(`${indece + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

