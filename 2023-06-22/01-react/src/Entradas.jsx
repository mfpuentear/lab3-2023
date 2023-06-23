import { useState } from "react"

export function Entradas() {
  const [texto, setTexto] = useState("Texto")

  return (
    <>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>{texto}</p>
    </>
  )
}
