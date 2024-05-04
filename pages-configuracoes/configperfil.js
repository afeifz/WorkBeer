document.addEventListener('DOMContentLoaded', function() {
    var nomeNovoInput = document.getElementById('nomeNovo');
    var sobrenomeNovoInput = document.getElementById('sobrenomeNovo');
    var biografiaNovoInput = document.getElementById('biografiaTexto');
    var botaoEnviar = document.getElementById('alterar-perfil');
    var biografiaPerfil = document.getElementById('biografiaPerfil');

    // Verificar se os inputs e o botão existem antes de adicionar os listeners
    if (nomeNovoInput && sobrenomeNovoInput && biografiaNovoInput && botaoEnviar) {
        botaoEnviar.addEventListener('click', function() {
            var novoNome = nomeNovoInput.value.trim();
            var novoSobrenome = sobrenomeNovoInput.value.trim();
            var novaBiografia = biografiaNovoInput.value.trim();

            if (novoNome !== '' && novoSobrenome !== '' && novaBiografia !== '') {
                // Atualizar dados no localStorage
                atualizarDadosLocalStorage(novoNome, novoSobrenome, novaBiografia);

                // Exibir mensagem de sucesso ou redirecionar o usuário
                alert('Perfil atualizado com sucesso!');

                // Atualizar a biografia na seção do perfil
                biografiaPerfil.textContent = novaBiografia;
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    function atualizarDadosLocalStorage(novoNome, novoSobrenome, novaBiografia) {
        var dadosRegistro = JSON.parse(localStorage.getItem('dadosRegistro'));
        if (dadosRegistro) {
            dadosRegistro.nome = novoNome;
            dadosRegistro.sobrenome = novoSobrenome;
            dadosRegistro.biografia = novaBiografia;
            localStorage.setItem('dadosRegistro', JSON.stringify(dadosRegistro));

            // Atualizar também as variáveis individuais 'nomeUsuario', 'sobrenomeUsuario' e 'biografiaUsuario' no localStorage
            localStorage.setItem('nomeUsuario', novoNome);
            localStorage.setItem('sobrenomeUsuario', novoSobrenome);
            localStorage.setItem('biografiaUsuario', novaBiografia);
        }
    }
});
