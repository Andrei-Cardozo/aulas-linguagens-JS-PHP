// Operação de soma:
// 2 + 2; // 4

// Operação de subtração:
// 10 - 2; // 8

// Operação de multiplicação:
// 4 * 3; // 12

// Operação de divisão:
// 12 / 6; // 2

// Operação de exponenciação:
// 2 ** 2 // Retorna 4
// 4 ** 3 // Retorna 64

// Operação de modulo:
// 2 % 2 // Retorna 0
// 7 % 3 // Retorna 1
// 5 % 3 // Retorna 2

let soma = 10 + 5;
console.log(soma); // Mostra o valor 15 no console

let primeiroExemplo = 2 + 5 + 8; //soma
console.log(primeiroExemplo); // 15

let segundoExemplo = 8 + 3 * 4; //operação aritmetica
console.log(segundoExemplo); // 20

let terceiroExemplo = (4 + 5 - 3) / 2; //operação aritmetica
console.log(terceiroExemplo ); // 3

let quartoExemplo = 2 ** 3; //operação de exponenciação
console.log(quartoExemplo); // 8

let quintoExemplo = 10 % 7; //operação de modulo
console.log(quintoExemplo); // 3

let meuUltimoExemplo = primeiroExemplo + segundoExemplo * (terceiroExemplo / quintoExemplo) - quartoExemplo; //operação aritmetica
console.log(meuUltimoExemplo ); // 27

// Em JavaScript, é possível realizar operações com outros tipos de valores,
// como, por exemplo, strings e booleans:

let hello = 'Hello';
hello = hello + ' ' + 'World';

console.log(hello); // "Hello World"

let somaBoolean = true + true;
console.log(somaBoolean); // 2

//-----------------------------------------------------------------------------
// Exercícios
// Realize a soma ➕
// O objetivo deste exercício é realizar a soma entre 178 e 93. Para isso:

// Crie a variável primeiroNumero e atribua a ela o valor 178;
// Crie a variável segundoNumero e atribua a ela o valor 93;
// Crie a variável resultadoDaSoma e atribua a ela a soma entre as variáveis primeiroNumero e segundoNumero.

let primeiroNumero = 178;
let segundoNumero = 93;
let resultadoDaSoma = primeiroNumero + segundoNumero;
console.log(resultadoDaSoma);

//Subtraindo números ➖
//O objetivo deste exercício é realizar a subtração entre 133 e 87. Para isso:

//Crie a variável primeiroNumero e atribua a ela o valor 133;
//Crie a variável segundoNumero e atribua a ela o valor 87;
//Crie a variável resultadoDaSubtracao e atribua a ela a subtração entre as variáveis primeiroNumero e segundoNumero.

let primeiroNumeroSubtracao = 133;
let segundoNumeroSubtracao = 87;
let resultadoDaSubtracao = primeiroNumeroSubtracao - segundoNumeroSubtracao;
console.log(resultadoDaSubtracao);

/*Divida os números ➗
O objetivo deste exercício é realizar a divisão de 192 por 12. Para isso:

Crie a variável dividendo e atribua a ela o valor 192;
Crie a variável divisor e atribua a ela o valor 12;
Crie a variável resultadoDaDivisao e atribua a ela a divisão da variável dividendo pela variável divisor.*/
let dividendo = 192;
let divisor = 12;
let resultadoDaDivisao = dividendo / divisor;
console.log(resultadoDaDivisao);

/*Multiplicando os números ✖️
O objetivo deste exercício é realizar a multiplicação de 133 por 13. Para isso:

Crie a variável multiplicador e atribua a ela o valor 133;
Crie a variável multiplicando e atribua a ela o valor 13;
Crie a variável resultadoDaMultiplicacao e atribua a ela a multiplicação da variável multiplicador;pela variável multiplicando.*/
let multiplicador = 133;
let multiplicando = 13;
let resultadoDaMultiplicacao = multiplicador * multiplicando;
console.log(resultadoDaMultiplicacao);

/*Realize a potência 🔢
O objetivo deste exercício é encontrar o resultado da potência de base 2 e expoente 10. Para isso:

Crie a variável base e atribua a ela o valor 2;
Crie a variável expoente e atribua a ela o valor 10;
Crie a variável potencia e atribua a ela a operação da variável base elevada a variável expoente.*/

let base = 2;
let expoente = 10;
let potencia =  base ** expoente;
console.log(potencia);


/*Resto da divisão ﹪
O objetivo deste exercício é encontrar o resto da divisão de 11 por 3. Para isso:

Crie a variável dividendo e atribua a ela o valor 11;
Crie a variável divisor e atribua a ela o valor 3;
Crie a variável restoDaDivisao e atribua a ela a o resto da divisão entre a variável dividendo pela variável divisor.*/

let dividendoResto = 11;
let divisorResto = 3;
let restoDaDivisao = dividendoResto % divisorResto;
console.log(restoDaDivisao);