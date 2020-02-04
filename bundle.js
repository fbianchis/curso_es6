"use strict";

// let -> altera os valores dentro do esocopo da função
// const -> não deixa receber um nova atribuição
function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
