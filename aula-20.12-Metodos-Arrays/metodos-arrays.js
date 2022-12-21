// indices e valores = [24, 78, 58] => tamanho/length => 3

let listaNumeros = [24, 78, 73, 58]

// buscamos um determinado VALOR dentro de uma lista -> FIND
// ou é tipo de dado armazenado na lista
// ou é undefined
const impar = listaNumeros.find(  (valor, indice, array) => valor % 2 !== 0 )
console.log(impar)



// findIndex -> busca um determinado valor e retorna a posição desse valor dentro da lista
// quando encontra o dado retorna a posição do mesmo no array
// quando não encontra retorna -1
const indiceEncontrado = listaNumeros.findIndex( (valor, indice, array) => valor % 2 !== 0)

console.log(indiceEncontrado)

listaNumeros[2] = 74
console.log(listaNumeros)


// SOME -> algum -> percorre toda lista e verifica se ao menos 1 elemento atende a condição estabelecida
// true pra quando 1 dado atende a condição
// false pra quando nenhum dado atende a condição
const existe = listaNumeros.some((valor, indice, array) => valor % 2 !== 0)
console.log(existe)


// EVERY -> TODOS -> percorre toda lista e verifica se todos os elementos atendem a condição estabelecida
// true pra quando todos  atendem a condição
// false pra quando ao menos 1 dado não atende a condição
const todosAtendem = listaNumeros.every((valor, indice, array) =>  valor % 2 === 0)
console.log(todosAtendem)




// FILTER -> filtra a lista com base na condição passada
// RETORNA UMA NOVA LISTA
const maiorQue = listaNumeros.filter((valor, indice, array) => valor > 60)
console.log(maiorQue)


// MAP => percorre toda lista, modifica conforme a gente quiser e retorna um novo array com os valores modificados
const novaListaDobro = listaNumeros.map( (valor, indice, array) => {
    if(valor > 60) {
        return `${valor}`
    }

})

const novaNovaListaDobro = novaListaDobro.filter((valor, indice, array) => valor !== undefined)

console.log(novaListaDobro)
console.log(novaNovaListaDobro)
console.log(listaNumeros)




// REDUCE -> reduzir todos os dados de uma lista a um unico dado
const soma = listaNumeros.reduce( (acumulador, valor) => {
    if(acumulador > valor) {
        return acumulador
    }

    if(valor > acumulador) {
        return valor
    }
}, 0)

console.log(soma)

