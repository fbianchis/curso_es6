// Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) { return item + 10;
// });
const arr = [1, 2, 3, 4, 5];
const arrF = arr.map(item =>  item + 10 );
console.log(arrF);
// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) { return usuario.idade;
// }
// mostraIdade(usuario);
const usuario = { nome: 'Diego', idade: 23 };
const user = {nome: 'Felipe', idade: 53};
const mostraIdade = (usuario) => (usuario.idade);
console.log(mostraIdade(user));
// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego"; const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) { return { nome, idade };
// }
const nome = "Diego"; 
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 23) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
// // 3.4
// const promise = function() {
// return new Promise(function(resolve, reject) {
// return resolve();
// }) }
const promise = () => new Promise ((resolve, reject) => resolve(alert("teste"))); 

promise();