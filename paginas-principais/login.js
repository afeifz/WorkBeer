document.getElementById('botao-continuar').addEventListener('click', function() {
    // Obter os dados inseridos pelo usuário
    var emailInput = document.getElementById('email').value.trim();
    var senhaInput = document.getElementById('senha').value.trim();

    // Obter os dados registrados do localStorage
    var dadosRegistro = JSON.parse(localStorage.getItem('dadosRegistro'));

    // Verificar se os dados inseridos correspondem aos dados registrados
    if (dadosRegistro && emailInput === dadosRegistro.email && senhaInput === dadosRegistro.senha) {
        alert('Login bem-sucedido! Redirecionando para a página inicial...');
        // Redirecionar para a página inicial após o login bem-sucedido (substitua 'index.html' pelo caminho correto)

        window.location.href = 'eventos.html';
       
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
});