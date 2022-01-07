
function anoBisseto (ano){
    if(ano <= 0 ){
        return false
    } else if (ano % 400 == 0){
        return true
    } else if (ano % 100 == 0){
        return true
    }else if (ano % 4 == 0){
        return true
    }else{
        return false
    }
}

console.log(anoBisseto(2021))
console.log(anoBisseto(1998))
console.log(anoBisseto(2022))
console.log(anoBisseto(1995))
console.log(anoBisseto(1992))