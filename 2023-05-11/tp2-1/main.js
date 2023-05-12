import operacion, { restar, multiplicar, dividir } from "./aritmetica.js"
import OS from "node:os"

console.log(operacion(5, 2))
console.log(restar(5, 2))
console.log(multiplicar(5, 2))
console.log(dividir(5, 2))
console.log(OS.cpus()[0].model)
