# Rick and Morty API

Projeto desenvolvido com foco em aplicar e demonstrar os conhecimentos aprendidos durante o semestre, utilizando HTML, CSS e JavaScript.

## 📚 Objetivo do Projeto

O projeto consome a API pública de Rick and Morty para exibir informações dos personagens de forma dinâmica e responsiva.

Além do consumo de API, o sistema foi desenvolvido com foco em:

* Estrutura HTML semântica
* Organização e lógica de programação
* Estruturação de layout Front-end
* Estilização com CSS
* Responsividade para dispositivos mobile
* Manipulação de DOM com JavaScript
* Boas práticas de JavaScript
* Consumo de API utilizando `fetch`
* Tratamento de erros utilizando `try` e `catch`

---

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Rick and Morty API

---

## 🎨 Funcionalidades

* Buscar personagens pelo nome
* Navegar entre personagens
* Exibir:

  * Nome
  * Status
  * Espécie
  * Gênero
  * Localização
  * Imagem do personagem
* Layout responsivo para celular e desktop
* Tratamento de possíveis erros da API utilizando `try/catch`

---

## ⚙️ Tratamento de Erros

O projeto utiliza `try` e `catch` para evitar falhas durante requisições da API.

Isso permite:

* Evitar quebra da aplicação
* Melhorar a experiência do usuário
* Exibir mensagens de erro de forma controlada
* Garantir maior estabilidade durante falhas de conexão ou buscas inválidas

Exemplo:

```javascript
try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
} catch (erro) {
    console.log("Erro ao buscar personagem");
}
```

---

## 📱 Responsividade

O projeto foi desenvolvido com responsividade utilizando:

* Flexbox
* Media Queries
* Unidades responsivas
* `clamp()`
* `min()`

---

## 🔗 API Utilizada

Rick and Morty API:

https://rickandmortyapi.com/

---

## 📁 Estrutura do Projeto

```bash
api-rickmorty/
│
├── index.html
├── CSS/style.css
├── JS/logica.js
└── IMG/imagens
```

---

## 👨‍💻 Autor

Eric Oliveira Ferreira
