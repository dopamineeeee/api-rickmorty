let idAtual = 1;
const ultimoPersonagem = 826;

// ELEMENTOS DO HTML
const nomePersonagem = document.getElementById("nomePersonagem");
const imgPersonagem = document.getElementById("imgPersonagem");
const statusPersonagem = document.getElementById("status");
const especies = document.getElementById("especies");
const genero = document.getElementById("genero");                 //Criamos as peças do nosso personagem que juntos se tornam um elemento
const localizacao = document.getElementById("local");

const btnPesquisar = document.getElementById("btnPesquisar");
const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");               // botões que vão fazer o usuário navegar entre os personagens
const buscarPersonagem = document.getElementById("buscarPersonagem");

// FUNÇÃO PARA MOSTRAR O PERSONAGEM NO HTML
function mostrarPersonagem(personagem) {
    nomePersonagem.innerText = personagem.name;
    imgPersonagem.src = personagem.image;                                      //printamos as características do personagem no HTML
    imgPersonagem.alt = personagem.name;

    statusPersonagem.innerText = `Status: ${personagem.status}`;
    especies.innerText = `Espécie: ${personagem.species}`;
    genero.innerText = `Gênero: ${personagem.gender}`;
    localizacao.innerText = `Localização: ${personagem.location.name}`;
}

// FUNÇÃO PARA MOSTRAR ERRO NO HTML
function mostrarErro(mensagem) {
    nomePersonagem.innerText = "Erro";
    imgPersonagem.src = "";
    imgPersonagem.alt = "";
                                                        
    statusPersonagem.innerText = mensagem;
    especies.innerText = "";
    genero.innerText = "";
    localizacao.innerText = "";
}

// BUSCAR PERSONAGEM PELO ID
async function carregarPersonagem(id) {
    try {
        const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado pelo ID");
        }

        const personagem = await resposta.json();

        idAtual = personagem.id;
        mostrarPersonagem(personagem);

    } catch (erro) {
        mostrarErro(erro.message);
    }
}

// BUSCAR PERSONAGEM PELO NOME
async function buscarPersonagemPorNome() {
    const valorDigitado = buscarPersonagem.value.trim();

    if (valorDigitado === "") {
        mostrarErro("Digite o nome ou ID de um personagem");
        return;
    }

    // Se o usuário digitou número, busca por ID
    if (!isNaN(valorDigitado)) {
        carregarPersonagem(Number(valorDigitado));
        return;
    }

    // Se digitou texto, busca por nome
    try {
        const resposta = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${valorDigitado}`
        );

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado");
        }

        const dados = await resposta.json();
        const personagem = dados.results[0];

        idAtual = personagem.id;
        mostrarPersonagem(personagem);

    } catch (erro) {
        mostrarErro(erro.message);
    }
}

// BOTÃO AVANÇAR
btnAvancar.addEventListener("click", () => {
    if (idAtual === ultimoPersonagem) {
        idAtual = 1;
    } else {
        idAtual++;
    }

    carregarPersonagem(idAtual);
});

// BOTÃO VOLTAR
btnVoltar.addEventListener("click", () => {
    if (idAtual === 1) {
        idAtual = ultimoPersonagem;
    } else {
        idAtual--;
    }

    carregarPersonagem(idAtual);
});

// BOTÃO PESQUISAR
btnPesquisar.addEventListener("click", buscarPersonagemPorNome);

// CARREGA O PRIMEIRO PERSONAGEM AO ABRIR A PÁGINA
carregarPersonagem(idAtual);