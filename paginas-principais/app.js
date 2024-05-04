// // Função de eventos infinitos
// function carregarMaisEventos() {
//     // Seleciona a seção onde os eventos serão adicionados
//     const secaoEventos = document.querySelector('.secao-eventos');

//     // Clona as três divs de eventos para adicionar mais
//     const eventosClone = document.querySelectorAll('.container-secao-eventos');

//     eventosClone.forEach((evento, index) => {
//         if (index < 3) {
//             // Clona a div do evento e a adiciona à seção de eventos
//             const eventoClone = evento.cloneNode(true);
//             secaoEventos.appendChild(eventoClone);

//             // Atualiza a ID do evento clonado para manter a estrutura
//             eventoClone.id = `evento${index + 4}`;

//             // Adiciona listeners aos botões do evento clonado
//             const confirmarBtn = eventoClone.querySelector('.btn-imagem[id^="confirmar"]');
//             if (confirmarBtn) {
//                 confirmarBtn.addEventListener('click', function() {
//                     moverEvento(eventoClone.id, '.secao-meus-eventos');
//                 });
//             }

//             const negarBtn = eventoClone.querySelector('.btn-imagem[id^="negar"]');
//             if (negarBtn) {
//                 negarBtn.addEventListener('click', function() {
//                     moverEvento(eventoClone.id, '.secao-eventos');
//                 });
//             }

//             const marcarBtn = eventoClone.querySelector('.btn-imagem[id^="marcar"]');
//             if (marcarBtn) {
//                 marcarBtn.addEventListener('click', function() {
//                     marcarEvento(eventoClone.id, '.secao-meus-eventos');
//                 });
//             }
//         }
//     });
// }





const nomesEventos = [
    "Encontro de Desenvolvedores",
    "Happy Hour and Networking",
    "Workshop de Design",
    "Palestra sobre Inovação",
    "Conferência de Tecnologia"
];

const datasAleatorias = [
    "15 de Maio - 10 AM",
    "20 de Junho - 15 PM",
    "5 de Julho - 9 AM",
    "12 de Agosto - 18 PM",
    "30 de Setembro - 14 PM"
];


function carregarMaisEventos() {
    const secaoEventos = document.querySelector('.secao-eventos');
    const eventosClone = document.querySelectorAll('.container-secao-eventos');

    eventosClone.forEach((evento, index) => {
        if (index < 3) {
            const eventoClone = evento.cloneNode(true);
            secaoEventos.appendChild(eventoClone);
            eventoClone.id = `evento${index + 4}`;

            // Gera um índice aleatório para selecionar nome e data diferentes
            const indiceNome = Math.floor(Math.random() * nomesEventos.length);
            const indiceData = Math.floor(Math.random() * datasAleatorias.length);

            // Atualiza o texto dos elementos dentro do evento clonado
            const tituloData = eventoClone.querySelector('.titulo-data');
            if (tituloData) {
                tituloData.textContent = datasAleatorias[indiceData];
            }

            const descricaoEvento = eventoClone.querySelector('.descricao-evento');
            if (descricaoEvento) {
                descricaoEvento.textContent = nomesEventos[indiceNome];
            }

            // Atualiza o ID dos botões do evento clonado
            const confirmarBtn = eventoClone.querySelector('.btn-imagem[id^="confirmar"]');
            if (confirmarBtn) {
                confirmarBtn.id = `confirmar${index + 4}`;
                confirmarBtn.addEventListener('click', function() {
                    moverEvento(eventoClone.id, '.secao-meus-eventos');
                });
            }

            const negarBtn = eventoClone.querySelector('.btn-imagem[id^="negar"]');
            if (negarBtn) {
                negarBtn.id = `negar${index + 4}`;
                negarBtn.addEventListener('click', function() {
                    moverEvento(eventoClone.id, '.secao-eventos');
                });
            }

            const marcarBtn = eventoClone.querySelector('.btn-imagem[id^="marcar"]');
            if (marcarBtn) {
                marcarBtn.id = `marcar${index + 4}`;
                marcarBtn.addEventListener('click', function() {
                    marcarEvento(eventoClone.id, '.secao-meus-eventos');
                });
            }
        }
    });
}




