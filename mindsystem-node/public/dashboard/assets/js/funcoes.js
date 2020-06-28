let login_usuario;
let id_usuario;

function redirecionar_login() {
    window.location.href = '../../../login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario;
    id_usuario = sessionStorage.id_usuario;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        validar_sessao();
        user_name.innerHTML = login_usuario;
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuario/sessao/${login_usuario}`, {
            cache: 'no-store'
        })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {
        cache: 'no-store'
    });
}