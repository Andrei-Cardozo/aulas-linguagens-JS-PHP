//--------------------------------------------------Estrutura de Repetição---------------------------------------------------------------
/*
O que vamos aprender?
Utilizar a estrutura de repetição for para facilitar a execução de repetições condicionais nos seus códigos.
Por que isso é importante?
Em sua vida como pessoa desenvolvedora, você vai ter situações em que precisará realizar o mesmo passo várias vezes. A estrutura de repetição for entra nesse momento para facilitar a sua vida! Você poderá repetir o bloco de código dentro do for utilizando estruturas condicionais, quantas vezes for necessário, até que a condição passada seja atendida. Por exemplo:

Você precisa calcular a média de 30 pessoas estudantes e, com os recursos que você tem até agora, teria que fazer o cálculo de uma pessoa estudante por vez. Quanto trabalho, não é mesmo? Dá preguiça só de pensar… 🥱😫
É aqui que o for ✨ brilha ✨! Com ele você poderá criar uma condição para que ele rode 30 vezes e armazene as 30 médias das pessoas estudantes em um array com poucas linhas de código, evitando a repetição de código e resultando em menos trabalho, afinal não será necessário fazer 30 médias de pessoas estudantes de forma manual.

*/

/*--------------------------------------------------Estrutura de repetição for------------------------------------------------------------------------------
Em algum momento você pode precisar repetir um mesmo passo várias vezes. Por exemplo, no ano novo existe a tradição de fazer uma contagem regressiva na espera da virada. Para fazer uma contagem regressiva em código, com as ferramentas que você tem até agora, o código ficaria mais ou menos assim:
console.log(10);
console.log(9);
console.log(8);
console.log(7);
console.log(6);
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');

Bom, a estrutura desse código ficou meio repetitivo, né? Você está realizando o mesmo passo várias vezes, ou seja, dando um console.log em um e depois no outro, até que esse valor seja reduzido a uma unidade, no caso do exemplo, até o valor chegar a 1.

O for serve para solucionar esse problema! Ele é um laço de repetição (também chamado de loop) que vai realizar diversas vezes o conjunto de instruções que estiver dentro dele, até que uma condição especificada seja atendida. Seu formato é o seguinte:

for (expressão inicial; condição a ser cumprida; atualização da expressão inicial) {
    // código que será repetido
}

Hora de testar 💻 : Você pode decompor o problema da contagem regressiva em partes menores para montar o for:

A contagem começa em 10, logo a expressão inicial começará com o valor 10;
Você quer que o for pare quando? Quando a nossa contagem chegar a 1, logo, a condição a ser cumprida será quando expressão inicial for igual a 1.
A contagem é regressiva, logo, você vai diminuir uma unidade da expressão inicial a cada iteração, ou seja, a cada repetição.
Anota aí 📣 : Para nos referirmos a laços de repetição (loops), podemos utilizar a palavra ‘iteração’, que significa ‘repetição’.

Agora que o problema foi decomposto, você vai aplicá-lo em código, seguindo o passo a passo:

Declare uma variável com valor 10 utilizando let, porque esse valor será mudado durante o loop:
Relembrando 🧠 : Se você declarar a variável utilizando const, ela não poderá ser alterada e o seu for não vai funcionar da forma esperada.

for (let index = 10; condição a ser cumprida; atualização da expressão inicial) {
    // código que será repetido
}

De olho na dica 👀 : Você pode nomear essa variável do jeito que preferir, porém é uma boa prática chamá-la de index (índice), já que a iteração acontece pelo index do array.

Vamos para o próximo passo!

A contagem regressiva de ano novo começa em 10 e vai até 1, então você precisa que o for rode enquanto o index for maior ou igual a 1. Quando chegar ao final da contagem, vamos estourar o champagne 🍾, ou seja, você vai parar o for. Logo, nossa condição a ser cumprida é index >= 1. Isso quer dizer que, quando o index atender a essa condição, o for será parado:

for (let index = 10; index >= 1; atualização da expressão inicial) {
  // código que será repetido
}

Agora, vamos à última expressão do for.

Como é uma contagem regressiva, você vai decrementar uma unidade do index por vez (10… 9… 8…), logo, a atualização da expressão inicial será index = index - 1:
Anota aí 📣 : Você também pode usar o operador de decremento --. Ele vai ter o mesmo efeito que index = index - 1. Ficaria da seguinte forma: --index. Mas tenha atenção: esse operador tira apenas uma unidade do número!

for (let index = 10; index >= 1; index = index - 1) {
  // código que será repetido
}

O for está montado! Só falta colocar o código que você deseja repetir. Nesse caso, você vai fazer um console.log do index:

for (let index = 10; index >= 1; index = index - 1) {
  console.log(index);
}

Mas agora que você terminou a contagem, temos que estourar o champagne né, senão não é ano novo:
*/
for (let index = 10; index >= 1; index = index - 1){
    console.log(index);
}
console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');