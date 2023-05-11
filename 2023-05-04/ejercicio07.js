const estudiantes = [
  { nombre: "matias", notas: [60, 45, 80] },
  { nombre: "pepe", notas: [90, 34, 23] },
  { nombre: "jesus", notas: [98, 100] },
]

const promedios = estudiantes
  .map((estudiante) => {
    const promedio =
      estudiante.notas.reduce((acc, nota) => acc + nota, 0) / estudiante.notas.length
    return { nombre: estudiante.nombre, promedio }
  })
  .filter((estudiante) => estudiante.promedio > 80)

console.log(promedios)
