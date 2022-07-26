# Projeto Blogs API 🚀

O projeto consiste em uma API `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete), gerando um token com JWT para
cada login realizado, utilizado para validar as ações do usuário. Foram criados endpoints que irão cadastrar novos posts, editar, deletar, buscar todos ou por id, tudo utilizando Sequelize e MySql.

## Tecnologias utilizadas 💻

- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Sequelize](https://sequelize.org/)
- [Joi](https://joi.dev/)
- [MySQL](https://www.mysql.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Rodar o projeto com o docker

- Rode o serviço node com o comando docker-compose up -d.
 <!-- Esse serviço irá inicializar um container chamado talker_manager. -->
- Use o comando docker exec -it talker_manager bash.
<!-- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code -->
- Instale as dependências com npm install.

## Rodar o projeto sem docker

- Clone este repositório.
- Instale as dependências:

```bash
$ yarn
  ou
$ npm install
```
- Inicie o Projeto
```bash
$ npm run dev
```

Feito por Igor Mazetti 👋 [Linkedin](https://www.linkedin.com/in/igor-mazetti-de-azevedo-147679ba/)