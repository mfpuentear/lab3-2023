const arreglo = [1, 2, 3]
const arreglo2 = [2, 6, 9]
const arreglo3 = [...arreglo, ...arreglo2]

//console.log(...arreglo)
//console.log(1, 2, 3)

function mostrar(a, b, c) {
  console.log("a:", a)
  console.log("b:", b)
  console.log("c:", c)
}

mostrar(arreglo)
mostrar(...arreglo)
console.log(arreglo3)
console.log("---")

const punto = { x: 1, y: 8 }
console.log("punto:", punto)

const punto2 = { x: 9, ...punto }
console.log("punto2", punto2)

const punto3 = punto

punto.x = 2
console.log("punto:", punto)
console.log("punto2:", punto2)
console.log("punto3:", punto3)
