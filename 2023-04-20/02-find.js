const arreglo = [9, 3, 24, 5, 6, -1, -3, 0];

// const valor = arreglo.find((item) => item < 0)

const valor = arreglo.find((item) => {
  console.count("visitas");
  return item < 0;
});

console.log(valor);
