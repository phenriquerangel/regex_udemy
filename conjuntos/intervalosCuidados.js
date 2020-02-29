const texto = 'ABC [abc] a-c 1234'


console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não define um range

console.log(texto.match(/[A-z]/g)) // intervalos usam a ordem da tabela UNICODE

console.log(texto.match(/[Z-a]/g))

// tem que respeitar a ordem da tabela Unicode
// console.log(texto.match(/[4-1]/g))
// console.log(texto.match(/[z-A]/g))