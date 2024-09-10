/*Operadores Lógicos

Você será capaz de:
Estruturar lógicas com duas condições utilizando: && (AND), || (OR) e ! (NOT)
Ao trabalhar com operadores lógicos, uma expressão terá apenas dois resultados: verdadeiro ou falso.

-----------------------------------------------------------------------------------------

Operador AND - &&


Imagine que um amigo seu, aqui chamado de Vinicius, quer passar o dia na praia. Ele trabalha e estuda nos dias de semana e, além disso, Vinicius só vai à praia quando está sol.

Nesse cenário fictício, não estamos apenas comparando se é final de semana ou apenas se está ensolarado; precisamos que essas duas comparações sejam verdadeiras.

Vamos supor que, mesmo assim, Vinicius decidiu que ir à praia, porém o local é longe da sua casa e não há meios de transporte público que cheguem até lá.

Nesse caso, ele precisará ir dirigindo, mas para isso terá que cumprir uma dessas duas condições:

ou ter gasolina no reservatório do carro para ir à praia;
ou ter dinheiro para abastecer.
Ainda assim, mesmo que estivesse tudo certo, Vinicius precisa que seu carro NÃO esteja quebrado.

Nossa! Quantas condições para serem atendidas, não é mesmo!? Mas não se preocupe! Com operadores lógicos, conseguimos fazer isso de maneira bem resumida.

Vamos ver como funcionariam esses exemplos?

Vinicius está decidindo se vai à praia, e notou que são necessárias duas coisas:

Ser final de semana;
Estar ensolarado.
Nesse caso, é necessário que ambas as condições sejam verdadeiras, caso contrário Vinicius não poderá ir à praia 😟.


O operador AND servirá justamente para fazer a comparação desses cenários, e nos retornar o resultado correto. Esse operador é representado pela sintaxe &&. Vamos testar com código e definir as variáveis utilizadas:


let ensolarado = false;
let fimDeSemana = true;

Com as variáveis definidas, podemos usar o operador && (AND).

let vaiAPraia = ensolarado && fimDeSemana
console.log(vaiAPraia); // false


*/


let ensolarado = true;
let fimDeSemana = false;

let vaiAPraia = ensolarado && fimDeSemana
console.log(vaiAPraia); // false

/*
Como observamos no exemplo, Vinicius ainda não pode ir à praia, pois o dia não está ensolarado. Será que, se mudarmos a variável ensolarado, isso irá resolver o problema de Vinicius?

nesse momento foi feito uma alteração no let ensolarado, de false para true.

🎉🎉🎉 EBAAA!!! Vinicius está feliz e agora pode ir à praia. 🎉🎉🎉

Vamos fazer mais um teste? O que será que acontece se fimDeSemana for false?

👀 Vinicius está de olho no que você está fazendo 👀

caso o fimDeSemana for false, ele não ira poder ir a praia, pois foge do padrão na qual ele vai, que é quando é final de semana e está ensolarado.

Vinicius: 😨
Vinicius: 😱

Vinicius parece não ter gostado que tenhamos mudado a variável finalDeSemana, mas ele entende que é por uma boa causa, afinal você poderá compreender como aplicar Operadores Lógicos.

Após aprendermos como funciona o operador lógico AND, vamos para o conteúdo do operador OR ou ||, onde Vinicius mostrará a importância de ter gasolina no seu carro. 🚗

Vinicius: 😢
 */


/*
------------------------------------------------------------------------------------------
Operador OR - ||


É final de semana, está ensolarado e Vinicius está pronto para ir à praia. 🏖️

Será que ele tem tudo de que precisa?

Onde Vinicius mora não há transporte público que faça o percurso até a praia. Dessa forma, é necessário ir de carro, e ele deverá cumprir um dos critérios:

O carro ter gasolina;
Ele ter dinheiro para abastecer.

Em código, podemos usar essa mesma lógica, por meio do nosso operador OR representado pela sintaxe ||. Agora veja como está a situação do Vinicius e se ele pode ir à praia:

*/

let gasolina = true;
let dinheiro = false;
let vaiAPraia2 = gasolina || dinheiro;
console.log(vaiAPraia2); // true

/* 
Vinicius: 🏖️😎

Ele tem gasolina, mas não tem dinheiro, porem com gasolina ele vai a praia, caso ele tenha apenas dinheiro, e não tenha gasolina, consequentemente ele podera abastecer para ir a praia, caso ele não tenha gasolina e nem dinheiro, ele não poderá ir a praia, mas caso ele tenha gasolina e tenha dinheiro, ele irá para a praia.
*/

/*
Aparentemente, Vinicius é responsável e não planejou ir à praia sem gasolina. Mas vamos supor que o tanque de gasolina está vazando e Vinicius tenha perdido toda a gasolina. O que aconteceria com o código?

Vinicius: 😱
*/

gasolina = false;
console.log(vaiAPraia); // false

/*
É… parece que Vinicius não tinha como ir à praia sem dinheiro e sem gasolina. Desculpe, Vinicius, foi para um bem maior, entender como funciona o operador || (OR).

Vinicius: 😊👍

Dando continuidade ao conteúdo, agora você vai aprender sobre o operador ! ou NOT.

Será que você vai conseguir fazer Vinicius ir à praia? Tudo isso e muito mais nas cenas dos próximos capítulos… 😁
*/

