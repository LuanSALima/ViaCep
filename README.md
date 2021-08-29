# Visão Geral
Projeto de busca de endereço a partir de um CEP que será consultado na API ViaCep. O usuário acessa uma aplicação web e digita em um campo de busca o CEP que deseja consultar, o valor do campo será enviado para o backend que irá consultar o cache de CEPs já pesquisados e caso não encontre fará a consulta na API ViaCEP e salvará este CEP recém consultado.

Este projeto foi desenvolvido utilizando React.JS e Node.JS.

![Gif do Projeto][screen-gif]
![Screenshot de 3 testes][screen-tests]

# Front-end
A aplicação web foi desenvolvido utilizando React.JS e possui 2 páginas, no qual a principal possui o campo para a digitar o cep que será consultado e a segunda página é retornada com uma mensagem de página não encontrada quando o usuário tentar acessar uma rota diferente da página inicial. A página principal foi estilizada utilizando o pacote ``styled-components`` e foi utilizado o pacote ``axios`` para realizar as requisições para o servidor backend que retornará o resultado da pesquisa pelo CEP digitado.

# Back-end
O servidor backend foi desenvolvido utilizando Node.JS e framework  ``Èxpress`` para desenvolver uma API Restful que possui 2 rotas, uma rota de teste e a rota principal ``POST`` que espera o valor do CEP. Para realizar o cache dos CEPs foi utilizado o banco de dados ``MONGODB``, que é um banco ``NOSQL`` e utilizado o pacote ``mongoose`` para criar a conexão e acesso ao banco de dados. Para enviar a requisição para a API ViaCEP foi utilizado o pacote ``axios``. Também foi utilizado o pacote ``jest`` para a criação dos testes e o pacote ``supertest`` para realizar os testes nas rotas.

# Como rodar o projeto
- É necessário ter:
    - Node.JS instalado: [Link para a página de download do Node.JS](https://nodejs.org/pt-br/download/)
    - URI de conexão com o MongoDB: [Link para a página do oficial em inglês](https://docs.mongodb.com/manual/reference/connection-string/)

- Passo a passo para rodar o projeto
    
    - 1° Clone o projeto na sua máquina
        ```
        $ git clone https://github.com/LuanSALima/ViaCep.git
        ```
    - 2° Configurando e Instalando o Backend
        ```
        #Acesse a pasta do backend
        $ cd ./backend
        
        #Crie um arquivo .env com o mesmo conteudo do arquivo .env.example e altere o valor da variável 'ATLAS_URI' para o valor da URI de conexão com o MongoDB
        
        #Instale os pacotes npm
        $ npm install
        ou
        $ yarn add
        
        #Execute o Projeto
        $ npm start
        ou
        $ yarn start
        ```
    - 3° Configurando e Instalando o Frontend
        ```
        #Acesse a pasta do frontned
        $ cd ./frontend
        
        #Crie um arquivo .env com o mesmo conteudo do arquivo .env.example
        
        #Instale os pacotes npm
        $ npm install
        ou
        $ yarn add
        
        #Execute o Projeto
        $ npm start
        ou
        $ yarn start
        ```

[screen-gif]: git_images/project_screen.gif
[screen-tests]: git_images/screen_tests.jpg