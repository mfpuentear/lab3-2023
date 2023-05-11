import colors from "colors"
import os from "node:os"
import prettyBytes from "pretty-bytes"
import { suma, resta } from "./aritmetica.js"

console.log("hello".green) // outputs green text
console.log("i like cake and pies".underline.red) // outputs red underlined text
console.log("inverse the color".inverse) // inverses the color
console.log("OMG Rainbows!".rainbow) // rainbow
console.log("Run the trap".zebra) // Drops the bass

console.log(os.freemem())
console.log(prettyBytes(os.freemem()))
console.log(prettyBytes(os.freemem(), { binary: true }))

console.log(suma(1, 2))
console.log(resta(1, 2))
