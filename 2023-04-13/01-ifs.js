const a = 2;

let mensaje1 = "";
if (a % 2 == 0) {
  mensaje1 = "es par";
} else {
  mensaje1 = "es impar";
}
console.log(mensaje1);

if (a > 0) {
  console.log("es positivo");
} else if (a < 0) {
  console.log("es negativo");
} else {
  console.log("es cero");
}

// operador condicional
const mensaje = a % 2 == 0 ? "es par" : "es impar";
console.log(mensaje);
