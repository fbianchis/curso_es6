const usuarios = 
[
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }, 
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idades = usuarios.map(item => item.idade );
console.log(idades);

//2.2
const filtros = usuarios.filter (usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18);
console.log(filtros);

//2.3
const encontrar =  usuarios.find (usuario => usuario.empresa === 'Google' );
console.log(encontrar);

//2.4
const multiplicacao = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);
console.log(multiplicacao);