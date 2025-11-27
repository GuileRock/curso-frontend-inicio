// js/script.js

// 1. SELECIONAR os elementos que vamos usar
const botaoTema = document.querySelector('#btn-mudar-tema');
const corpoPagina = document.querySelector('body');


// 2. DEFINIR O QUE ACONTECE (A Função)
// Esta função será executada apenas quando o clique acontecer.
function trocarTema() {

    console.log('O botão foi clicado! A função rodou.');

    // Vamos checar a cor atual
    // Se o fundo for escuro, muda pra claro. Se for claro, muda pra escuro.

    // Obs: No primeiro clique, o style.backgroundColor pode estar vazio (""),
    // então tratamos isso como 'claro'.
    if (corpoPagina.style.backgroundColor === 'black') {
        corpoPagina.style.backgroundColor = '#f4f4f4'; // Volta pro claro
        corpoPagina.style.color = '#333'; // Texto escuro
        botaoTema.textContent = 'Modo Escuro'; // Atualiza o texto do botão
    } else {
        corpoPagina.style.backgroundColor = 'black'; // Muda pro escuro
        corpoPagina.style.color = 'white'; // Texto claro
        botaoTema.textContent = 'Modo Claro'; // Atualiza o texto do botão
    }
}

// 3. CONECTAR O EVENTO (O Ouvinte)
// "Quando o botaoTema for 'clicado' ('click'), execute a função trocarTema"
botaoTema.addEventListener('click', trocarTema);



