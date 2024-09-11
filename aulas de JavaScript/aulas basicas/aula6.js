/*
Uma loja de produtos pediu que você criasse um sistema para que as pessoas colaboradoras da loja pudessem cadastrar e acessar os produtos. Para acessar esse sistema, a pessoa deve inserir nome, cargo e senha de acesso para cadastro de produto.

Algumas pessoas terão permissões de acesso diferentes umas das outras, dependendo do cargo que essa pessoa ocupa na loja:

A gerente da loja pode ter acesso para cadastrar produtos no sistema somente se utilizar uma senha de acesso, caso contrário, só pode visualizar os produtos;

A pessoa responsável pela venda dos produtos na loja só possui acesso para a visualização dos produtos.

A administração da loja enviou a você as informações das pessoas colaboradoras: Sheila é a gerente da loja e possui senha de acesso para cadastrar produtos, e Jorge é o vendedor.
*/
let nome = 'Sheila';
let cargo = 'gerência';
let senhaDeAcesso = 'Senha!123#';

if (nome === 'Sheila' && cargo === 'gerência') {
  if (senhaDeAcesso = 'Senha!123#') {
    console.log('Acesso para cadastro de produtos liberada!');
  }
  console.log('Acesso para a visualização de produtos liberada!');
} else if (nome === 'Jorge' && cargo === 'vendas') {
  console.log('Acesso para a visualização de produtos liberada!');
} else {
  console.log('Você não possui acesso!');
}