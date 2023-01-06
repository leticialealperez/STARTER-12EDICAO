// buscar 1 elemento específico dentro da DOM

// getElementById() - método que faz com o JS percorra a DOM e encontre um elemento cujo id seja igual ao passado no argumento da função
const tituloHTML = document.getElementById('titulo')

// innerText - texto que está dentro do elemento capturado
console.log(tituloHTML.innerText)

// innerHTML - código/conteudo HTML que está dentro do elemento capturado
console.log(tituloHTML.innerHTML)


// querySelector() - método que faz com o JS percorra a DOM e encontre um elemento cujo seletor atenda ao seletor passado no argumento da função
const tituloHTMLQuery = document.querySelector('#titulo')
console.log(tituloHTMLQuery)


function mudarCor() {
    // modificar estilo
    tituloHTML.style = 'color: red;'

    // setAttribute - SET - adição
    tituloHTML.setAttribute('class', 'fonteBonita')

}

function removerClasse() {
    tituloHTML.removeAttribute('class')
    tituloHTML.setAttribute('style', 'font-size: 38px; color: green;')
}


function mudarTexto() {
    const novoTitulo = prompt("Digite o novo título")
    tituloHTML.innerText = novoTitulo
}





// buscar várias elementos da DOM