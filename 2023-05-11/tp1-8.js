// Ejercicio 8

// Entrada:
const productos = [
  { nombre: "Producto 1", precio: 20, categoria: "electronica" },
  { nombre: "Producto 2", precio: 30, categoria: "ropa" },
  { nombre: "Producto 3", precio: 40, categoria: "electronica" },
  { nombre: "Producto 4", precio: 50, categoria: "ropa" },
  { nombre: "Producto 5", precio: 60, categoria: "ropa" },
  { nombre: "Producto 6", precio: 70, categoria: "electronica" },
  { nombre: "Producto 7", precio: 80, categoria: "ropa" },
  { nombre: "Producto 8", precio: 90, categoria: "electronica" },
]

// a)
const productosPorCategorias = productos.reduce((obj, producto) => {
  const categoria = producto.categoria
  if (!obj[categoria]) {
    obj[categoria] = []
  }
  obj[categoria].push({ nombre: producto.nombre, precio: producto.precio })
  return obj
}, {})

// b)
const promedios = Object.keys(productosPorCategorias).map((categoria) => {
  // calcular promedio con reduce
  const promedio =
    productosPorCategorias[categoria].reduce(
      (acc, producto) => acc + producto.precio,
      0
    ) / productosPorCategorias[categoria].length

  // retornar objeto con categoria y promedio
  return { categoria, promedio }
})

console.log(promedios)
