//------------------------------------------------Funções--------------------------------------------------

/*
O que vamos aprender?
Agora você vai aprender como melhorar o seu código fazendo o uso de funções no JavaScript!

Você será capaz de:
Extrair partes do seu código e agrupar em funções;
Executar funções;
Escrever programas JavaScript utilizando funções.
Por que isso é importante?
As funções são ferramentas essenciais na caixa de ferramentas de uma pessoa programadora! Elas permitem reutilizar trechos de código que se repetem em um programa, proporcionando mais agilidade no desenvolvimento do código, além de deixar o código mais organizado.

O que são funções?
Funções, na programação, são blocos de códigos que executam uma ação necessária em vários momentos diferentes, e podem receber e retornar informações.

Por exemplo, para muitas pessoas a tarefa de lavar louça é diária. Para realizá-la, temos uma sequência de passos que inclui: esfregar os pratos, os copos, os talheres, as panelas, etc.

Suponha que você precisa repetir esse passo a passo todos os dias e, às vezes, mais de uma vez por dia. É cansativo, né? Se você tem uma lavadora de louças, é só colocar tudo dentro dela, esperar o ciclo de lavagem terminar e, no final, ela te entrega todas as louças limpas! Muito melhor, não é mesmo?

As funções são como a lavadora de louças! Em vez de repetir muitas vezes o mesmo código, utilizamos as funções sempre que é necessário executar a mesma tarefa novamente. Essa é a praticidade que as funções te proporcionam na programação!

Assim, se você tiver um código repetido, pode colocar esse código dentro de uma função e, toda vez que precisar utilizar esse código, em vez de digitá-lo novamente, pode executar a função.

Anota aí 📣 : As funções podem receber e retornar informações. Elas também possibilitam a reutilização do código, mantendo-o limpo e organizado, já que podem ser executadas quantas vezes for necessário.

A definição da função (também chamada de declaração da função) consiste no uso da palavra-chave function, seguida pelo nome da função e parênteses (). A ação estará nos blocos de código que definem o corpo da função, entre chaves {}. Veja como isso ocorre na prática:

function nomeDaFuncao() {
  // bloco de código a ser executado
}

A palavra function, que significa função em português, inicia a declaração da função;
O nome da função é o meio de identificá-la e, ao chamá-la, o JavaScript entende qual bloco de código você quer executar;
Os parênteses servem para que a função possa receber informações chamadas de parâmetro e possibilitam que a função utilize essas informações no bloco de código.
Por exemplo, se você fosse desenvolver uma função que tivesse o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como ‘Olá, Gisele!’, como você faria?
*/

/*
Para isso, vamos quebrar a função em partes:

Primeiro passo: iniciar com a palavra function; Segundo passo: dar um nome para a função, como, por exemplo, imprimeSaudacao; Terceiro passo: abrir e fechar parênteses (), que serão vazios no início, pois ainda não é necessário passar nenhuma informação para a função; Quarto passo: abrir chaves {, definir o bloco de código e fechar chaves }.

O objetivo da nossa função é cumprimentar uma pessoa. Para isso, podemos escrever uma saudação como 'Olá, Gisele!':

*/

function cumprimentar() {
   return 'Olá Andrei';
}

cumprimentar();

