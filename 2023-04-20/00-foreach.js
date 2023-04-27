// forEach
// map
// find
// some
// filter
// reduce

const arreglo = [3, 4, 3, 2];

// con funcion comun
function fn(item) {
  console.log(item);
}
arreglo.forEach(fn);

// con funcion anonima
arreglo.forEach(function (item) {
  console.log(item);
});

// con funcion flecha
arreglo.forEach((item) => console.log(item));

// con funcion flecha con indice
arreglo.forEach((item, i) => console.log(i));
