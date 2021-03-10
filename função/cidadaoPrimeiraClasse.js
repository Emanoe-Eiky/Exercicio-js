//Função em JS é First-class objetos (Citizens)
//Higher-order function

//Criar de forma literal 
 function fun1 () { }

//Armazenar em uma variavel

const fun2 = function(){ }

//Amazenar em uma array
 
const array = [function(a, b){ return a + b }, fun1, fun2]
console.log(array[0](2,3))

//Amazena em um atributo de um objeto

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passa uma função como parâmetro 

function run(fun){
    fun()
}

run(function(){console.log('Exercutando.....')})

//Uma função pode retornar/ conter ua função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 4)(8)