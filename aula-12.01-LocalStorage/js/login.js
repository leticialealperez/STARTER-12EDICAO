let usuario1 = {
    email: 'joao@teste.com',
    password: '1234',
    contatos: []
}

let usuario2 = {
    email: 'maria@teste.com',
    password: '5678',
    contatos: [
        {
            nome: 'Paola',
            telefone: '519999999'
        }
    ]
}

let listaUsuarios = [usuario1, usuario2]
localStorage.setItem('usuarios', JSON.stringify(listaUsuarios))

// captura de um elemento do HTML
const formularioHTML = document.getElementById('formulario-login')


// addEventListener - fica observando um evento e quando ele acontecer executa a função que a gente passar
formularioHTML.addEventListener('submit', (evento) => {
    // remover o comportamento padrão de refresh da página
    evento.preventDefault()

    // capturar o input email
    const email = document.getElementById('email').value

    // capturar o input de password
    const password = document.getElementById('password').value


    // verificar se o usuário existe 
    const usuarioEncontrado = listaUsuarios.find((usuario) => usuario.email === email && usuario.password === password)


    // capturar o checkbox checado
    const checkbox = document.querySelector('input[name="logged"]:checked').value
    console.log(checkbox)

    if(usuarioEncontrado) {
        
        //salva o objeto no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))


        // redirecionar o usuário para uma outra página dentro do projeto
        window.location.href = './contatos.html'

    } else {
        alert("Verifique e-mail e senha!")
    }
    

})


// LOCALSTORAGE SÓ ARMAZENA STRINGS
// coisas que podem ser salvas diretamente no localStorage - strings, number, boolean

// Array ou Objeto - converter em JSON

// JSON --> Array ou Objeto
// JSON.parse(objJSON)

// Array ou Objeto --> JSON
// JSON.stringify(lista)





// GET - busca/lista/traz info do localStorage
// localStorage.getItem('nomeRegistro')


// SET - adicionar/criar info localStorage
// localStorage.setItem('nomeRegistro', )


// REMOVE


// CLEAR - 