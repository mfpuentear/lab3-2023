const suma = function (a, b) {
  return a + b;
};

console.log(suma(2, 3));

const a = true;

let valor;

if (a == true) {
  valor = function () {
    return "verdadero";
  };
} else {
  valor = function () {
    return "falso";
  };
}

console.log(valor());
