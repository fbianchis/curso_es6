// Exercícios: Módulo 03
// Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
// babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.
// Exercício
// Transforme os seguintes trechos de código utilizando async/await:
// // Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//  delay().then(() => {
//  console.log('1s');
//  delay().then(() => {
//  console.log('2s');
//  delay().then(() => {
//  console.log('3s');
//  });
//  })
//  });
// }
// umPorSegundo();
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() 
{
    let resposta = await delay();
    console.log('1s');
    resposta = await delay();
    console.log('2s');
    resposta = await delay();
    console.log('3s');
}
//umPorSegundo();


//exer2 

// import axios from 'axios';
// function getUserFromGithub(user) {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Usuário não existe');
//  })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

import axios from 'axios';
async function getUserFromGithub(user) 
{
    try
    {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch (err)
    {
        console.log('Usuário não existe');
    }
}
//getUserFromGithub('fbianchis');
//getUserFromGithub('diego3g124123');


// exer 3
// class Github {
//  static getRepositories(repo) {
//  axios.get(`https://api.github.com/repos/${repo}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Repositório não existe');
//  })
//  }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

class Github 
{
    static async getRepositories(repo) 
    {
        try
        {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch (err)
        {
            console.log('Repositório não existe');
        }
    }
}
//Github.getRepositories('rocketseat/rocketseat.com.br');
//Github.getRepositories('rocketseat/dslkvmskv');


// exer4
// const buscaUsuario = usuario => {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Usuário não existe');
//  });
// }
// buscaUsuario('diego3g');

const buscaUsuario = async(user) => 
{
    try
    {
        const resp = await axios.get(`https://api.github.com/users/${user}`);
        console.log(resp.data);
    }
    catch (err)
    {
        console.log('Usuário não existe');
    }
    
}
buscaUsuario('diego3g');