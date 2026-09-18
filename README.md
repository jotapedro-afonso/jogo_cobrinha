# 🐍 Jogo da Cobrinha — Voice-Controlled Snake Game

Um clássico reimaginado com tecnologia de reconhecimento de voz.

Este projeto consiste em uma versão do tradicional **Jogo da Cobrinha (Snake)** integrada à **Web Speech API**, permitindo que o jogador controle a direção da cobra utilizando comandos de voz.

A aplicação foi desenvolvida utilizando tecnologias web nativas, com **HTML5, CSS3 e JavaScript**, combinando uma interface responsiva com renderização através do elemento `<canvas>`.

---

## 🎮 Demonstração

O jogador controla a cobra por meio de comandos de voz, como:

* 🆙 **"Cima"** ou **"Subir"**
* ⬇️ **"Baixo"** ou **"Descer"**
* ⬅️ **"Esquerda"**
* ➡️ **"Direita"**
* ⏸️ **"Pausar"** ou **"Parar"**
* 🔄 **"Recomeçar"**

O reconhecimento de voz acontece em tempo real através do microfone do dispositivo.

---

## 🎯 Funcionalidades

### 🎤 Controle por voz

O jogo utiliza a **Web Speech API** para reconhecer comandos falados pelo jogador e transformá-los em ações dentro do jogo.

### 🎨 Renderização dinâmica

A cobra, alimentos e elementos da interface são desenhados dinamicamente utilizando o **HTML5 Canvas**.

### 🏆 Sistema de pontuação

A pontuação é atualizada conforme o jogador coleta os itens disponíveis no mapa.

### 📱 Design responsivo

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela e resoluções.

### 🎙️ Feedback do microfone

O jogador recebe informações visuais sobre o estado do reconhecimento de voz, incluindo:

* Microfone escutando;
* Reconhecimento pausado;
* Erro de permissão;
* Reconhecimento indisponível.

### 🔄 Reinício da partida

Após o Game Over, o jogador pode iniciar uma nova partida utilizando o comando de voz correspondente.

---

## 🕹️ Comandos de Voz

| Comando        | Ação                         |
| -------------- | ---------------------------- |
| 🆙 `Cima`      | Move a cobra para cima       |
| 🆙 `Subir`     | Move a cobra para cima       |
| ⬇️ `Baixo`     | Move a cobra para baixo      |
| ⬇️ `Descer`    | Move a cobra para baixo      |
| ⬅️ `Esquerda`  | Move a cobra para a esquerda |
| ➡️ `Direita`   | Move a cobra para a direita  |
| ⏸️ `Pausar`    | Pausa o jogo                 |
| ⏸️ `Parar`     | Pausa o jogo                 |
| 🔄 `Recomeçar` | Reinicia a partida           |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia          | Utilização                                      |
| ------------------- | ----------------------------------------------- |
| **HTML5**           | Estrutura da aplicação e elemento Canvas        |
| **CSS3**            | Estilização, layout, responsividade e animações |
| **JavaScript ES6+** | Lógica do jogo, movimentação, colisões e DOM    |
| **Web Speech API**  | Reconhecimento de comandos de voz               |
| **HTML5 Canvas**    | Renderização dos elementos do jogo              |

---

## 📂 Estrutura do Projeto

```text
jogo_cobrinha/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Responsável pela estrutura da página, incluindo:

* Área do jogo;
* Canvas;
* Placar;
* Informações de status;
* Controles da interface.

### `style.css`

Responsável pela aparência da aplicação:

* Layout;
* Cores;
* Tipografia;
* Responsividade;
* Animações;
* Componentes da interface.

### `script.js`

Contém a lógica principal do projeto:

* Movimentação da cobra;
* Geração dos alimentos;
* Detecção de colisões;
* Sistema de pontuação;
* Game Over;
* Pausa e reinício;
* Reconhecimento dos comandos de voz;
* Integração com a Web Speech API.

---

## 🚀 Como Executar

### 📋 Pré-requisitos

Para executar o projeto, é recomendado possuir:

* Um navegador moderno;
* Suporte à **Web Speech API**;
* Microfone funcionando;
* Servidor local.

Navegadores como **Google Chrome** e **Microsoft Edge** possuem suporte à tecnologia utilizada pelo projeto.

---

### 1. Clonar o repositório

```bash
git clone https://github.com/jotapedro-afonso/jogo_cobrinha.git
```

---

### 2. Entrar na pasta

```bash
cd jogo_cobrinha
```

---

### 3. Iniciar um servidor local

Caso possua o **Node.js** instalado, execute:

```bash
npx http-server .
```

Outra opção é utilizar a extensão **Live Server** no Visual Studio Code.

---

### 4. Abrir o projeto

Após iniciar o servidor, acesse no navegador o endereço apresentado no terminal.

Por exemplo:

```text
http://localhost:8080
```

---

### 5. Permitir o microfone

Na primeira execução, o navegador poderá solicitar autorização para utilizar o microfone.

Clique em:

**Permitir**

Depois disso, os comandos de voz poderão ser utilizados durante a partida.

---

## 🧠 Como Funciona

O funcionamento do projeto pode ser dividido em três partes principais:

### 1. Reconhecimento de voz

O navegador captura a voz do jogador através do microfone.

A **Web Speech API** transforma a fala em texto.

```text
Voz do jogador
      ↓
