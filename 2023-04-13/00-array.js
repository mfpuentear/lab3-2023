const arreglo = [2, 3, 4, 5];

console.log(arreglo);

console.log(arreglo[3]);
arreglo[3] = 19;
console.log(arreglo[3]);

// Agregar elemento al final
arreglo.push(4);
console.log(arreglo);

// Quitar elemento al final
arreglo.pop();
console.log(arreglo);

// Agregar elemento al principio
arreglo.unshift(-1);
console.log(arreglo);

// Quitar elemento al principio
arreglo.shift();
console.log(arreglo);

// Quitar elemento del medio (indice, cantidad a quitar)
arreglo.splice(2, 1);
console.log(arreglo);

// Agregar elementos en el medio (indice, cantidad a quitar, elementos a agregar)
arreglo.splice(2, 0, 8);
console.log(arreglo);
