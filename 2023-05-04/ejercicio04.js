const colores = [
  "verde",
  "azul",
  "rojo",
  "amarillo",
  "azul",
  "rojo",
  "verde",
  "azul",
]

// reduce
const contador = colores.reduce((obj, color) => {
  if (!obj[color]) {
    obj[color] = 1
  } else {
    obj[color] = obj[color] + 1
  }
  return obj
}, {})

console.log(contador)
