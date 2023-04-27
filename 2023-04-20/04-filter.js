const arreglo = [-2, 3, 4, -5, 1, -3, 2, 5, 0, 0];

const negativos = arreglo.filter((item) => item < 0);
const positivos = arreglo.filter((item) => item > 0);
const ceros = arreglo.filter((item) => item === 0);
const pares = arreglo.filter((item) => item % 2 === 0);
const impares = arreglo.filter((item) => item % 2 !== 0);

console.log(negativos);
console.log(positivos);
console.log(ceros);
console.log(pares);
console.log(impares);