Microfone
      ↓
Web Speech API
      ↓
Texto reconhecido
      ↓
Identificação do comando
```

### 2. Processamento do comando

O JavaScript verifica o texto reconhecido e procura por palavras-chave.

Por exemplo:

```text
"Direita"
     ↓
Comando identificado
     ↓
Direção = Leste
     ↓
Cobra começa a se mover para a direita
```

### 3. Atualização do jogo

O loop principal atualiza continuamente:

* Posição da cobra;
* Colisões;
* Alimento;
* Pontuação;
* Estado da partida;
* Renderização do Canvas.

---

## 🎯 Objetivo do Jogo

O objetivo é controlar a cobra e coletar a maior quantidade possível de alimentos.

A cada alimento coletado:

* A pontuação aumenta;
* A cobra cresce;
* A dificuldade da partida pode aumentar conforme a implementação.

O jogador deve evitar colisões que resultem no **Game Over**.

---

## 🎤 Reconhecimento de Voz

A aplicação utiliza a interface de reconhecimento de voz disponibilizada pelos navegadores compatíveis.

O sistema procura palavras-chave dentro do texto reconhecido para identificar a intenção do jogador.

Isso permite que diferentes comandos possam executar a mesma ação.

Por exemplo:

```text
"Cima"
"Subir"
```

Ambos são interpretados como um comando para movimentar a cobra para cima.

---

## 📱 Responsividade

O projeto possui uma interface responsiva para proporcionar uma experiência adequada em diferentes tamanhos de tela.

A estrutura da página utiliza recursos do CSS para adaptar:

* Área do jogo;
* Painéis;
* Textos;
* Elementos de controle;
* Espaçamentos.

---

## ⚠️ Observações

A disponibilidade e o comportamento da **Web Speech API** podem variar de acordo com o navegador e o sistema operacional.

Também é necessário permitir o acesso ao microfone para que os comandos de voz funcionem.

Por esse motivo, recomenda-se executar o projeto através de um **servidor local**, em vez de abrir diretamente o arquivo `index.html` utilizando `file://`.

---

## 🔮 Possíveis Melhorias Futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

* [ ] Sistema de níveis;
* [ ] Aumento progressivo da velocidade;
* [ ] Ranking de pontuações;
* [ ] Armazenamento do recorde com `localStorage`;
* [ ] Efeitos sonoros;
* [ ] Diferentes temas visuais;
* [ ] Novos tipos de alimentos;
* [ ] Obstáculos no mapa;
* [ ] Suporte a comandos de voz adicionais;
* [ ] Melhor compatibilidade entre navegadores;
* [ ] Sistema de conquistas.

---

## 📚 Objetivo Acadêmico

O projeto foi desenvolvido como uma aplicação prática de desenvolvimento web, permitindo aplicar conhecimentos relacionados a:

* Desenvolvimento Front-End;
* HTML semântico;
* CSS;
* JavaScript;
* Manipulação do DOM;
* Eventos;
* Canvas;
* APIs Web;
* Reconhecimento de voz;
* Design responsivo;
* Lógica de programação.

Além de reproduzir a mecânica tradicional do Snake, o projeto demonstra como **APIs nativas do navegador podem ser integradas a aplicações interativas**.

---

## 👨‍💻 Desenvolvedores

**Luciano Herculano Avona**
**João Pedro Oliveira Afonso**
**Enzo Asfaionatto**
**Breno de Alexandre Favero**
**Nicolas Soares da Costa**
**Arthur Lopes**
**Gustavo Rodrigues**


Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento web.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
