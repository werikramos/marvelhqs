# MarvelHQs 

<img src="https://img.shields.io/static/v1?label=Angular&message=framework&color=red&style=for-the-badge&logo=Angular"/>
<br>
Single Page Application para uma consulta de quadrinhos Marvel

## Tópicos 

 [Descrição do projeto](#descrição-do-projeto)
 
 [Construção](#construção)
 
 [Possíveis Melhorias](#possíveis-melhorias)
 
 [Server de Desenvolvimento](#server-de-desenvolvimento)
 
 [Build](#build)

## Descrição do Projeto
O sistema consiste em uma tela listando os quadrinhos mais recentes em formato de cards.
Ao clicar em um quadrinho são exibidas informações detalhadas do quadrinho selecionado.
Ainda, é possível pesquisar quadrinhos pelo seu título.
Os dados são requisitados via [API pública da Marvel](https://developer.marvel.com)<br>

![Print-1](https://github.com/werik-1998/marvelhqs/blob/master/src/assets/img/print1.png)<br>
![Print-2](https://github.com/werik-1998/marvelhqs/blob/master/src/assets/img/print2.png)<br>

## Construção
Aplicação foi desenvolvida em [Angular 11](https://angular.io/), baseada no padrão Material Design com uso do [Angular Material](https://material.angular.io/).

<b>Rotas</b><br>
O [Módulo de rotas](src/app/app-routing.module.ts) do Angular é o responsável por gerenciar as rotas da aplicação.

<b>Componentes</b><br>
O Projeto foi elaborado de forma modular, onde cada tela é um componente 'isolado', tornando as possíveis expansões menos impactantes no código já existente.

<b>Requests</b><br>
As requisições foram centralizadas no [AppService](src/app/app.service.ts) onde os paramêtros da requisição como as chaves de autenticação são configurados.
É realizada uma validação simples da response com base no status code retornado pela API. Para trabalhar com as chamadas assíncronas foi utilizado [Observebles](https://angular.io/guide/observables) e subscribe.


## Possíveis Melhorias
<b>Expansões</b>: A API Marvel possui outros endpoints como de  personagens e filmes, posteriormente é  possível a expansão do SPA <br> pra visualização de mais informações do universo Marvel. <br>
<b>Responsividade</b>: Adequar layout para visualização em dispositivos mobiles;<br>
<b>Testes</b>: Adição de testes ende-to-end;

## Server de Desenvolvimento
Necessário ter [Angular CLI](https://www.npmjs.com/package/@angular/cli) instalado.

Execute o comando  `ng serve` para um iniciar um servidor de desenvolvimento. Navegue para `http://localhost:4200/`.<br> O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

Necessário configurar as keys da API no arquivo  [environment](src/environments/environment.ts)

## Build
Necessário ter [Angular CLI](https://www.npmjs.com/package/@angular/cli) instalado.

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist /`.<br> Use o `--prod` para um build de produção.

Necessário configurar as keys da API no arquivo [environment.prod](src/environments/environment.prod.ts)

Projeto gerado com Angular CLI version 11.2.6.
