import { useState } from "react"

const mensajes = ["primero", "segundo", "tercero", "cuarto", "quinto"]

export function Mensajes() {
  const [indice, setIndice] = useState(0)

  return (
    <>
      <p>Mensaje: {mensajes[indice]}</p>
      {/*
      <p>
        {indice === 0 ? "inicio" : indice === mensajes.length - 1 ? "fin" : "medio"}
      </p>
       */}
      {/*
      {indice === 0 && <p>inicio</p>}
      {indice > 0 && indice < mensajes.length - 1 && <p>medio</p>}
      {indice === mensajes.length - 1 && <p>fin</p>}
       */}
      {indice === 0 ? (
        <p>inicio</p>
      ) : indice === mensajes.length - 1 ? (
        <p>fin</p>
      ) : (
        <p>medio</p>
      )}
      <button
        onClick={() =>
          indice === mensajes.length - 1 ? setIndice(0) : setIndice(indice + 1)
        }
      >
        +
      </button>
      <button
        onClick={() =>
          indice === 0 ? setIndice(mensajes.length - 1) : setIndice(indice - 1)
        }
      >
        -
      </button>
    </>
  )
}
