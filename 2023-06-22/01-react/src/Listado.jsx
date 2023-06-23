export function Listado() {
  const frutas = ["Manzana", "Naranja", "Pera", "Banana", "Uva"]

  return (
    <ul>
      {frutas.map((fruta, i) => (
        <li key={i}>{fruta}</li>
      ))}
    </ul>
  )
}
