// Eventos

// Sincrona: Detiene la hasta que llega una respuesta
// Asincrona:
//    callback:
//    promesas:

import { readFileSync } from "node:fs"

const contenido = readFileSync("./archivo.txt")
console.log(contenido.toString())
