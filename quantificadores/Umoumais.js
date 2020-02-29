const texto1 = ' De longe eu avistei o fogo uma pessoa gritando : FOGOOO!'
const texto2 = 'There is a big fog in NYC'

// + representa 1 ou mais recorrencias do mesmo caractere

const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os numeros: 0123456789'
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))