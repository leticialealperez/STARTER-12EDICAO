let turma = []
let continua;


 for(let contador = 1; contador <= 5; contador++) {
    let aluno = {}

    const nome = prompt('Digite o nome do aluno: ')
    aluno.nome = nome

    const idade = Number(prompt('Digite a idade do aluno: '))
    aluno.idade = idade

    const matricula = Number(prompt('Informe a matricula do aluno: '))
    aluno.matricula = matricula

    turma.push(aluno)
 }   
    

const turmaFiltrada = turma.filter( (valor) => valor.idade > 20 )
console.log(turma)
console.log(turmaFiltrada)