import { accessSync } from "node:fs"

try {
  accessSync("./archivo2.txt")
  console.log("archivo2.txt si existe")
} catch (err) {
  console.error("archivo2.txt no existe")
}
