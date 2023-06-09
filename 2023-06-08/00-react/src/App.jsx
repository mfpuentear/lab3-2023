function Titulo(props) {
  const { titulo, subtitulo } = props

  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </>
  )
}

function Texto({ mensaje }) {
  return <p>{mensaje}</p>
}

function App() {
  let titulo = "Hola mundo!"

  const func = (a, b) => {
    return a * b
  }

  return (
    <>
      <Titulo titulo={titulo} subtitulo="Subtitulo" />
      <Texto mensaje="un mensaje" />
      <Texto mensaje="otro mensaje" />
      <Texto mensaje="uno mas" />
      <Texto mensaje={1 + 1} />
      <Texto mensaje={func(5, 7) == 30 ? "vale 30" : "no vale 30"} />
      <button onClick={() => console.log(titulo)}>Saludar</button>
    </>
  )
}

export default App
