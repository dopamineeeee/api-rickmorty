let idAtual = 1;  //Observações do ERIC : Index que o site vai começar (personagem inicial)


// Estamos construindo as características do personagem através dos ID's (juntando todas as características obtemos o elemento COMPLETO)
const nomePersonagem = document.getElementById("nomePersonagem");
const imgPersonagem = document.getElementById("imgPersonagem");
const statusPersonagem = document.getElementById("status");
const especies = document.getElementById("especies");
const genero = document.getElementById("genero");
const localizacao = document.getElementById("local");

// Estamos declarando os botões e campos que iremos utilizar dentro da API

const btnPesquisar = document.getElementById("btnPesquisar");
const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");
const buscarPersonagem = document.getElementById("buscarPersonagem");

// Criamos nossa primeira função para "IMPRIMIR o nosso elemento por completo no HTML" utilizando nossas ID's prédefinidas no HTML,
// Usamos uma função assincrona para dizer que é para o código esperar a página carregar junto o await e depois executar e o fetch faz a requisição

async function carregarPersonagem(id) {
    const resposta = await fetch(`https://rickandmortyapi.com/api/character/${id}`); // Aqui pedimos para a função ir na API
    const personagem = await resposta.json(); // aqui pede para esperar com o await e tranforma nossa requisição em arquivo json
    nomePersonagem.innerText = personagem.name; //imprime texto
    imgPersonagem.src = personagem.image; //imprime imagem
    statusPersonagem.innerText = `Status: ${personagem.status}`; // puxa as características do banco da API
    especies.innerText = `Espécie: ${personagem.species}`;
    genero.innerText = `Gênero: ${personagem.gender}`;
    localizacao.innerText = `Localização: ${personagem.location.name}`;
}

btnAvancar.addEventListener("click", () => {

    if (idAtual === 826) {                          //aqui diz que caso o index esteja no último é para ele ir para o primeiro

        idAtual = 1;                                // estamos adicionando um ouvindo que pega o movimento CLICK do botão avançar
                                                    // e pula +1 do index

    } else {

        idAtual++;
    }

    carregarPersonagem(idAtual);                       // carrega nosso elemento criado acima
});

btnVoltar.addEventListener("click", () => {

   
    if (idAtual === 1) {                            //aqui é o inverso do acima, se ele estiver no index 1 voltar para o último

        
        idAtual = 826;

    } else {

        
        idAtual--;
    }

    carregarPersonagem(idAtual);
});

btnPesquisar.addEventListener("click", async () => {
    const nomeDigitado = buscarPersonagem.value;            // criamos uma const para receber o valor digitado no input

    const resposta = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nomeDigitado}`  //js faz a requisição para a API o /?name= ele está colocando o valor digitado
    );

    const dados = await resposta.json();  // transforma os dados obtidos em json e coloca dentro da variável

    if (dados.results) {                                
        const personagem = dados.results[0];            //joga o resultado no campo criado idAtual e mostra ele colocando nosso elemento por completo
        idAtual = personagem.id;

        nomePersonagem.innerText = personagem.name;                     //fizemos uma condição que fala se encontrar o ID mostrar elemento se não "Personagem não encontrado"
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