//--------------------------------------------Estrutura Condicional if/else-------------------------------------------------

/*A estrutura básica de um if:
A estrutura condicional if segue um formato para que o código seja executado de acordo com uma condição.

if (condicao) { // caso 'condicao' seja verdadeira, executa o código
  // código a ser executado
}
  Observe que a palavra-chave if é seguida por um conjunto de parênteses () com uma condição dentro, e logo após por um bloco de código indicado por um conjunto de chaves {}.

Anota aí 📣 :

Dentro dos parênteses do if é fornecida uma condição que é avaliada como true ou false.
Se a condição retorna verdadeiro (true), o código dentro das chaves {} é executado.
No exemplo, a condição a ser verificada é o clima, ou seja, se está frio:

if (estiver frio) { // se estiver frio, nossa condição será true
  saia com o casaco // então execute o código
}

Ou seja, se está frio, o código dentro do escopo do if será executado.

Escopo? O que é isso? 🤔

Um escopo é um bloco de código. Observe o exemplo abaixo:

if (1 + 1 === 2) { // true
  console.log('Entrou no escopo deste if'); // executa o código
}

if (1 + 1 === 3) { // false
  console.log('Não entrou no escopo deste if'); // não executa o código
}

Na primeira condição está sendo verificada pelo if a expressão 1 + 1 === 2 e sabemos que essa é uma condição verdadeira (true), então o código no escopo do if será executado, e a frase 'Entrou no escopo deste if' é exibida.
Na segunda condição, está sendo verificado se a expressão 1 + 1 === 3, que é falsa (false) e não chega a entrar no escopo do if, por isso a frase ‘Não entrou no escopo deste if’ não é executada.

*/


/*----------------------------------else
O else é o complemento do if e que, traduzido para o português, seria como dizer se e se não.

Voltando ao nosso exemplo do casaco, observe:

if (estiver frio) { // SE estiver frio
  saia com casaco
} else { // SE NÃO
  deixe o casaco em casa
}

Caso a condição estiver frio seja verdadeira (true), o código entrará no escopo do if; caso seja falsa (false) o código entrará no escopo do else.

Anota aí 📣 : Sempre que a condição do if não for verdadeira, ou seja, retornar falso, o else entra em ação e o código dentro do seu escopo será executado.

Isso significa que o else também tem escopo? 🧐

Exatamente! Assim como no if, o else também tem escopo próprio, logo, as regras que se aplicam ao if também são aplicadas ao else.

Encadeamento de condicionais
Eventualmente você vai se deparar com problemas que terão mais de duas condições a serem verificadas. Para atender a mais de duas condições nós utilizamos o else if.

Para entender o else if, vamos supor que você gosta muito de vitamina de abacate e de banana, mas quando não tem nenhuma dessas duas frutas em casa, você faz vitamina da fruta que estiver disponível. Então você tem a seguinte estrutura condicional para fazer a vitamina:

Se a fruta for abacate, podemos fazer uma vitamina de abacate;
Se não, se a fruta for banana, podemos fazer uma vitamina de banana;
Se não for nenhuma dessas duas, podemos fazer um suco da fruta que temos disponível.
Abaixo temos essa estrutura de condição em formato de código:

const frutaDisponivel = 'banana';

if (frutaDisponivel === 'abacate') {
  console.log('Vitamina de abacate saindo');
} else if (frutaDisponivel === 'banana') {
  console.log('Vitamina de banana saindo');
} else {
  console.log('Suco de ' + frutaDisponivel + ' saindo');
}

Vamos analisar o nosso código:

Temos uma variável chamada frutaDisponivel com o valor banana, que é a fruta que está disponível para fazer a vitamina;
Em seguida, temos também uma estrutura condicional que vai verificar qual outra fruta está disponível e, de acordo com a resposta, nos retornará uma das duas vitaminas ou um suco da fruta disponível.
Perceba que foi utilizada uma nova palavra-chave, o else if (se não, se). Ela é utilizada quando precisamos verificar algo além do que foi verificado no primeiro if, ou seja, teremos 2 ou mais comparações.

Você pode adicionar quantos else if forem necessários em uma mesma estrutura condicional. Veja esse exemplo em que também foi aplicado o else/if:

A estrutura condicional abaixo representa o sistema de notas da escola Trybe, referência no ensino de programação 😉

  const notaDaPessoaEstudante = 7.5;

if (notaDaPessoaEstudante >= 8) {
  console.log('Nota A');
} else if (notaDaPessoaEstudante >= 6 && notaDaPessoaEstudante < 8 ) {
  console.log('Nota B');
} else if (notaDaPessoaEstudante >= 4 && notaDaPessoaEstudante < 6 ) {
  console.log('Nota C');
} else {
  console.log('Nota D');
}
*/

