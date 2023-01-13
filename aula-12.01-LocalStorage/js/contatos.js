let userLogged = localStorage.getItem('usuarioLogado')


document.addEventListener('DOMContentLoaded', () => {

    // null, undefined ou '' => !false => true
    if(!userLogged) {
        // alert("Você precisar estar logado para acessar essa página")

        window.location.href = './login.html'
    }

    userLogged = JSON.parse(userLogged)
    console.log(userLogged)
    
})

const formularioCadastro = document.getElementById('cadastro-contato')

formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nomeContato = document.getElementById('nome-contato').value
    const telefone = document.getElementById('telefone').value

    const novoContato = {
        nome: nomeContato,
        telefone: telefone,
    }

    userLogged.contatos.push(novoContato)
    console.log(userLogged)

    localStorage.setItem('usuarioLogado', JSON.stringify(userLogged))
    
})

const btnSair = document.getElementById('sair')
btnSair.addEventListener('click', () => {
    // atualizar a lista de usuarios com o dado do usuarioLogado

    // remover item do storage
    localStorage.removeItem('usuarioLogado')

    // redireciona para pagina de login
    window.location.href = './login.html'
})




// GET - buscar dados
// JSON.parse()