# Projeto Wheater-App

Essa é uma aplicação bem simples feita em React para fins de aprendizado. Esse projeto foi feito anteriormente com o objetivo de completar um desafio, mas agora irei aproveita-lo para aperfeiçoar as minhas habilidades e o próprio projeto com melhorias que farei de vez em quando. <br>

Documentarei as melhorias no final desse Readme com as datas em que foram feitas.

## Descrição do projeto

O projeto é um site que permite mostrar a previsão do tempo de uma cidade, sendo apresentando a previsão do dia atual e dos próximos 5 dias. De inicio, a previsão aprensentada é da cidade em que o usuário está localizado, mas há a possibilidade de pesquisar o nome de alguma cidade específica. Infelizmente, por limitações da API que utilizei, muitas cidades podem não aparecer quando são pesquisadas, como ocorreu com a minha.

Na previsão do dia atual, é mostrado a data, o ícone referente ao clima da cidade, temperatura atual, temperatura mínima e máxima, velocidade e direção do vento, umidade do ar, visibilidade(não sei se a API está marcando isso corretamente) e pressão atmosférica. 

Nas previsões dos próximos 5 dias, é mostrado a data, o ícone referente ao clima da cidade, temperatura mínima e máxima.

## API 

A API utilizada foi a do [OpenWheater](https://openweathermap.org/api). <br>
Escolhi ela pois foi a mais completa que consegui encontrar, além de que ela é gratis e que tem um limite de requisições bem "extenso".

Há um problema recorrente nessa API, no qual várias cidades aparecem com o nome de cidades proximas ao invés do seu próprio. Tenho como exemplo Jardim, a cidade onde moro, que aparece com o nome de Barbalha. Como esse é um "erro" da API, não tive como resolver.

## Como utilizar o projeto

### Para instalar as dependências do projeto: 

### `npm install` 

Antes de iniciar o projeto é importante que você vá no site do [OpenWheater](https://openweathermap.org/api) e crie uma conta para ter acesso a chave da API. A chave pode ser colocado em um arquivo separado para ser importada como um váriavel que será colocada no link de requisição da API ou também pode ser colocada diretamente no link, depende da sua preferência.

### Para iniciar o projeto:

### `npm start`

## Atualizações:

> ### `16/09/22`
> + Adicionada a tradução para o português do dia e do mês nas datas apresentadas.
> + Agora a barra de busca só some ao clicar em algo fora dela. Isso facilita a pesquisa já que assim a barra não fica invisível enquanto está digitando.
> + Separei todas as informações que são retiradas da API no início do map() e documentei o que é cada uma delas, pra facilitar o entendimento do código.

## O que pretendo melhorar:

+ Deixar o site responsivo. 
+ Melhorar o design.
+ Permitir a escolha de linguagem no site.
+ Encontrar um nome melhor para o projeto...
