const { size } = require('lodash'); //Desestruturalização
const somar = require('./somar'); //Puxando o outro arquivo. (Teria como fazer pela desestruturalização também).

console.log(somar.calculaSoma([1, 2, 3]));

console.log(lodash.size([1, 2, 2, 5]));