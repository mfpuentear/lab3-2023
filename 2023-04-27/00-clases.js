class Punto {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  mostrar() {
    console.log(`x: ${this.x}, y: ${this.y}`)
  }

  get distancia() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  set distancia(value) {
    this.x = (Math.sqrt(2) * value) / 2
    this.y = (Math.sqrt(2) * value) / 2
  }
}

const punto = new Punto(3, 5)
punto.mostrar()
punto.x = -10
punto.y = 9
punto.mostrar()
console.log(punto.distancia)
punto.distancia = 10
punto.mostrar()
