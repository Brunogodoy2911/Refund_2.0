# Refund 2.0 - Aplicação de Reembolso

<div align="center">
  <img src="https://ik.imagekit.io/brunogodoy/logo.svg?updatedAt=1750169727790" title="source: imgur.com" alt="Logo Refund 2.0" width="200"/>
</div>

<div align="center">
  <img src="https://img.shields.io/github/languages/top/Brunogodoy2911/refund_2.0?style=flat-square" alt="Principais Linguagens"/>
  <img src="https://img.shields.io/github/repo-size/Brunogodoy2911/refund_2.0?style=flat-square" alt="Tamanho do Repositório"/>
  <img src="https://img.shields.io/github/languages/count/Brunogodoy2911/refund_2.0?style=flat-square" alt="Contagem de Linguagens"/>
  <img src="https://img.shields.io/github/last-commit/Brunogodoy2911/refund_2.0?style=flat-square" alt="Último Commit"/>
  <img src="https://img.shields.io/badge/status-concluído-green?style=flat-square" alt="Status: Concluído">
</div>

---

## 1. Descrição

A aplicação **Refund 2.0** é um sistema web front-end desenvolvido para gerenciar solicitações de reembolso. O objetivo é permitir que funcionários de uma empresa possam submeter despesas para reembolso e que os gestores possam visualizar e acompanhar essas solicitações. Este projeto foi criado com fins educacionais para aplicar conhecimentos de desenvolvimento front-end com React e tecnologias modernas do seu ecossistema.

### Entre os principais recursos que a aplicação oferece, destacam-se:

- Autenticação de usuários com diferentes níveis de acesso (funcionário e gestor).
- Criação de solicitações de reembolso com upload de comprovantes.
- Visualização e gerenciamento das solicitações por parte dos gestores.
- Interface limpa e responsiva, construída com Tailwind CSS.

---

## 2. Sobre esta Aplicação

A aplicação Refund 2.0 foi desenvolvida utilizando **React com Vite**, seguindo uma arquitetura baseada em componentes. Ela oferece uma interface de usuário para interação com uma **API de back-end** (não incluída neste repositório), permitindo a manipulação dos dados de reembolso.

### 2.1. Principais funcionalidades da Aplicação:

**Usuários:**

- Cadastro e Login de usuários.
- Sistema de autenticação que direciona para telas específicas baseadas no perfil (funcionário ou gestor).

**Funcionário:**

- Formulário para submeter uma nova solicitação de reembolso.
- Campos para nome da despesa, categoria, valor e upload de arquivo de comprovante.
- Validação de dados do formulário antes do envio.

**Gestor:**

- Dashboard com a listagem de todas as solicitações de reembolso.
- Funcionalidade de busca para filtrar solicitações pelo nome do funcionário.
- Paginação para navegar entre as solicitações.
- Visualização dos detalhes de uma solicitação específica, com a opção de abrir o comprovante.

---

## 3. Telas da Aplicação

### Tela de Login
<div align="center">
  <img src="https://ik.imagekit.io/brunogodoy/login?updatedAt=1750169590218" alt="Tela de Login" width="700"/>
</div>

### Tela de Solicitação de Reembolso (Funcionário)
<div align="center">
  <img src="https://ik.imagekit.io/brunogodoy/new_refund?updatedAt=1750169590261" alt="Tela de Solicitação de Reembolso (Funcionário)" width="700"/>
</div>

### Dashboard de Solicitações (Admin)
<div align="center">
  <img src="https://ik.imagekit.io/brunogodoy/adm_dashboard?updatedAt=1750169590341" alt="Dashboard de Solicitações (Admin)" width="700"/>
</div>

### Detalhes da Solicitação (Admin)
<div align="center">
  <img src="https://ik.imagekit.io/brunogodoy/adm-preview?updatedAt=1750169590355" alt="Detalhes da Solicitação (Admin)" width="700"/>
</div>

---

## 4. Tecnologias Utilizadas

| Item                | Descrição         |
|---------------------|-------------------|
| Biblioteca Principal | React 19          |
| Ferramenta de Build  | Vite              |
| Estilização          | Tailwind CSS      |
| Roteamento           | React Router      |
| Cliente HTTP         | Axios             |
| Validação de Dados   | Zod               |
| Linguagem            | TypeScript        |

---

## 5. Como Executar o Projeto

### 5.1. Requisitos

Para executar o projeto localmente, você precisará ter instalado:

- Node.js (versão 18 ou superior)
- npm (geralmente instalado com o Node.js) ou Yarn
- Git

### 5.2. Configuração Inicial

Clone o repositório:

```bash
git clone https://github.com/Brunogodoy2911/refund_2.0.git
cd refund_2.0
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

### 5.3. Executando a Aplicação

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível, por padrão, em:  
[http://localhost:5173](http://localhost:5173)

> ℹ️ A aplicação consome uma API externa que está configurada no arquivo `src/services/api.ts`.  
> A URL base da API é: **https://refund-api-5o4j.onrender.com**

---

## 6. Contribuição

Este repositório é parte de um projeto educacional, mas contribuições são sempre bem-vindas! Caso tenha sugestões, correções ou melhorias, fique à vontade para:

- Criar uma issue para discutir a mudança que você gostaria de fazer.
- Enviar um pull request com suas melhorias.

---

## 7. Contato

Desenvolvido por **Bruno Godoy**  
GitHub: [Brunogodoy2911](https://github.com/Brunogodoy2911)  
LinkedIn: [brunogodoydev](https://www.linkedin.com/in/brunogodoydev/)
