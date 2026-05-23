let idAtual = 1;

const nomePersonagem = document.getElementById("nomePersonagem");
const imgPersonagem = document.getElementById("imgPersonagem");
const statusPersonagem = document.getElementById("status");
const especies = document.getElementById("especies");
const genero = document.getElementById("genero");
const localizacao = document.getElementById("local");

const btnPesquisar = document.getElementById("btnPesquisar");
const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");
const buscarPersonagem = document.getElementById("buscarPersonagem");

async function carregarPersonagem(id) {
    const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const personagem = await resposta.json();
    nomePersonagem.innerText = personagem.name;
    imgPersonagem.src = personagem.image;
    statusPersonagem.innerText = `Status: ${personagem.status}`;
    especies.innerText = `Espécie: ${personagem.species}`;
    genero.innerText = `Gênero: ${personagem.gender}`;
    localizacao.innerText = `Localização: ${personagem.location.name}`;
}

btnAvancar.addEventListener("click", () => {

    if (idAtual === 826) {

        idAtual = 1;

    } else {

        idAtual++;
    }

    carregarPersonagem(idAtual);
});

btnVoltar.addEventListener("click", () => {

   
    if (idAtual === 1) {

        
        idAtual = 826;

    } else {

        
        idAtual--;
    }

    carregarPersonagem(idAtual);
});

btnPesquisar.addEventListener("click", async () => {
    const nomeDigitado = buscarPersonagem.value;

    const resposta = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nomeDigitado}`
    );

    const dados = await resposta.json();

    if (dados.results) {
        const personagem = dados.results[0];
        idAtual = personagem.id;

        nomePersonagem.innerText = personagem.name;
        imgPersonagem.src = personagem.image;
        
        statusPersonagem.innerText = `Status: ${personagem.status}`;
        especies.innerText = `Espécie: ${personagem.species}`;
        genero.innerText = `Gênero: ${personagem.gender}`;
        localizacao.innerText = `Localização: ${personagem.location.name}`;
    } else {
        nomePersonagem.innerText = "Personagem não encontrado";
    }
});

carregarPersonagem(idAtual);