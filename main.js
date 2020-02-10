const usuario =
{
    nome: "Felipe",
    idade: 23,
    endereco : {
        cidade: "Pato Branco",
        estado: "PR",

    },

};

function mostaNome({nome, idade})
{
    console.log(nome, idade);
}

mostaNome(usuario);