//----------------------------------------------------------Exercícios---------------------------------------------

/*
Atribua uma mensagem ✉️
Crie um algoritmo que atribui uma mensagem à variável por meio de uma condicional if.

Para isso, siga as instruções a seguir:

Crie uma variável chamada atribuirMensagem e atribua o valor true à ela;
Crie uma variável chamada mensagem para armazenar uma string que será a mensagem, mas não atribua nenhum valor para ela;
Crie uma estrutura condicional if para que caso a variável atribuirMensagem seja verdadeira, a variável mensagem receba a string 'Olá, Tryber!';
*/

let atribuirMensagem = true;
let mensagem;
    if (atribuirMensagem ) {
        mensagem = ('Olá, Tryber!');
        console.log(mensagem);
    }

/*
Complete o código 💡
Analise o código a seguir:

let lampada = 'ligada';
let estadoLampada;

if (???) {
  estadoLampada = 'A lâmpada está ligada!';
} ??? {
  ????????
}

Com base no seu aprendizado sobre if/else, altere o código onde se encontram os pontos de interrogação (?), seguindo as instruções abaixo:

Uma operação de comparação na condicional if que verifique se o valor da variável lampada é igual a 'ligada';
Uma condicional else que verifique se, caso o valor da variável lampada não for igual a ‘ligada’, então a variável estadoLampada receberá a string 'A lâmpada está desligada!'.
*/

let lampada = 'ligada';
let estadoLampada;

if (lampada === 'ligada') {
  estadoLampada = 'A lâmpada está ligada!';
} else {
  estadoLampada = 'A lâmpada está desligada!';
};
console.log(estadoLampada);

/*
Verifique se é par ou ímpar 🔢
Crie um algoritmo que verifica se o valor da variável num é par ou ímpar:

let num = 22;
let mensagem;

Se a variável num guarda um valor par, altere a variável mensagem para 'num é par!', onde num é o próprio número. Por exemplo: '6 é par!';
Se a variável num guarda um valor ímpar, exiba a mensagem 'num é ímpar!', onde num é o próprio número. Por exemplo: '7 é ímpar!';
De olho na dica 👀 : Um número inteiro qualquer é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, ou seja, seu resultado é um número sem casas decimais. Caso contrário, esse número é ímpar.

Use a operação de módulo (%) para descobrir o resto de num / 2.

*/

let num = 22;
let mensagem1;
    if (num % 2 === 0) {
        mensagem1 = num + ' é par!';
    } else {
        mensagem1 = num + ' é impar!';
    };
console.log(mensagem1);

/*
Calcule a média 🧮
Crie um algoritmo que use duas notas, armazenadas nas variáveis nota1 e nota2, de uma pessoa estudante para calcular a média e utilize a variável resultado para exibir se a pessoa está ou não aprovada:

let nota1 = 8;
let nota2 = 6;
let media;
let resultado;

Calcule a media e salve na variável media;
Se a média calculada for maior ou igual a 7, o valor da variável resultado deve ser: 'Pessoa estudante aprovada';
Se a média calculada for menor que 7, o valor da variável resultado deve ser: 'Pessoa estudante reprovada'.

De olho na dica 👀 : A média de um conjunto de números é obtida somando todos os números desse conjunto e dividindo o resultado dessa soma pela quantidade existente de números. Por exemplo, caso as notas sejam 6 e 7:

Some as duas notas: 6 + 7 = 13;
Como temos duas notas, dividimos o resultado da soma por 2: let media = 13/2 = 6.5;
Você pode fazer: let media = (nota1 + nota2) / 2.
*/

let nota1 = 8;
let nota2 = 6;
let media;
let resultado;

