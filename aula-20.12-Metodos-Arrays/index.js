let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4 ]

// 1 - Escreva um algoritmo para buscar apenas os números positivos da lista
    const positivos = listaNumeros.filter((valor, indice, array) => valor >= 0);
    console.log(positivos);

    
// 2 - Escreva um algoritmo para buscar apenas os números pares e positivos da lista
    let paresEPositivos = listaNumeros.filter((valor, indice, array) => valor%2 === 0 && valor > 0)
    console.log(paresEPositivos) 

    
// 3 - Escreva um algoritmo para buscar apenas os números ímpares (positivos ou negativos) da lista
    let impares = listaNumeros.filter((valor, indice, array) => valor % 2 !== 0)
    console.log(impares)
    
// 4 - Escreva um algoritmo para buscar apenas os números repetidos na lista
// FILTER
let repetidos = listaNumeros.filter((valor1, indice1, array1) => {
    //
    
    console.log(`PRIMEIRA EXECUÇÃO - [${indice1}] = ${valor1}`)
   

    // SOME
    const repetiu = listaNumeros.some((valor2, indice2, array2) => {
        
         let indice = (indice2 + indice1) + 1

        if(array2.length > indice) {
            console.log(`SOME - [${indice}] = ${array2[indice]}`) 
            return array2[indice] === valor1
        }

        // console.log(`SOME - [${indice}] = ${array2[indice]}`) 

        return false
    })

    return repetiu
})

console.log(repetidos)

// 5 - Escreva um algoritmo para informar se existe algum número maior que 50 na lista

const maiorQue50 = listaNumeros.some((value) => value > 50)
    console.log(maiorQue50);


// 6 - Escreva um algoritmo para informar se todos os números da lista são maiores que 50
    const igualOuMaiorQue = listaNumeros.every((value) => value > 50)
    console.log(igualOuMaiorQue)

// 7 - Escreva um algoritmo para somar todos os números da lista e mostrar o resultado dessa soma
    let soma = listaNumeros.reduce((acc,valor)=>{
    return acc+= valor
    },0)

    console.log(soma)


// 8 - Escreva um algoritmo para buscar o índice do número 24
const numero24 = listaNumeros.findIndex((valor) => valor == 24)
console.log(numero24)


// 9 - Escreva um algoritmo para buscar um número na lista que seja maior ou igual a 90
const maiorIgual = listaNumeros.find((valor) => valor >= 90 ) 
console.log(maiorIgual);


// 10 - Escreva um algoritmo para percorrer a lista e criar uma nova lista, de mesmo tamanho, com os valores da lista ao quadrado
let allList = listaNumeros.map ((valor, indice, array) => valor * valor)
console.log(allList)
