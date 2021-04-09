let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
// O this na função arrow é um this associado ao contesto a qual a função foi escrita