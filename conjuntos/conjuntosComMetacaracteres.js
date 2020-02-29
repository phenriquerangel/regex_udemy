const texto ='.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // isso é um intervalod (range)


// NÃO é um intervalo (range) ..

console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// podem precisar de escape dentro do conjunto : - [ ] ^ 