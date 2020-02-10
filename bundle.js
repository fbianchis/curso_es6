"use strict";

var usuario = {
  nome: "Felipe",
  idade: 23,
  endereco: {
    cidade: "Pato Branco",
    estado: "PR"
  }
};

function mostaNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostaNome(usuario);
