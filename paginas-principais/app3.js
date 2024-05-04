let proximoId = 20; // Inicializa o próximo ID com 4, pois você já tem os eventos de 1 a 3

document.getElementById('criar-evento').addEventListener('click', () => {
    document.getElementById('form-modal').style.display = 'block';
});

document.getElementById('novo-evento-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    const secaoEventos = document.querySelector('.secao-eventos');
    const novoEventoDiv = document.createElement('div');
    novoEventoDiv.id = `evento${proximoId}`
    novoEventoDiv.innerHTML = `
            <div class="container-secao-eventos">
            <div>
                <img class="imagens" src="../assets/images/reuniao2.png" alt="" width="200">
            </div>
            <div class="conteudo-secao-eventos">
                <h1 class="titulo-data">${titulo}</h1>
                <h1 class="descricao-evento">${descricao}</h1>
                <div class="botoes-eventos">
                    <div class="botoes-dois">
                        <button id="confirmar${proximoId}" class="btn-imagem">
                            <i class="fa-regular fa-circle-check fa-lg"></i> 
                        </button>
                        <button id="negar${proximoId}" class="btn-imagem">
                            <i class="fa-regular fa-circle-xmark fa-lg"></i>
                        </button>
                    </div>
                    <button id="marcar${proximoId}" class="btn-imagem">
                        <i class="fa-regular fa-bookmark fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    proximoId++;
    secaoEventos.appendChild(novoEventoDiv);

    document.getElementById('form-modal').style.display = 'none';

    // Adicionar novos listeners para os botões do novo evento
    document.getElementById(`confirmar${proximoId - 1}`).addEventListener('click', function() {
        moverEvento(`evento${proximoId - 1}`, '.secao-meus-eventos');
    });

    document.getElementById(`negar${proximoId - 1}`).addEventListener('click', function() {
        moverDeVoltaEvento(`evento${proximoId - 1}`, '.secao-eventos');
    });

    document.getElementById(`marcar${proximoId - 1}`).addEventListener('click', function() {
        marcarEvento(`evento${proximoId - 1}`, '.secao-meus-eventos');
    });
});

// Função para mover eventos confirmados para a seção "Meus Eventos"
function moverEvento(eventoId, secaoMeusEventos) {
    const eventoConfirmado = document.getElementById(eventoId);
    const secao = document.querySelector(secaoMeusEventos);

    if (eventoConfirmado && secao) {
        secao.appendChild(eventoConfirmado);
    }
}

// Função para mover eventos negados de volta para a seção de eventos
function moverDeVoltaEvento(eventoId, secaoEventos) {
    const eventoNegado = document.getElementById(eventoId);
    const secao = document.querySelector(secaoEventos);

    if (eventoNegado && secao) {
        secao.appendChild(eventoNegado);
    }
}

// Função para marcar eventos
function marcarEvento(eventoId, secaoMeusEventos) {
    const eventoMarcado = document.getElementById(eventoId);
    const secao = document.querySelector(secaoMeusEventos);

    if (eventoMarcado && secao) {
        secao.appendChild(eventoMarcado);
    }
}










