document.getElementById('botao-continuar').addEventListener('click', function() {
    // Pegar os valores dos campos
    var nome = document.getElementById('nome').value.trim();
    var sobrenome = document.getElementById('sobrenome').value.trim();
    var email = document.getElementById('email').value.trim();
    var ddd = document.getElementById('ddd').value.trim();
    var numero = document.getElementById('numero').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var data = document.getElementById('data').value;

    // Verificar se algum campo está vazio
    if (nome === '' || sobrenome === '' || email === '' || ddd === '' || numero === '' || senha === '' || data === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar se o e-mail é válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Verificar se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // Verificar se o número de telefone tem 11 dígitos
    if (ddd.length !== 2 || numero.length !== 9) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Se tudo estiver correto, exibir mensagem de sucesso
    alert('Registro realizado com sucesso!');
    // Aqui você pode adicionar código para enviar os dados para o servidor, por exemplo

    var dadosRegistro = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        ddd: ddd,
        numero: numero,
        senha: senha,
        data: data,
        biografia: ''
    };
    console.log('Dados antes de salvar:', dadosRegistro);
    localStorage.setItem('dadosRegistro', JSON.stringify(dadosRegistro));
    console.log('Dados após salvar:', JSON.parse(localStorage.getItem('dadosRegistro')));
    localStorage.setItem('nomeUsuario', nome); // Adicionando o nome do usuário ao localStorage
    localStorage.setItem('sobrenomeUsuario', sobrenome); // Adicionando o sobrenome do usuário ao localStorage


    alert('Registro realizado com sucesso!');
    // Aqui você pode adicionar código para redirecionar o usuário para a página de login
    window.location.href = 'paginas-principais/login.html';


});
