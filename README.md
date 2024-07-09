# Sistema de gerenciamento de produtos
Este é um sistema simples de gerenciamento de produtos construído com Angular. Ele permite adicionar, visualizar e listar produtos com detalhes básicos como nome, descrição, preço e disponibilidade.

## Features

- Adicione novos produtos com os seguintes detalhes:
  - Nome
  - Descrição
  - Preço
  - Disponibilidade (sim/não)
- Veja uma lista de produtos
  - Ordenado por preço (crescente)
  - Exibe nome e preço do produto
  - Exibir e esconder as colunas
- Navegação entre a lista de produtos e o formulário do produto
- Design responsivo

## Começando

### Pré-requisitos

- Node.js and npm (Node Package Manager)
- Angular CLI

### Installation

1. Clone o repositório:

   ```bash
   git clone https://github.com/EyzRyder/product-management.git
   cd product-management
   ```

2. Instale as dependências:

  ```bash
  npm install
  ```

3. Sirva o aplicativo:

  ```bash
  ng serve
  ```

4. Abra seu navegador e navegue até http://localhost:4200.

### Executando testes
Para executar os testes de unidade deste projeto, use o seguinte comando:

  ```bash
  ng test
  ```

Isso executará os testes de unidade usando Karma e Jasmine.

## Estrutura do Projeto
```text
src/
 ├── app/
 |    |
 │    ├──components
 |    |     |
 |    |     |
 |    |     ├── product-form/           # Product form component
 |    │     │    ├── product-form.component.html
 |    │     │    ├── product-form.component.ts
 |    │     │    ├── product-form.component.spec.ts
 |    │     │    └── product-form.component.scss
 |    │     ├── product-list/           # Product list component
 |    │     │    ├── product-list.component.html
 |    │     │    ├── product-list.component.ts
 |    │     │    ├── product-list.component.spec.ts
 |    │     |    └── product-list.component.scss
 |    │     └── dropdown/           #  Dropdown component
 |    │          ├── dropdown.component.ts
 |    │          ├── dropdown.component.spec.ts
 |    │          └── dropdown.component.scss
 |    ├── product.service.ts      # Product service for managing products
 |    ├── product.service.spec.ts # Tests for product service
 |    ├── app.routes.ts   # App routing module
 |    ├── app.component.html
 |    ├── app.component.scss
 |    ├── app.component.spec.ts
 |    ├── app.component.ts
 |    └── app.config.ts
 ├── index.html                   # Main HTML file
 ├── main.ts                      # Main entry point
 ├── styles.scss                   # Global styles
 └── ...
```
## Uso
### Adicionando um produto
1. Navegue até a página "adicionar produto" clicando no botão "Adicionar" na página de listagem de produtos.
2. Preencha o formulário com os dados do produto.
3. Clique em “Cadastrar” para salvar o produto. Você será redirecionado automaticamente para a página de listagem de produtos.

### Visualizando produtos
1. Navegue até a página "Lista de produtos".
2. Você verá uma lista de produtos classificados por preço em ordem crescente.

## Construído com
- Angular - O framework web utilizado
- Angular CLI - Interface de linha de comando para Angular

