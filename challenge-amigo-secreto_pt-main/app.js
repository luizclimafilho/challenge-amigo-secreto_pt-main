//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    // Valida se o campo de nome não está vazio ou já foi adicionado
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array de amigos e atualiza a lista no HTML
    amigos.push(nomeAmigo);
    listaAmigos.innerHTML = amigos.join(', '); // Usa join para exibir os nomes separados por vírgula

    // Limpa o campo de input após adicionar o nome
    inputAmigo.value = '';
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    const listaResultado = document.getElementById('resultado');

    // Valida se há pelo menos 4 amigos na lista
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    // Embaralha o array de amigos usando o algoritmo de Fisher-Yates
    embaralharArray(amigos);
    
    // Limpa o resultado anterior
    listaResultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Pega o nome do amigo atual
        const amigoAtual = amigos[i];
        
        // Pega o nome do próximo amigo na lista para ser o "amigo secreto"
        // Se for o último, o amigo secreto será o primeiro da lista
        const amigoSecreto = amigos[i + 1] || amigos[0]; 

        // Cria e adiciona o item da lista com o resultado do sorteio
        const itemLista = document.createElement('li');
        itemLista.classList.add('result-item');
        itemLista.textContent = `${amigoAtual} -> ${amigoSecreto}`;

        listaResultado.appendChild(itemLista);
    }
}

// Função auxiliar para embaralhar um array (algoritmo de Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    // Limpa o array de amigos
    amigos = []; 
    // Limpa a lista de amigos no HTML
    document.getElementById('listaAmigos').innerHTML = '';
    // Limpa a lista de resultados no HTML
    document.getElementById('resultado').innerHTML = ''; 
}

// Adiciona um evento para a tecla 'Enter' no input de nome
document.getElementById('amigo').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

// Adiciona um evento para a tecla 'Enter' no documento para sortear
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && amigos.length >= 4) {
        sortearAmigo();
    }
});