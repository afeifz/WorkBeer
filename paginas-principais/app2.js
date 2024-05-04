// Função para mover eventos confirmados para a seção "Meus Eventos"
function moverEvento(eventoId, secaoMeusEventos) {
    // Seleciona o elemento do evento confirmado pelo ID
    const eventoConfirmado = document.getElementById(eventoId);
    // Seleciona a seção de "Meus Eventos"
    const secao = document.querySelector(secaoMeusEventos);

    // Verifica se o evento e a seção existem antes de mover
    if (eventoConfirmado && secao) {
        // Move o evento confirmado para a seção "Meus Eventos"
        secao.appendChild(eventoConfirmado);
    }
}

// Adiciona um listener para o botão confirmar1
document.getElementById('confirmar1').addEventListener('click', function() {
    moverEvento('evento1', '.secao-meus-eventos');
});

// Adiciona um listener para o botão confirmar2
document.getElementById('confirmar2').addEventListener('click', function() {
    moverEvento('evento2', '.secao-meus-eventos');
});

// Adiciona um listener para o botão confirmar3
document.getElementById('confirmar3').addEventListener('click', function() {
    moverEvento('evento3', '.secao-meus-eventos');
});


// Função para mover eventos confirmados para a seção "Meus Eventos"
function moverEvento(eventoId, secaoMeusEventos) {
    // Seleciona o elemento do evento confirmado pelo ID
    const eventoConfirmado = document.getElementById(eventoId);
    // Seleciona a seção de "Meus Eventos"
    const secao = document.querySelector(secaoMeusEventos);

    // Verifica se o evento e a seção existem antes de mover
    if (eventoConfirmado && secao) {
        // Move o evento confirmado para a seção "Meus Eventos"
        secao.appendChild(eventoConfirmado);
    }
}

// Adiciona um listener para os botões de confirmação
document.getElementById('confirmar1').addEventListener('click', function() {
    moverEvento('evento1', '.secao-meus-eventos');
});

document.getElementById('confirmar2').addEventListener('click', function() {
    moverEvento('evento2', '.secao-meus-eventos');
});

document.getElementById('confirmar3').addEventListener('click', function() {
    moverEvento('evento3', '.secao-meus-eventos');
});

// Função para mover eventos marcados para a seção "Meus Eventos"
function marcarEvento(eventoId, secaoMeusEventos) {
    // Seleciona o elemento do evento marcado pelo ID
    const eventoMarcado = document.getElementById(eventoId);
    // Seleciona a seção de "Meus Eventos"
    const secao = document.querySelector(secaoMeusEventos);

    // Verifica se o evento e a seção existem antes de mover
    if (eventoMarcado && secao) {
        // Move o evento marcado para a seção "Meus Eventos"
        secao.appendChild(eventoMarcado);
    }
}

// Adiciona um listener para os botões de marcação
document.getElementById('marcar1').addEventListener('click', function() {
    marcarEvento('evento1', '.secao-meus-eventos');
});

document.getElementById('marcar2').addEventListener('click', function() {
    marcarEvento('evento2', '.secao-meus-eventos');
});

document.getElementById('marcar3').addEventListener('click', function() {
    marcarEvento('evento3', '.secao-meus-eventos');
});







// Função para mover eventos negados de volta para a seção de eventos
function moverDeVoltaEvento(eventoId, secaoEventos) {
    // Seleciona o elemento do evento negado pelo ID
    const eventoNegado = document.getElementById(eventoId);
    // Seleciona a seção de eventos
    const secao = document.querySelector(secaoEventos);

    // Verifica se o evento e a seção existem antes de mover
    if (eventoNegado && secao) {
        // Move o evento negado de volta para a seção de eventos
        secao.appendChild(eventoNegado);
    }
}

// Adiciona um listener para o botão negar1
document.getElementById('negar1').addEventListener('click', function() {
    moverDeVoltaEvento('evento1', '.secao-eventos');
});

// Adiciona um listener para o botão negar2
document.getElementById('negar2').addEventListener('click', function() {
    moverDeVoltaEvento('evento2', '.secao-eventos');
});

// Adiciona um listener para o botão negar3
document.getElementById('negar3').addEventListener('click', function() {
    moverDeVoltaEvento('evento3', '.secao-eventos');
});