/*
Tente executar esse código no console de seu navegador.

Nada acontece, não é mesmo?

Isso ocorre porque a função não foi invocada. A invocação nada mais é do que executar a função, ou seja, chamá-la. Primeiro, o JavaScript vai ler a declaração da função, e só quando invocarmos a função é que o bloco de código será executado.

Para invocar a função é necessário colocar o nome dela seguido de parênteses: imprimeSaudacao();.
A saudação não foi retornada e o resultado foi undefined. Por que você acha que isso aconteceu?

Quando uma função é chamada, ela executa o bloco de código de dentro dela e nos retorna uma informação, mas, para isso, é preciso informar para a função qual o retorno esperado utilizando a palavra return. 
Agora sim, a mensagem foi exibida! Isso porque o return é responsável por devolver a informação definida, ou seja, 'Olá, Gisele!'.

⚠ Atenção: O return interrompe a execução da função, isto é, ao utilizar o return, qualquer código abaixo dele dentro do mesmo bloco de código não vai ser executado. Observe:


function imprimeSaudacao() {
    const saudacao = 'Olá, Gisele!';
  
    console.log('Eu sou um console e vou aparecer!');
    return saudacao;
  
    console.log('Eu sou um console e não vou aparecer 😭!');
  }
  
  imprimeSaudacao();

  //Anota aí 📣 : A palavra return indica qual é o retorno esperado e finaliza a execução da função.

  Você pode continuar utilizando o console.log na chamada da função para testar o retorno:
  */

  function imprimeSaudacao() {
    const saudacao = 'Olá, Gisele!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao());

  //Para deixar o código ainda mais organizado, você pode salvar a frase 'Olá, Gisele!' em uma variável e utilizar o return que o resultado será o mesmo.

//Pronto! Agora você já sabe como declarar uma função, como executá-la e também como fazer com que ela retorne uma informação. Chegou a hora de aprender a enviar informações para a função por meio de parâmetros!

//--------------------------------------------------Parâmetros---------------------------------------
/*Parâmetros são informações - ou argumentos - passados para as funções com o objetivo deixar seu código mais dinâmico e organizado. É possível criar funções com nenhum ou vários parâmetros.

Para decidir se é necessário utilizar parâmetros, você vai depender do objetivo da sua função. Por exemplo, se você desenvolver uma função com o objetivo de dar ‘Bom dia!’, o parâmetro não é necessário, porque essa informação não precisa ser alterada. Mas se você quer cumprimentar a pessoa que está executando o programa pelo nome, como a função imprimeSaudacao que retorna o texto 'Olá, Gisele!', é necessário que o nome recebido seja dinâmico, ou seja, é preciso que sua função receba um parâmetro que possibilite que o nome seja alterado.

Agora, vamos ver na prática como utilizar parâmetros!

Na declaração da função temos a palavra function, seguida do nome da função e dos parênteses. São eles que vão receber o parâmetro. Observe como isso acontece:

function imprimeSaudacao(parametro) {
  return parametro;
}

A função imprimeSaudacao está recebendo e retornando um parâmetro. Para que a função consiga retornar uma informação, é necessário informar qual valor o parâmetro vai receber. Para isso, é necessário passar esse valor na chamada da função. Execute o código abaixo no console do seu navegador:
*/

function imprimeSaudacao(parametro) {
    return parametro;
  }
  
  console.log(imprimeSaudacao('Oi! Eu sou um parâmetro!')); // o valor do parâmetro é passado na chamada da função

  // A função retornou a string 'Oi! Eu sou um parâmetro!', ou seja, no momento da declaração da função, o valor do parâmetro ainda não existe. O valor só é definido quando a função é chamada. Para imprimir a saudação, é a mesma estrutura. Veja:

  function imprimeSaudacao(parametro) {
    return parametro;
  }
  
  console.log(imprimeSaudacao('Olá, Gisele!'));
  
//No exemplo acima, a função está recebendo toda a frase 'Olá, Gisele'. Mas reflita: como você poderia fazer para que o trecho 'Olá, ' permaneça dentro da declaração da função, passando apenas o nome da pessoa na chamada da função, por exemplo, imprimeSaudacao('Gisele')?

// A reposta é: utilizando parâmetros! Observe o código abaixo para ver como isso ocorrendo na prática:

function imprimeSaudacao(parametro) {
    return 'Olá, ' + parametro + '!';
  }
  
  console.log(imprimeSaudacao('Gisele'));

  //O parâmetro pode ter qualquer nome, mas é importante que ele seja descritivo, assim como variáveis e funções. Como a função imprimeSaudacao é uma função responsável por cumprimentar alguém, você pode trocar o nome do parâmetro por nome. Veja:

  function imprimeSaudacao(nome) {
    const saudacao = 'Olá, ' + nome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao('Gisele'));

  /*
  Dessa maneira, seu código fica mais legível e facilita a compreensão do que sua função está retornando.

Hora de testar 💻: Troque o nome 'Gisele' pelo seu. Não se esqueça de colocar entre aspas, indicando que o valor é uma string.

Agora, imagine que você precisa que a função imprimeSaudacao cumprimente a pessoa com nome e sobrenome. Como você faria?

As funções podem receber mais de um parâmetro e, para fazer isso, basta separá-los por vírgula na declaração e na hora de chamar a função. Veja o exemplo abaixo:

*/

function imprimeSaudacao(nome, sobrenome) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao('Andrei', 'Cardozo'));

  /*
  ⚠ Atenção: A ordem dos parâmetros importa! Ou seja, se você declarou o nome como primeiro parâmetro, ao chamar a função, o valor a ser passado primeiro é referente ao nome da pessoa.

Até agora você utilizou strings como parâmetro, mas as funções podem receber outros tipos de dados como parâmetro. Por exemplo, você pode salvar o nome e o sobrenome da pessoa em uma variável e passar para a função, como no exemplo abaixo:

function imprimeSaudacao(nome, sobrenome) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    return saudacao;
  }
  
  const nomeDaPessoa = 'Gisele';
  const sobrenomeDaPessoa = 'Santin';
  
  console.log(imprimeSaudacao(nomeDaPessoa, sobrenomeDaPessoa));


  Você também pode passar números. Por exemplo, imagine que você precisa cumprimentar a pessoa e dizer a idade dela. Observe o exemplo:

*/
function imprimeSaudacao(nome, sobrenome, idade) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade = 'Você tem ' + idade + ' anos.';
  
    return saudacao + ' ' + exibeIdade;
  }
  
  const nomeDaPessoa = 'Gisele';
  const sobrenomeDaPessoa = 'Santin';
  
  console.log(imprimeSaudacao(nomeDaPessoa, sobrenomeDaPessoa, 25));
