# Teste front Eureka

O teste consiste na criação de um formulário multi-steps. Na primeira etapa, é possível escolher qual sabor do bolo, dentre 4 opções. Na segunda etapa, podemos escolher o tamanho do bolo e os adicionais. Na terceira etapa, preenche-se os campos com os dados do solicitante, e também o meio de pagamento. No Submit, é enviado os dados do pedido para a API do mocky, caso dê sucesso, é enviado para o step 4, com uma tela de sucesso, caso contrário é devolvido um error.

## Desenvolvimento

Projeto criado através do [Create React App](https://github.com/facebook/create-react-app).

### Scripts disponíveis

No diretório do projeto, rodar:

Para instalar as dependencias, rodar: 

#### `yarn install`

Para iniciar o servidor:

#### `yarn start`


Abrir [http://localhost:3000](http://localhost:3000) para ver no navegador.

##Para ver a demo do projeto, acesso o link:
[https://tortasdalina.netlify.app/](https://tortasdalina.netlify.app/)

##Descrição e solução

Para a criação do formulario, foi feito 4 condicionais, e baseado no estado do step, o return irá chamar um dos componentes, que trará uma tela específica de acordo com a etapa solicitada pelos botões de proximo e voltar. Para o armazenamento dos estados, foi usado o useReducer, com a função reducer isolada na pasta STORE. Para a estilização, foi usado o styled-components. Para envio dos dados API, foi usado o axios.post . Foi feito desestruturação de alguns dos componentes, e nenhum dos estados foi para essas pastas, ficando somente no Home, e sendo enviados através dos props. 

