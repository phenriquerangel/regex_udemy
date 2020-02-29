const texto =`1,2,3,4,5,6,a.b c!d?e[f   -
    f_g`
console.log(texto.match(/\d/g)) // numérico
console.log(texto.match(/\D/g)) // não numérico

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // Tudo que não for caracteres [a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // tudo que é espaço em branco
console.log(texto.match(/\S/g)) // tudo que não é espaço em branco


