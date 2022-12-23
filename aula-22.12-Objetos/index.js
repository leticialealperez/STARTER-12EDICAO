

// strings, number, boolean - tipo de dado primitivo homogeneo

// arrays - armazenar mais de um dado por vez - INDICE e VALOR

let listaNumeros = [14, 25, 36]
let listaNomes = ['Joao', 'Maria', 'Pedro']
let listaBooleans = [true, false, false]


// aluno - nome, idade, matricula, cpf, dataNascimento ...
// OBJETOS - tipo de dado heterogeneo

// PROPRIEDADE e VALOR

let aluno = {
    nome: 'João',
    idade: 27,
    matricula: 1102,
    cpf: '123.456.789-89',
    ativo: true
}

let aluno2 = {
    nome: 'Maria',
    idade: 16,
    matricula: 1102,
    cpf: '123.456.789-00',
    ativo: false
}

let aluno3 = {
    nome: 'Joao',
    idade: 24,
    matricula: 1102,
    cpf: '123.456.789-03',
    ativo: true
}

let turma = [aluno, aluno2, aluno3]

// acessar o valor contido da propriedade do objeto
console.log(aluno)
console.log(aluno.nome) // João
console.log(aluno.cpf) // 123.456.789-89



// modificar o valor contido na propriedade do objeto
aluno.nome = 'Pedro'
console.log(aluno) 


console.log(turma)
