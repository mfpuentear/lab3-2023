const punto = {
  x: 34,
  y: 12,

  suma() {
    return this.x + this.y
  },

  suma2: function () {
    return this.x + this.y
  },

  // No usar
  suma3: () => {
    return this.x + this.y
  },
}

console.log(punto.suma())
console.log(punto.suma2())
console.log(punto.suma3())
