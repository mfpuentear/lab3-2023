import { readFile } from "node:fs"

readFile("./archivo.txt", (err, data) => {
  if (err) {
    console.error("Se produjo un error: ")
    throw err
  }
  console.log(data.toString())
})
console.log("Fin del programa")
