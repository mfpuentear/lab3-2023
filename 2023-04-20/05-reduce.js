const arreglo = [2, 4, -9, 3, -2, -1, 5]

/*
const suma = arreglo.reduce((previo, item, i) => {
  console.log("indice", i);
  console.log("previo", previo);
  console.log("item", item);
  console.log("---");
  return previo + item;
}, 0);
*/

const suma = arreglo.reduce((previo, item) => previo + item, 0)
console.log('suma:', suma)

const multiplicacion = arreglo.reduce((previo, item) => previo * item, 1)
console.log('multiplicacion:', multiplicacion)

/*
const cantidad_positivos = arreglo.reduce((previo, item) => {
  if (item > 0) {
    return previo + 1;
  }
  return previo;
}, 0);
*/

const positivos = arreglo.reduce((previo, item) => (item > 0 ? previo + 1 : previo), 0)
console.log(positivos)
