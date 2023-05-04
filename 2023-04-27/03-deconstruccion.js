const punto = { x: 1, y: 5, z: 0 }
const y = 2

let { x, y: y2 } = punto

console.log(punto)
console.log(x)
console.log(y)
console.log(y2)

x = 10
punto.x = 9
console.log(punto)
console.log(x)
console.log(y)
console.log(y2)
