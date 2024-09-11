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
};
cumprimentar();