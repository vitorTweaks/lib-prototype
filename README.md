# **Biblioteca de Processamento de Texto em Node.js**

Esta é uma biblioteca desenvolvida em **Node.js** com foco em **processamento de arquivos de texto via linha de comando (CLI)**. O projeto foi criado como um **protótipo backend**, sem interface gráfica, com o objetivo de **analisar textos e identificar palavras duplicadas em cada parágrafo**.

---

## **Funcionalidades**

- **Leitura de arquivos de texto**
- **Separação do conteúdo por parágrafos**
- **Contagem de palavras por parágrafo**
- **Identificação de palavras duplicadas**
- **Geração automática de um arquivo de saída com os resultados**
- **Execução via terminal com parâmetros personalizados**

---

## **Tecnologias utilizadas**

- **Node.js**
- **JavaScript (ES Modules)**
- **fs (File System)**
- **path**
- **commander**
- **chalk**

---

## **Como usar**

### **1. Clonar o repositório**
```bash
git clone https://github.com/vitorTweaks/lib-prototype.git
```

2. Acessar a pasta do projeto
```bash
cd lib-prototype
```

3. Instalar as dependências
```bash
npm install
```

4. Executar o projeto
```bash
node cli.js --texto caminho/do/arquivo.txt --destino caminho/da/pasta
```

Exemplo de uso

**Entrada:**

Um arquivo .txt contendo múltiplos parágrafos.

**Saída:**

Um arquivo resultado.txt contendo as palavras duplicadas encontradas em cada parágrafo.

Estrutura do projeto

```bash
cli.js: responsável pela interface de linha de comando
index.js: contém a lógica de contagem de palavras
helpers.js: responsável pela formatação da saída
erros/: tratamento de erros
Objetivo do projeto
```

Este projeto foi desenvolvido com o objetivo de praticar:

Manipulação de arquivos no backend

Criação de ferramentas CLI

Organização de código em módulos

Lógica de programação aplicada a processamento de texto

Status

**Protótipo em desenvolvimento**
