const colors = require("colors")
const os = require("os")
//const prettyBytes = require("pretty-bytes")

console.log("hello".green) // outputs green text
console.log("i like cake and pies".underline.red) // outputs red underlined text
console.log("inverse the color".inverse) // inverses the color
console.log("OMG Rainbows!".rainbow) // rainbow
console.log("Run the trap".zebra) // Drops the bass

console.log(os.freemem())
