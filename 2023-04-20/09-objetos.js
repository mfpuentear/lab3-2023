const punto = {
  x: 1,
  y: 4,

  get valor() {
    return this.x + this.y
  },

  set valor(nuevoValor) {
    this.x = nuevoValor * 2
    this.y = nuevoValor * 3
  },
}

// Llamar al get
console.log(punto.valor)

// Llamar al set
punto.valor = 4

// Mostrar punto
console.log(punto)
