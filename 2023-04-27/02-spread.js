const punto = { x: 3, y: 9 }
const punto2 = { y: 1, z: 0 }
const punto3 = { ...punto, ...punto2 }

console.log("punto:", punto)
console.log("punto2:", punto2)
console.log("punto3:", punto3)

function fn(...valores) {
  console.log(valores)
}

fn()
fn(1)
fn(1, 4)

function fn2(a, b, ...resto) {
  console.log("a:", a)
  console.log("b:", b)
  console.log("resto:", resto)
}

fn2(1, 3)
fn2(1, 3, 5)
fn2(1, 3, 5, 1, 6, 2, "hola")
