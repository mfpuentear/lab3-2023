export function Eventos() {
  // Funcion que se ejecuta cuando sucede el evento
  const saludar = (mensaje) => {
    console.log(mensaje)
  }

  return (
    <>
      {/* comentario */}
      <button onClick={() => console.log("hola")}>Hola</button>
      <button onClick={() => saludar("otro mensaje")}>Otro mensaje</button>
    </>
  )
}
