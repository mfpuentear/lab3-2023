import { useState } from "react"

function App() {
  const [frutas, setFrutas] = useState([
    "Manzana",
    "Naranja",
    "Pera",
    "Banana",
    "Uva",
  ])
  const [nuevaFruta, setNuevaFruta] = useState("")
  const [indiceSel, setIndiceSel] = useState(-1)

  return (
    <>
      <input value={nuevaFruta} onChange={(e) => setNuevaFruta(e.target.value)} />
      {indiceSel === -1 ? (
        <button
          disabled={frutas.length === 10}
          onClick={() => {
            setFrutas([...frutas, nuevaFruta])
            setNuevaFruta("")
          }}
        >
          Agregar
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setFrutas(
                frutas.map((fruta, index) =>
                  index === indiceSel ? nuevaFruta : fruta
                )
              )
              setNuevaFruta("")
              setIndiceSel(-1)
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              if (confirm("¿Desea quitar fruta?")) {
                setFrutas(frutas.filter((_, i) => i !== indiceSel))
              }
              setNuevaFruta("")
              setIndiceSel(-1)
            }}
          >
            Eliminar
          </button>
          <button
            onClick={() => {
              setNuevaFruta("")
              setIndiceSel(-1)
            }}
          >
            Cancelar
          </button>
        </>
      )}
      <ol>
        {frutas.map((fruta, index) => (
          <li key={index}>
            <div
              onClick={() => {
                setNuevaFruta(fruta)
                setIndiceSel(index)
              }}
            >
              {fruta}
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App
