/*Comparar valores
Quando desejamos obter o resultado da comparação entre dois valores, 
usamos pequenas expressões chamadas de Operadores de Comparação.

A estrutura de uma expressão desse tipo segue o seguinte formato ⬇️ :

 [valor] [operador de comparação] [valor]
----------------------------------------------------------------
=== para comparar estritamente a igualdade entre dois valores;
!== para comparar estritamente a diferença entre dois valores;
> para comparar se um valor é maior do que o outro;
< para comparar se um valor é menor do que o outro;
>= para comparar se um valor é maior ou igual do que o outro;
<= para comparar se um valor é menor ou igual do que o outro.
----------------------------------------------------------------

7 < 10 // 7 é menor que 10 (verdadeiro), então retorna true.
7 > 10 // 7 é maior que 10 (falso), então retorna false. 

Vamos ver como funciona na prática?

Imagine que você precisa verificar a maioridade de uma pessoa. 
No Brasil, uma pessoa nessa condição tem 18 anos completos, ou seja, 
a pessoa que você vai verificar precisa estar dentro desse critério.

Talvez você tenha pensado na seguinte expressão:

“A idade da pessoa é maior ou igual a 18 anos?”
Primeiro, vamos supor que a pessoa que está sendo verificada tenha 17 anos. 
Convertendo simulação para código, temos:*/

const idadeDaPessoa = 17;
const idadeMaioridade = 18;

const verificaMaioridade = idadeDaPessoa >= idadeMaioridade; 
console.log(verificaMaioridade);
// aqui estamos verificando se idadeDaPessoa é maior ou igual que idadeMaioridade, 
//o que retorna falso porque 17 não é maior e nem igual a 18
	
const verificaIdade = idadeDaPessoa === 17; 
console.log(verificaIdade);
// aqui estamos comparando se idadeDaPessoa é igual a 17, o que é verdade, retornando true

/*
Operador === (igualdade)

O operador ===, chamado de “operador de igualdade estrita”,
é utilizado para comparar dois valores. Veja o exemplo abaixo: */

const cidade = 'Belo Horizonte';

const verificaCidade = cidade === 'Belo Horizonte';

console.log(verificaCidade);

/*Vamos analisar mais um exemplo:*/

const idade = '45';

const verificaIdade2 = idade === 45;

console.log(verificaIdade2);

/*O que você acha que será atribuído à variável verificaIdade: true ou false?

Se você respondeu true, não acertou, pois o que será atribuído à variável verificaIdade é false. 
Esse é um ponto muito importante, mas não se preocupe! Vamos às explicações.

Anota aí 📣: 
O operador === só compara valores do mesmo tipo primitivo. 
Com isso, você deve comparar uma string somente com outra string e um number somente com outro number.*/

/*
É possível considerar o operador !== o oposto do operador ===, ou seja,
 !== é diferença estrita e === é igualdade estrita.

De olho na dica 👀 : Você pode chamar o operador !== de diferente de. 
Além disso, esse operador leva em consideração o tipo primitivo dos valores, 
assim como o operador ===.

Veja o exemplo:
*/
const nomeDoCachorro = 'Pipoca';

const verificaNomeCachorro = nomeDoCachorro !== 'Pipoca'; 
// o valor da variável nomeDoCachorro é diferente de Pipoca?

console.log(verificaNomeCachorro); // false

//O operador !== verifica se os valores são diferentes; desse modo, se um valor for diferente do outro, 
//ele retorna true, e se for igual, retornará false.

/*Operador > (maior que) e < (menor que)
Chegou a hora de vermos sobre o operador >! Ele é utilizado quando queremos verificar 
se um valor é maior do que outro valor. 
Observe o exemplo a seguir, que compara a idade de uma pessoa com a classificação indicativa de um filme:*/
const classificacaoIndicativa = 14;

const idadeDaPessoaFilme = 15;

const verificaIdadeFilme = idadeDaPessoa > classificacaoIndicativa;

