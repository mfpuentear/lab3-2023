import { access, appendFile } from "node:fs"

access("./archivo3.txt", (err) => {
  if (err) {
    console.log("El archivo no existe")
  } else {
    console.log("El archivo si existe")
    appendFile("./archivo3.txt", "nueva linea\n", (err) => {
      if (err) throw err
      console.log("Se agrego linea al archivo")
    })
    console.log("Luego de pedir agregar linea")
  }
})
console.log("Fin del programa")
