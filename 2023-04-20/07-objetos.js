let punto = {
  x: 34,
  y: 34,
  hijo: {
    z1: 1,
    z2: 2,
  },
}

//punto = { x: 1, y: 2 }

if (punto) {
  console.log(punto.x)
  if (punto.hijo) {
    console.log(punto.hijo.z1)
  }
}

console.log(punto?.x)
console.log(punto?.hijo?.z1)
