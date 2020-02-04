// let -> altera os valores dentro do esocopo da função
// const -> não deixa receber um nova atribuição

function teste (x)
{
    let y = 2;
    if (x > 5)
    {
        let y = 4;
        console.log(x, y);
    }
}

teste(10);