console.log(verificaIdadeFilme);

/*Vamos agora para o operador <, que significa menor que. 
Sua função é verificar se um valor é menor que outro valor.

Vamos usar o exemplo anterior, mas dessa vez trocando os operadores. Observe:*/
const classificacaoIndicativa2 = 14;

const idadeDaPessoaFilme2 = 15;

const verificaIdadeFilme2 = idadeDaPessoa < classificacaoIndicativa;

console.log(verificaIdadeFilme2);

//Operador >= (maior igual que) <= (menor igual que)

/*Quando queremos saber se “um valor é maior ou igual a outro valor”, podemos utilizar o operador >=.

Veja o código abaixo:*/
const idadeDaPessoa3 = 18;

const idadeMaioridade3 = 18;

const verificaIdadeMaior3 = idadeDaPessoa3 > idadeMaioridade3; //retorna falso, pois ele não é maior que 18

const verificaIdadeMaiorOuIgual = idadeDaPessoa3 >= idadeMaioridade3; //retorna verdadeiro, pois ele é maior ou igual a 18.

console.log(verificaIdadeMaior3);
console.log(verificaIdadeMaiorOuIgual);

/*O operador <=, chamado de menor que, funciona de maneira similar. Vamos aplicá-lo no mesmo exemplo e analisar o resultado:*/

const idadeDaPessoa4 = 18;

const idadeMaioridade4 = 18;

const verificaIdade4 = idadeDaPessoa4 <= idadeMaioridade4; //deve retornar verdadeiro, pois ele é menor ou Igual a 18.

console.log(verificaIdade4);

//Exercícios//

/*Crie e compare variáveis: É menor, maior ou igual? 🤔
Imagine que você precisa comprar duas peças de roupa, entretanto, após o pagamento de suas contas, você tem somente R$ 60,00 reais para gastar.

Faça um algoritmo para verificar se as duas peças de que precisa, caberão no seu orçamento.

a. Crie duas variáveis roupa1 e roupa2:

Na variável chamada de roupa1, você vai adicionar o valor 35;
Na variável chamada de roupa2, você vai adicionar o valor 20;
b. Crie a variável compras:

Atribua a ela o valor da soma entre roupa1 e roupa2;
c. Crie uma variável chamada orcamento:

Verifique se compras é menor ou igual a 60 e atribua o retorno a variável orcamento.*/

const roupa1 = 35;
const roupa2 = 20;

const compras = roupa1 + roupa2;
console.log(compras); //deve retornar 55.
const orcamento = compras <= 60; //deve retornar verdadeiro.

console.log(orcamento);

/*Comparando as idades 👵
Nesse exercício você vai desenvolver um programa capaz de verificar duas idades.

a. Crie as variáveis idadeDaThays e idadeDoDouglas:

Crie uma variável chamada idadeDaThays e atribua o valor 53;
Crie uma variável chamada idadeDoDouglas e atribua o valor 49;
b. Compare as idades, armazenando o resultado das comparações:

Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação.

comparacao1: Compare se idadeDaThays é maior que idadeDoDouglas;
comparacao2: Compare se idadeDoDouglas é menor que idadeDaThays. */

let idadeDaThays = 53;
let idadeDoDouglas = 49;

const comparaIdade1 = idadeDaThays > idadeDoDouglas; //deve retornar verdadeiro.
console.log(comparaIdade1);

const comparaIdade2 = idadeDoDouglas < idadeDaThays; //deve retornar verdadeiro.
console.log(comparaIdade2);

/*Compare os nomes 🗣
Verifique as variáveis abaixo e valide as seguintes afirmações utilizando os operadores condicionais:

let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;

a. Crie as variáveis para armazenar as seguintes comparações:

comparacao1: compare se o nome da pessoa 1 é diferente de Sheila;
comparacao2: compare se a idade da pessoa 1 é igual a 18;
comparacao3: compare se o nome da pessoa 2 é igual a Cleyton;
comparacao4: compare se a idade da pessoa 2 é diferente de 30.
Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação. */

