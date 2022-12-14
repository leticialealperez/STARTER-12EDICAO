// encontrar os numeros pares da listas

let listaNumeros = [14, 25, 38, 17, -7, 8];

// tamanho => 6
// ultimo indice => 5
// ultima posicao === tamanho - 1
// tamanho !== ultimo indice




// parametro => define na escrita da função
function verificaPrimo(valorNumerico) {
    
    let divisores = 0;

    for(let contador = 1; contador <= valorNumerico; contador++) {

        if(valorNumerico % contador === 0) {
            divisores = divisores + 1
        }

    }

    if(divisores > 2) {
        console.log(`O número ${valorNumerico} não é primo`)
    } else {
        console.log(`O número ${valorNumerico} é primo`)
    }
}

for(let indice = 0; indice < listaNumeros.length;  indice++) {
    // if(listaNumeros[indice] % 2 === 0){
    //     console.log(`O valor ${listaNumeros[indice]} é par!`)
    // }

    verificaPrimo(listaNumeros[indice]) // 0 => listaNumeros[0]
}


verificaPrimo(100)
verificaPrimo(78)
verificaPrimo(5)
verificaPrimo(27)