media = (nota1 + nota2) / 2
    if (media >= 7) {
        resultado = 'A média do aluno é ' + media + ' sendo assim, essa média é igual ou superior a média de aprovação. Aluno aprovado!';
    } else {
        resultado = 'A média do aluno é ' + media + ' sendo assim, essa média é menor que a média de aprovação. Aluno reprovado!';
    };
console.log(resultado);

/*
Valide as informações de login 🧑‍💻
Crie um algoritmo de validação de login usando as seguintes informações:

let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;

Se o valor de usuario for igual a 'tryber' e se o valor de senha for igual a 'tr1b3', a variável autenticacao deve receber a mensagem 'Autenticação válida!'. Se não, a variável autenticacao deve mostrar a mensagem 'Login e/ou senha incorretos'.

*/

let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;

    if (autenticacao = usuario === 'tryber' && senha === 'tr1b3') {
        autenticacao = 'Autenticação válidada!';
    } else {
        autenticacao = 'login e/ou senha incorretos!';
    };
console.log(autenticacao);

/*
Encontre a pessoa mais velha 👵
Julia e Erick estão aprendendo a programar em JavaScript pela Trybe. Juntos eles querem construir um algoritmo capaz de informar, no console, qual dos dois é mais velho. Ajude-os a elaborar esse algoritmo com as seguintes condições:

a. Se o valor da variável idadeJulia for maior que o valor da variável idadeErick:

Atribua à variável verificaIdadePessoas a string 'Julia é mais velha que Erick';
b. Caso a condição anterior seja falsa:

Verifique se o valor da variável idadeErick é maior que o valor da variável idadeJulia;
Atribua à variável verificaIdadePessoas a string 'Erick é mais velho que Julia'.
c. Se nenhuma das condições anteriores for verdadeira:

Atribua à variável verificaIdadePessoas a string 'Possuem a mesma idade';

Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';

*/

let idadeJulia = 18;
let idadeErick = 18;
let verificaIdadePessoas;
    if (idadeJulia > idadeErick) {
        verificaIdadePessoas = 'A Júlia é mais velha que Erick, pois ela tem ' + idadeJulia + ' anos e o Erick tem apenas ' + idadeErick + ' anos';
    } else if (idadeErick > idadeJulia) {
        verificaIdadePessoas = 'O Erick é mais velho que Júlia, pois ele tem ' + idadeErick + ' anos e a Júlia tem apenas ' + idadeJulia + ' anos';
    } else {
        verificaIdadePessoas = 'Ambos tem a mesma idade, que é ' + idadeErick + ' anos'; //coloquei uma variavel de idade, pois não irá interferir diretamente nesse ponto. 
    };
console.log (verificaIdadePessoas);

/*
Encontre a classe do personagem 🧙‍♀️
Imagine que em uma partida de RPG (Role-playing game) você deve jogar um dado de 20 lados (D20) para determinar a classe de um personagem, ou seja, de acordo com o número sorteado pelo dado uma classe será escolhida. Considere as regras a seguir:

Número menor que 4 = Guerreiro(a);
Número maior ou igual a 4 e menor que 8 = Ladino(a);
Número maior ou igual a 8 e menor que 12 = Curandeiro(a);
Número maior ou igual a 12 e menor que 16 = Arqueiro(a);
Número maior ou igual a 16 = Feiticeiro(a);
Crie um algoritmo que informa a classe escolhida de acordo com o número sorteado pelo dado de 20 lados e atribua o resultado na variável resultado.

Use condicionais para salvar a classe correta na variável classe;

A mensagem na variável resultado deve ser como essa: 'Sua classe é: Arqueiro(a)'.

Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

let dadoNumero = 16;
let classe = '';
let resultado = '';

*/

let dadoNumero = 14;
let classe = '';
let resultado1 = '';

    if (dadoNumero < 4) {
        classe = 'Guerreiro(a)';
    } else if (dadoNumero >= 4 && dadoNumero < 8) {
        classe = 'Ladino(a)';
    } else if (dadoNumero >= 8 && dadoNumero < 12) {
        classe = 'Curandeiro(a)';
    } else if (dadoNumero >= 12 && dadoNumero < 16) {
        classe = 'Arqueiro(a)';
    } else if (dadoNumero >= 16) {
        classe = 'Feiticeiro(a)';
    };
resultado1 = classe;
console.log ('Sua classe é ' + classe);