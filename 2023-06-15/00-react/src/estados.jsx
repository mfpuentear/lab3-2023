import { useState } from "react"

export function Estados() {
  // hook de estados
  const [mensaje, setMensaje] = useState("Saludo")
  const [texto, setTexto] = useState("Texto")

  function modificar() {
    setMensaje("Otro mensaje")
  }

  return (
    <>
      <p>{mensaje + texto}</p>
      <button onClick={modificar}>Cambiar saludos</button>
      <button onClick={() => setTexto("hola")}>Cambiar texto</button>
    </>
  )
}
