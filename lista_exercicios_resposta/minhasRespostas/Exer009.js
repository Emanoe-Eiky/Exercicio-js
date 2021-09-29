function classificaAlunos (nota){
    let  notaCorrigida = arredondar(nota)
    if ( notaCorrigida >= 40){
        console.log(`A provado com nota ${notaCorrigida}`);
    } else{
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if( nota % 5 > 2){
        return nota  + ( 5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAlunos(100)
classificaAlunos(20)
classificaAlunos(90)
classificaAlunos(60)
classificaAlunos(70)