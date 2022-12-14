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

// ---------------      PRIMEIRA RESOLUÇÃO  --------------------------
let repetidos1 = listaNumeros.filter((valor1, indice1, array) => {
    
    // console.log(`FILTER - [${indice1}] = ${valor1}`)
   

    // SOME
    const repetiu = array.some((valor2, indice2) => {
        
        let indiceAuxiliar = (indice1 + indice2) + 1

        if(indiceAuxiliar < array.length) {
            // console.log(`SOME - [${indiceAuxiliar}] = ${array[indiceAuxiliar]}`) 
            return array[indiceAuxiliar] === valor1
        }

        return false
    })

    return repetiu
})

console.log('')
console.log('PRIMEIRA RESOLUÇÃO ', repetidos1)



// ---------------      SEGUNDA RESOLUÇÃO  --------------------------
let repetidos2 = listaNumeros.filter((valorFilter, indiceFilter, arrayFilter) => {
   
    // SOME - true ou false
    const repetiu = arrayFilter.some((valorSome, indiceSome) => {
        
        if(indiceSome <= indiceFilter) {
            return false
        }

        return valorSome === valorFilter
    })

    return repetiu
})

console.log('')
console.log('SEGUNDA RESOLUÇÃO ', repetidos2)



// ---------------      TERCEIRA RESOLUÇÃO  --------------------------
console.log('')

let ordenados = listaNumeros.sort()
console.log('TERCEIRA RESOLUÇÃO - ordena -> numeros iguais seguidos', ordenados)

let repetidos3 = ordenados.filter((valor, indice, array) => valor === array[indice + 1])
console.log('TERCEIRA RESOLUÇÃO ', repetidos3)



// ---------------      QUARTA RESOLUÇÃO  --------------------------
let repetidos4 = listaNumeros.filter(( valor, indice, array) => array.indexOf(valor) !== indice)

console.log('')
console.log('QUARTA RESOLUÇÃO ', repetidos4)





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
