console.log('Hello world!');

let umaCor=('vermelho');
console.log(umaCor);

let cidade=('Parauapebas');
console.log(cidade);

cidade=('Rio de Janeiro');
console.log(cidade);

const meuNome =('Andrei Cardozo');
console.log(meuNome);

let minhaIdade=('19');
console.log(minhaIdade);

//-----------------------------------------------------------------------------

// o seguinte codigo retorna erro

//  const email =('email@trybe.com');
//  email = ('outroemail@trybe.com');

// ele retorna erro pois a variavel está declarada como constante, e constante não se muda!

// caso queira mudar o valor da variavel, deveria ser declarado como let ou var e usar o seguinte codigo:

// nesse primeiro codigo, ele ira criar a variavel email e ira escrever ele em seguida, 
// é bom caso queira prosseguir com a mesma declaração adiante: 

let email =('email@trybe.com');
console.log(email);

// agora para esse segundo codigo, ele ira pegar a variavel email e ira substituir o antigo valor,
// para um novo valor

email =('novoemail@trybe.com');
console.log(email);


//-----------------------------------------------------------------------------
let nome = 'Tryber';
let idade = 19;
let aprovado = true;

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof aprovado); // boolean

//o valor typeof retorna qual é o tipo de função de cada variavel que foi escrita, seja ela, string, number, boolean, etc...
// Qualquer valor será do tipo string se for escrito entre aspas.

// Em certas situações, precisamos lidar no código com variáveis que ainda não sabemos o valor que ela vai 
// receber. Para isso, existe o valor null, que faz com que a variável tenha um valor nulo.

// como por exemplo:
let valorNulo = null;
console.log(valorNulo);
// o terminal não leu, pois ele não tem oq ler.

// mais exemplos de string, boolean, number, object e undefined

let tipoTexto   =  ('Aqui é uma string');
let tipoNumero  = (20);
let cadastroAtivo   =   true;
let habilitado  = false;
let tipoNulo = null;
let tipoIndefinido;


console.log(typeof tipoTexto);
console.log(typeof tipoNumero);
console.log(typeof cadastroAtivo);
console.log(typeof habilitado);
console.log(typeof tipoNulo);
console.log(typeof tipoIndefinido);

// Corrija os valores

// No código abaixo, os valores das variáveis estão trocados. 
// Faça com que cada variável possua seu valor correto sem atribuir 
// nenhum valor novo além dos que já estão no código.

// let nome = true;
// let idade = 'Harry Potter';
// let souUmBruxo = 210;

nome = ('Harry Potter');
idade = 210;
souUmBruxo = true;

console.log(nome);
console.log(idade);
console.log(souUmBruxo);