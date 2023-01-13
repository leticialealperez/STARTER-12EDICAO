// onde esta os contatos?
let userLogged = localStorage.getItem('usuarioLogado')

document.addEventListener('DOMContentLoaded', () => {

    if(!userLogged) {
        window.location.href = './login.html'
    }

    userLogged = JSON.parse(userLogged)

    montarLinhasHTML()
});

const tbody = document.getElementById('lista-contatos')

function montarLinhasHTML() {

    userLogged.contatos.forEach((valor, indice, array) => {
        tbody.innerHTML += `
            <tr>
                <td>${indice + 1}</td>
                <td>${valor.nome}</td>
                <td>${valor.telefone}</td>
                <td>
                    <button>Apagar</button>
                    <button>Editar</button>
                </td>
            </tr>
        
        `
    })
}

const btnSair = document.getElementById('sair')
btnSair.addEventListener('click', () => {
    // atualizar a lista de usuarios com o dado do usuarioLogado

    // remover item do storage
    localStorage.removeItem('usuarioLogado')

    // redireciona para pagina de login
    window.location.href = './login.html'
})
