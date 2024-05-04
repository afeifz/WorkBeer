document.addEventListener('DOMContentLoaded', function() {
    var botaoEnviar = document.getElementById('botaoEnviar');

    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', function() {
            var novoEmail = document.getElementById('emailInput').value.trim();
            var novaSenha = document.getElementById('senhaInput').value.trim();

            if (novoEmail !== '' && novaSenha !== '') {
                // Obter o registro atual do localStorage
                var dadosRegistro = JSON.parse(localStorage.getItem('dadosRegistro'));

                // Verificar se o registro existe e atualizar os valores de e-mail e senha
                if (dadosRegistro) {
                    dadosRegistro.email = novoEmail;
                    dadosRegistro.senha = novaSenha;
                    localStorage.setItem('dadosRegistro', JSON.stringify(dadosRegistro));
                    alert('E-mail e senha atualizados com sucesso!');
                } else {
                    alert('Registro não encontrado.');
                }
            } else {
                alert('Por favor, preencha o e-mail e a senha.');
            }
        });
    }
});
