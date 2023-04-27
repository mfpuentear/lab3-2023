const arreglo = [9, 3, 24, 5, 6, -1, -3, 0];

const valor = arreglo.some((item) => item < 0);
console.log(valor);

let valor2 = false;
for (item of arreglo) {
  if (item < 0) {
    valor2 = true;
    break;
  }
}
console.log(valor2);