let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;

const comparacao1 = nomePessoa1 !== nomePessoa2; //deve retornar verdadeiro, pois o operador !== é sobre retorno de estritamente diferente.
console.log(comparacao1);

const comparacao2 = idadePessoa1 === 18; //deve retornar falso, pois o operador === refere-se a retorno de estritamente igual, e nesse caso, a idade não 18, e sim 18.
console.log(comparacao2);

const comparacao3 = nomePessoa2 === nomePessoa1; //deve retornar falso, pois são nomes bem diferentes, e o operador === refere-se a retorno de estritamente igual, e nesse caso, os nomes das pessoas são diferentes.
console.log(comparacao3);

const comparacao4 = idadePessoa2 !== 30; //deve retornar falso, pois operador !== refere-se a um retorno estritamente diferente, e nesse caso, as idades são diferentes.
console.log(comparacao4);

/*Verifique o estoque 👀

Neste exercício você precisa desenvolver um programa que verifica e compara a quantidade de itens do estoque de uma loja. Abaixo existem três produtos e suas quantidades já definidos:

  let sapato = 15;
  let chinelo = 22;
  let pantufa = 33;

a. Crie variáveis para armazenar o valor de cada comparação:

verificacao1 compare se o valor da variável sapato é maior ou igual a 15;
verificacao2 compare se o valor da variável chinelo é maior ou igual a 12;
verificacao3 compare se o valor da variável pantufa é menor ou igual a 18;
b. Após ter todas as comparações feitas, imprima no console.log cada verificação. */

let sapato = 15;
let chinelo = 22;
let pantufa = 33;

const verificacao1 = sapato >= 15; //Deve retornar como verdadeiro, pois a variavel sapato tem um valor maior ou igual a 15.
console.log(verificacao1);

const verificacao2 = chinelo >= 12; //Deve retornar como verdadeiro, pois a variavel chinelo tem um valor maior ou igual 12, no caso tem 22.
console.log(verificacao2);

const verificacao3 = pantufa <= 18; // deve retornar como falso, pois a variavel pantufa tem um valor de 33, ou seja, ela não é menor ou igual a 18.
console.log(verificacao3);

/*Valide as senhas 🕵️
Neste exercício você vai criar um validador de senhas. Abaixo, existe uma variável que contém a senha para entrar no wi-fi da casa do Juquinha. Juquinha pediu que você criasse um programa que verifique se a senha digitada é estritamente igual a senha escolhida para acessar o wi-fi.

  let senhaDoWiFi = 159000;

  let senhaDigitada1 = 169000;
  let senhaDigitada2 = 159000;
  let senhaDigitada3 = '159000';
  let senhaDigitada4 = 159000;

a. Crie variáveis suficientes para testar cada uma das senhaDigitadaN:

A senha deve ser estritamente igual a senhaDoWiFi;
Compare cada uma das senhas e atribua o valor da comparação em uma variável chamada verificacaoN, onde N é o número da comparação;
Por último, Utilize as variáveis que você criou para adicionar o resultado da comparação, para mostrar no console se a senha é válida ou não. */

//estritamente igual "==="

let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;

const validaSenha1 = senhaDigitada1 === senhaDoWiFi; //deve retornar falso, pois não são iguais.
console.log(validaSenha1);

const validaSenha2 = senhaDigitada2 === senhaDoWiFi; //deve retornar verdadeira, pois são iguais.
console.log(validaSenha2);

const validaSenha3 = senhaDigitada3 === senhaDoWiFi; //deve retornar falso, pois quando se tem um valor entre 'aspas', ele vira como string, e foi declarada na senha do wifi como number.
console.log(validaSenha3);

const validaSenha4 = senhaDigitada4 === senhaDoWiFi; //deve retornar verdadeira, pois são iguais.
console.log(validaSenha4);