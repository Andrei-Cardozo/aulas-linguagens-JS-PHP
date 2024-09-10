//----------------------------------------------------------------Arrays--------------------------------------------------------------------//

/*
O que vamos aprender?
Pode parecer um sonho, mas é possível termos variáveis que guardam mais de um valor utilizando listas! Como? Em JavaScript essas listas são conhecidas como arrays, então nada de dormir no ponto! Veja o que você vai aprender:

Descobrir o comprimento (quantidade total de elementos) de um array;
Descobrir a posição ou índice (número-chave) de um item no array;
Acessar um ou mais itens no array através do índice;
Adicionar ou modificar um item ao acessá-lo pelo índice.
*/

/*
Arrays
Arrays são listas que permitem armazenar mais de um valor por vez, ou seja, funciona como um tipo de variável composta. Uma variável composta pode armazenar inúmeros valores, diferente da variável simples, em que é possível guardar apenas um único valor. Sabendo disso, agora você pode guardar todos os nomes das pessoas estudantes de uma turma dentro de uma só variável! 🥳

Voltando ao exemplo dos nomes das pessoas estudantes por turma, veja agora como ficam esses nomes armazenados em arrays:

const alunosTurma1 = ['Fàbio', 'Cristina', 'Jéssica'];
const alunosTurma2 = ['João', 'Diogo'];

console.log(alunosTurma1); // ['Fàbio', 'Cristina', 'Jéssica']
console.log(alunosTurma2); // ['João', 'Diogo']
*/

/*
Adicionando um valor a um array
Você já conhece a magia do arrays, onde você pode guardar mais de um valor dentro de uma mesma variável. Agora é hora de colocar em prática resolvendo um problema do cotidiano.

Pense no seguinte cenário: você precisa ir ao mercado e fez uma lista de compras com JavaScript, utilizando um array para armazenar os itens da lista:

const listaDeCompras = ['arroz', 'feijão', 'ovo'];

Porém, esqueceu de adicionar o item 'farofa' e não pode adicioná-lo diretamente no seu array. O que fazer agora?

Para isso, você tem duas opções:

Usar o próximo índice disponível;
Utilizar a função .push(), um método próprio para adicionar um item no array.
Primeiro, vamos testar usando o próximo índice disponível:

O formato é o seguinte: meuArray[proximoIndiceDisponivel] = valor. Ou seja, você utiliza a posição que está disponível no array e atribui um valor a ela.

Como sua lista tem três itens, e sabendo que o index começa no 0, o último index é o 2 ('ovo'). Dessa maneira, o próximo index disponível é o 3:

Porém, esqueceu de adicionar o item 'farofa' e não pode adicioná-lo diretamente no seu array. O que fazer agora?

Para isso, você tem duas opções:

Usar o próximo índice disponível;
Utilizar a função .push(), um método próprio para adicionar um item no array.
Primeiro, vamos testar usando o próximo índice disponível:

O formato é o seguinte: meuArray[proximoIndiceDisponivel] = valor. Ou seja, você utiliza a posição que está disponível no array e atribui um valor a ela.

Como sua lista tem três itens, e sabendo que o index começa no 0, o último index é o 2 ('ovo'). Dessa maneira, o próximo index disponível é o 3:

Nossa lista é pequena e conseguimos contar cada item, mas e se a lista fosse maior? Ficaria difícil saber qual é o último item do array. Para isso, podemos utilizar o .push(), que vai adicionar um valor ao final do array. Seu formato é: meuArray.push(valor);.

Veja como fica o exemplo da lista de compras:

const listaCompras = ['arroz', 'feijão', 'ovo'];

console.log(listaCompras.push('farofa')); // ['arroz', 'feijão', 'ovo', 'farofa']

Pronto! Lista atualizada com sucesso!

Ao utilizar o .push(), não é necessário saber o último índice do array para adicionar um item. Legal, né?

Vamos a mais um exemplo:

Ao voltar do mercado, você fez sua refeição e começou a lembrar de todos os anos em que o Brasil foi campeão da Copa do Mundo até o ano de 2002 e, para não esquecer, decidiu criar uma lista:

const titulosCopaDoMundo = [1958, 1962, 1970, 1994];

console.log(titulosCopaDoMundo); // [1958, 1962, 1970, 1994]

Ops! Faltou o título de 2002!

Para adicionar esse título utilizando o próximo índice disponível, é necessário saber qual o índice do último item da lista atual que, nesse caso, é 3 (ano de 1994). Então, o próximo índice disponível será o 4 (ano de 2002), pois será o próximo a ser incluso na lista e ainda não há nenhum item atribuído a ele.
*/

const titulosCopaDoMundo = [1958, 1962, 1970, 1994];

titulosCopaDoMundo[4]=2002;
console.log(titulosCopaDoMundo);

