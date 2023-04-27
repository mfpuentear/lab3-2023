const punto = {
  x: 2,
  y: 3,
  "z": 5,
  "año": 2023,
  "año nacimiento": 1890,
  "😀️": 34
}

console.log(punto.x)
punto.x = 10
console.log(punto.x)

console.log(punto["y"])
console.log(punto["año nacimiento"])

console.log(punto["😀️"])