/*
------------------------------------------------------------------------

Operador NOT - !

------------------------------------------------------------------------

Imagine que o fim de semana chegou e está ensolarado, e que seu amigo Vinicius tem feito um árduo planejamento para que pudesse ir à praia: tem gasolina no carro e dinheiro para eventualidades ✅

Nada pode impedi-lo. Ou será que…

Ops… Será que Vinicius verificou se o carro estava quebrado?

Vinicius: 😅

Mas Vinicius, você sabia da tabela que tinha que seguir:

carro está quebrado?Sim. Então ele não irá a praia;
carro está quebrado?Não. Então ele irá a praia.

Vamos ver como ocorre essa situação em código?

Recapitulando… para Vinicius ir até a praia, era necessário que seu carro não estivesse quebrado. Nesse caso:

carroQuebrado seria a variável;
A variável vaiAPraia seria o oposto de carroQuebrado, pois ela necessita que o carro não esteja quebrado.
Para isso, você pode utilizar o operador NOT representado pela sintaxe !. Vamos dar uma olhada?

*/
let carroQuebrado = true;
vaiAPraia = !carroQuebrado;
console.log(vaiAPraia); // false

//Bom, se o carro do Vinicius está consertado, ele pode ir à praia. 👨‍🔬 Hora de testar 👩‍🔬 :

carroQuebrado = false;
vaiAPraia = !carroQuebrado;
console.log(vaiAPraia); // true

/*
Deu certo, que maravilha! Dessa maneira, foi possível que você aprendesse sobre o funcionamento do operador ! (NOT) e Vinicius conseguiu ir à praia. Não poderíamos ter resultados melhores. 🎉

Vinicius: 🏖️😎👍
*/

//-----------------------------------------------------------Exercícios-------------------------------------------------------
/*
Verifique o intervalo entre números: será que é par? 🤔
Neste exercício você vai desenvolver um programa que verifica se um número está no intervalo entre 20 e 50 e se o número é par. Abaixo existe uma variável com o número a ser verificado:

  let numero = 30;

a. Você precisa:

verificar se a variável numero é maior ou igual a 20 e menor ou igual a 50, e se o valor contido nela é par;
criar uma variável chamada resultado e atribuir o resultado da verificação a ela;
fazer um console.log do resultado.
*/

let numero = 30;
//se alterarmos o numero para algum numero impar, ele retornara como false
const intervaloEntre = numero >= 20 && numero <= 50 && numero % 2 === 0;
const resultado = intervaloEntre;

console.log(resultado);

/*
Utilize o operador lógico correto: feliz ou triste? 🎭
Abaixo existem duas variáveis, uma se chama local e a outra estadoEmocional:

let local = 'praia';
let estadoEmocional;

A variável local representa o lugar em que a pessoa está no momento;
A variável estadoEmocional representa qual o estado emocional da pessoa ao estar nesse local;
Crie uma lógica para saber o valor de estadoEmocional:

O valor da variável estadoEmocional deve ser uma verificação se o valor da variável local for igual a praia OU a variável local seja igual a cinema;
*/

let local = 'cinema';
let estadoEmocional = (local === 'cinema' || local === 'praia')? 'feliz' : 'indiferente';
console.log(estadoEmocional);

/*
Reatribua valores: Houston, nós temos um problema! 🚀
Em um laboratório da Nasa, cientistas se depararam com um erro muito grave em alguns dos computadores de bordo da nave Apollo 11. Você foi designado para encontrar a falha e corrigi-la. Ao estudar o código, encontrou as seguintes variáveis:
*/

let temOxigenioNoEspaco = true;
let aTerraEPequena = true;
console.log(temOxigenioNoEspaco);
console.log(aTerraEPequena);

/*

Para que o erro seja corrigido, você precisa REATRIBUIR os valores dessas variáveis para que os computadores de bordo da nave Apollo 11 voltem a operar normalmente. Para isso:

Reatribua o valor da variável temOxigenioNoEspaco de forma a negar seu valor original;
Reatribua o valor da variável aTerraEPequena de forma a negar seu valor original;

*/

 temOxigenioNoEspaco = !true;
 aTerraEPequena = !true;
    console.log(temOxigenioNoEspaco);
    console.log(aTerraEPequena);

/*
Analise o login e a senha: a credencial está correta? 🧑‍💻
Utilize as variáveis abaixo para escrever um programa que analisará o login e a senha de uma pessoa usuária:
*/
    let login = 'joabCassimiro';
    let senha = '12345678';
/*
a. Você deve verificar se as credênciais estão corretas:

Crie uma variável que conterá o resultado da verificação, dê a ela o nome de verificaCredenciais;
Compare se a variável login é estritamente igual a joabCassimiro e se a variável senha é estritamente igual a 12345678;
Atribua o retorno da comparação à variável verificaCredenciais.
Imprima no console o resultado da comparação.
*/
let verificaCredenciais;

verificaCredenciais = (login === 'joabCassimiro' && senha === '12345678');
console.log(verificaCredenciais);


/*
Negue o valor: !false ou !true ☯️


Juninho é um cara gente fina, mas não gosta muito de praia… 🧐 Para ajudar Juninho a mudar de ideia, você deve escrever um programa que vai fazer com que ele goste de praia. Para isso, utilize a variável disponibilizada abaixo e negue o valor dela:
*/

let gostoPorPraia = false;
console.log(gostoPorPraia);

/*
a. Você precisa negar o valor contido na variável gostoPorPraia:

Crie uma variável chamada novoGostoPorPraia e atribua a ela a negativa da variável gostoPorPraia;
Imprima o valor da variável novoGostoPorPraia no console.
*/

let novoGostoPorPraia;
novoGostoPorPraia = !gostoPorPraia;
console.log(novoGostoPorPraia);