let cad_login = document.querySelector('#cad_login')
let cad_pass = document.querySelector('#cad_pass')
let txt_login = document.querySelector('#txt_login')
let txt_pass = document.querySelector('#txt_pass')
let eye0 = document.querySelector('.img_mostrar0')
let eye1 = document.querySelector('.img_mostrar1')
let login = []
let senha = []
cad_login.focus()

eye0.addEventListener('click', function() { // Função que vai mostrar e ocultar Senha

    if (cad_pass.getAttribute('type') == 'password') {
        eye0.src = 'img/ocultar.png'
        cad_pass.setAttribute('type', 'text')
    } else {
        eye0.src = 'img/mostrar.png'
        cad_pass.setAttribute('type', 'password')
    }

})

eye1.addEventListener('click', function() { // Função que vai mostrar e ocultar Senha

    if (txt_pass.getAttribute('type') == 'password') {
        eye1.src = 'img/ocultar.png'
        txt_pass.setAttribute('type', 'text')
    }
    else {
        eye1.src = 'img/mostrar.png'
        txt_pass.setAttribute('type', 'password')
    }

})

function isOnce(l, s) { // Array 'login' e 'senha' vai armazenar apenas uma vez o Cadastro
    if (l.length && s.length >= 1) {
        return false
    }
    else {
        return true
    }
}

function isLogin(l) { // Verifica se Login foi inserido
    if (l.length > 0) {
        return true
    }
    else {
        return false
    }
}

function isSenha(s) { // Senha que pode ser com apenas 6 Caracteres
    if (s.length >= 6) {
        return true
    }
    else {
        return false
    }
}

function cadastrar() { // Função de Cadastro

    if (isLogin(cad_login.value) && isSenha(cad_pass.value) && isOnce(login, senha)) {
        login.push(cad_login.value)
        senha.push(cad_pass.value)
        alert('Cadastro efetuado com sucesso e somente UMA vez!')
        cad_login.value = ''
        cad_pass.value = ''
        txt_login.focus()
    }
    else {
        alert('Nome de Usuário ou Senha não preenchidos ou Senha não possui mais de 6 caracteres!')
    }

}

function isVerifica(l, p) { // Verifica se Login e Senha estão cadastrados
    if (login.includes(l) && senha.includes(p) == true) {
        return true
    }
    else {
        return false
    }
}

function excluir() { // Função para Deletar Cadastro

    login.pop()
    senha.pop()
    alert('Seu Cadastro foi deletado!')
    cad_login.value = ''
    cad_pass.value = ''
    txt_login.value = ''
    txt_pass.value = ''
    cad_login.focus()

}

function entrar() { // Função de Login

    if (isVerifica(txt_login.value, txt_pass.value)) {
        alert('Seja Bem-Vindo ' + login + '!')
        txt_login.value = ''
        txt_pass.value = ''
    }
    else {
        alert('Cadastro não encontrado!')
    }

}