document.addEventListener('DOMContentLoaded', function() {
    var btnNotificacoesGerais = document.getElementById('btnNotificacoesGerais');
    var btnNotificacoesEventos = document.getElementById('btnNotificacoesEventos');
    
    // Adicionando evento de clique para o botão de notificações gerais
    if (btnNotificacoesGerais) {
        btnNotificacoesGerais.addEventListener('click', function() {
            exibirMensagem('Notificações Gerais ativadas!');
        });
    }
    
    // Adicionando evento de clique para o botão de notificações de eventos
    if (btnNotificacoesEventos) {
        btnNotificacoesEventos.addEventListener('click', function() {
            var mensagem = 'Ativar notificações de Eventos';
            var btnAtivar = criarBotaoAtivar();
            var divConteudo = document.getElementById('divConteudo'); // Adicione um ID à div que contém o texto e o botão

            if (divConteudo) {
                // Remover conteúdo existente
                divConteudo.innerHTML = '';

                // Adicionar mensagem e botão à div
                divConteudo.appendChild(document.createTextNode(mensagem));
                divConteudo.appendChild(btnAtivar);
            }
        });
    }
    
    // Função para criar o botão "Ativar"
    function criarBotaoAtivar() {
        var btnAtivar = document.createElement('button');
        btnAtivar.textContent = 'Ativar';
        btnAtivar.addEventListener('click', function() {
            var divConteudo = document.getElementById('divConteudo'); // Adicione um ID à div que contém o texto e o botão

            if (divConteudo) {
                // Remover conteúdo da div
                divConteudo.innerHTML = '';
            }
        });
        return btnAtivar;
    }
    
    // Função para exibir a mensagem na tela
    function exibirMensagem(mensagem) {
        alert(mensagem);
    }
});
