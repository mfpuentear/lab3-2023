import { useState } from "react"

function App() {
  const [frutas, setFrutas] = useState([
    "Manzana",
    "Naranja",
    "Pera",
    "Banana",
    "Uva",
  ])
  const [nuevaFruta, setNuevaFruta] = useState("hola")

  return (
    <>
      <input value={nuevaFruta} onChange={(e) => setNuevaFruta(e.target.value)} />
      <button
        disabled={frutas.length === 10}
        onClick={() => {
          setFrutas([...frutas, nuevaFruta])
          setNuevaFruta("")
        }}
      >
        Agregar
      </button>
      <ol>
        {frutas.map((fruta, index) => (
          <li key={index}>
            {fruta}
            <button onClick={() => setFrutas(frutas.filter((_, i) => index !== i))}>
              X
            </button>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App