/*
Você deve estar se perguntando: “Mas e o .push()?”

Vamos fazer a inserção pelo método push utilizando o mesmo exemplo da Copa, observe:

const titulosCopaDoMundo = [1958, 1962, 1970, 1994];
titulosCopaDoMundo.push(2002);

console.log(titulosCopaDoMundo); // [1958, 1962, 1970, 1994, 2002]

Você percebeu que, utilizando os dois métodos diferentes, fizemos a mesma coisa?

Anota aí 📣 : A vantagem do .push() é que você não precisa saber o próximo índice disponível para adicionar um valor a um array, pois essa função já adiciona ao final da lista o valor passado entre os parênteses.

Agora que você já sabe como adicionar itens a uma lista, que tal realizar um teste no seu computador utilizando os dois métodos que você viu!?

Substituindo um item em um array
Imagine que você precisa fazer um programa que analise o clima da região Norte e, para realizar essa tarefa, criou uma lista para armazenar os estados da região, mas, ao invés de adicionar o ‘Pará’, você sem querer adicionou o ‘Paraná’, que é da região Sul:

const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];

O que você faz? Vai ter que criar uma outra variável e escrever a lista toda do zero? Calma lá, não precisa desse trabalhão todo não.

Primeiro, você precisa descobrir o índice do item que você quer substituir:

const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];

console.log(estadosNorte[3]); // Paraná

Segundo, com o índice em mãos, basta atribuir o novo valor nele, no formato meuArray[meuIndiceJaOcupado] = valor.

const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];
estadosNorte[3] = 'Pará';

console.log(estadosNorte); // 'Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins'

Pronto! Agora sua lista de estados da região Norte está correta! 🎉

Vamos ver mais um exemplo?

Você foi fazer o almoço e percebeu que estava sem alguns ingredientes, então decidiu escrever uma lista do que precisa comprar no mercado:

const ingredientes = ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino'];

console.log(ingredientes); // ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino']

Você abriu a geladeira e viu que a cenoura estava escondida atrás da garrafa de água, o que te fez lembrar que deveria comprar um suco, e agora?

*/
const ingredientes = ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino'];

console.log(ingredientes); // ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino']

ingredientes[2] = 'suco';

console.log(ingredientes);

/*
De olho na dica 👀 : Para facilitar a manipulação de listas, sem precisar escrevê-las do zero quando quiser substituir um valor, utilize o índice do item que você quer substituir.

Viu só? Deu tudo certo! Agora você vai poder comprar todos os ingredientes para fazer sua refeição.
*/

/* -------------------------------------------------------------------Recuperando o tamanho de um array
Você decidiu fazer uma festa, entretanto acabou se perdendo na quantidade de pessoas que estão na lista de convidados, afinal sempre tem pessoas confirmando ou cancelando a participação no evento. Você precisa saber a quantidade de pessoas que farão parte da festa para decidir o local adequado. E agora, como solucionar esse problema?

Para descobrir essa informação, basta olhar a quantidade de itens da lista, ou seja, o tamanho dela.
Como? 🤔

Existe uma função no JavaScript que já faz isso para a nós: a .length.

De olho na dica 👀 : A palavra length, em português, significa comprimento, ou seja, essa função nos retorna o comprimento do nosso array e também pode ser utilizada para saber o tamanho de uma string, utilizando o formato string.length.

A única coisa que você precisa fazer é usar o .length no final do array, por exemplo: meuArray.length. Só com esse formato você já consegue pegar o comprimento desse array.

Seguindo o exemplo da lista de convidados, veja o código abaixo:
*/

const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana'];
const quantidadeConvidados = convidados.length;

console.log(convidados); 
console.log(quantidadeConvidados); 

//Se adicionarmos um valor a essa lista, ela mudaria de tamanho? Com toda certeza. Veja o código a seguir:

const convidados1 = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana'];
convidados1.push('Evelyn');

console.log(convidados1); 
console.log(convidados1.length); // 13

/*
Agora temos a Evelyn na nossa lista de convidados e o array possui 13 pessoas no momento.

De olho na dica 👀 : Com o .length, também podemos descobrir qual é o último valor da lista, sem precisar de índice!

Temos 13 convidados na nossa lista. Podemos verificar com convidados.length.
Sabemos que o índice começa do 0, ou seja, se temos 13 itens, significa que o último índice é 13 - 1, no caso, 12. Podemos verificar com convidados.length - 1.
Então, para pegarmos o último valor da lista, ficaria da seguinte forma: meuArray[meuArray.length - 1].

Ou seja, como o índice do último item sempre é 1 número a menos que o comprimento total dessa lista, a única coisa que precisamos fazer é subtrair 1 da quantidade total de itens do array.

Por exemplo:

const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana', 'Evelyn'];
const ultimoConvidado = convidados[convidados.length - 1];

console.log(ultimoConvidado); // Evelyn
    
*/

// ----------------------------------------------------------------Exercícios-------------------------------------------------------------

/*
Lista de compras 🧾
Imagine que você está saindo para fazer compras no supermercado com a seguinte lista:

Maçã
Biscoito/Bolacha
Banana
Café em pó
Leite
Arroz
Crie uma variável chamada listaDeCompras e atribua um array com as informações da lista acima.
*/
const listaDeCompras = ['maçã', 'biscoito/bolacha', 'banana', 'café em pó', 'leite', 'arroz'];

console.log(listaDeCompras);
console.log(listaDeCompras.length-1);

/*
Imprimindo na tela itens de um array 💻
Elabore um algoritmo usando o código abaixo:

const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];

Utilize o console.log() para mostrar as seguintes informações no console:

Mostre o terceiro item do array;
Mostre o primeiro item do array;
Mostre o quinto item do array;
Mostre a concatenação do primeiro item com o terceiro item do array. O retorno deve seguir a estrutura 'item1 e item3', onde item1 e item3 são seus respectivos valores.
*/
const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];
console.log (frutas[2]); //banana é o terceiro item da array... pq o 2 ali então? Simples, o indice do vetor inicia em 0. 0, 1, 2 (banana se enontra no indice 2 do vetor).
console.log (frutas[0]); //abacaxi
console.log (frutas[4]); //maçã
let vitamina = (frutas[0]) + ' e ' + (frutas[2]);
console.log(vitamina);

