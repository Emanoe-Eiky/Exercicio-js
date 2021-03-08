function boaNoticia (nota){
    if(nota >= 7){
        console.log('Aprovado' + nota)
    }
}
boaNoticia(8.1)
boaNoticia(6.1)

function seForVedadeFalo(valor){
    if(valor){
        console.log('vedadeiro... ' + valor)
    }
}

seForVedadeFalo() //falso
seForVedadeFalo(null) //false
seForVedadeFalo(undefined) //false 
seForVedadeFalo('') //false
seForVedadeFalo(0) //false
seForVedadeFalo(-1) //verdadeiro
seForVedadeFalo(' ') //verdadeiro
seForVedadeFalo('?') //verdadeiro
seForVedadeFalo({}) //vedadeiro
