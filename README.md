# Gerenciamento de Carrinho com React Context (TypeScript)

Este é um projeto simples de e-commerce desenvolvido com React e TypeScript, que utiliza React Context para gerenciar o estado global do carrinho de compras.

---

## Funcionalidades

- Lista estática de produtos com nome, preço e ID.
- Adicionar produtos ao carrinho.
- Incrementar quantidade do produto se já estiver no carrinho.
- Visualização do resumo do carrinho (total de itens) no cabeçalho.
- Página detalhada do carrinho com nome do produto, quantidade, preço unitário, subtotal e total geral.
- Remover itens do carrinho (diminuir quantidade ou remover completamente).
- Layout responsivo e estilizado com CSS moderno.

---

## Tecnologias utilizadas

- React 18
- TypeScript
- React Context API
- Vite (build e dev server)
- CSS para estilização simples e agradável

---

## Estrutura do projeto

```
gerenciamento-carrinho-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CartPage.tsx
│   │   ├── CartSummary.tsx
│   │   └── ProductList.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Como executar o projeto localmente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente instalado junto com Node.js) ou yarn

---

### Passos

1. Clone o repositório (ou baixe e extraia o zip):

```bash
git clone https://github.com/SamuelLucasVieira/gerenciamento-carrinho-react.git
cd gerenciamento-carrinho-react
```

2. Instale as dependências:

```bash
npm install
```

ou, se preferir usar yarn:

```bash
yarn
```

3. Rode o servidor de desenvolvimento:

```bash
npm run build
npm run start
```

4. Abra seu navegador no endereço [http://localhost:3000](http://localhost:3000) a porta pode ser mudada como preferir no arquivo vite.config.ts.

5. Pronto! Você pode interagir com a lista de produtos, adicionar itens ao carrinho e ver o resumo/detalhes do carrinho.

---

### Build para produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Você pode usar o comando:

```bash
npm run preview
```

para visualizar localmente a build gerada.

---

## Contato

Projeto criado por Samuel Uso.

Para dúvidas ou sugestões, entre em contato: samuellucasvieira.melo@gmail.com

---

## Licença

Este projeto está licenciado sob a licença MIT.
