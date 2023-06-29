import { useState } from "react"

function App() {
  const [personas, setPersonas] = useState([
    { id: 1, nombre: "pepe", apellido: "sanchez", edad: 20 },
    { id: 2, nombre: "Jose", apellido: "Perez", edad: 30 },
  ])

  const [maxId, setMaxId] = useState(2)
  /*
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState(0)
  */
  const [nuevaPersona, setNuevaPersona] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
  })

  const [filtro, setFiltro] = useState("")
  const [personasFiltradas, setPersonasFiltradas] = useState([])

  return (
    <>
      <label htmlFor="nombre">Nombre</label>
      {/*
      <input
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
       */}
      <input
        name="nombre"
        value={nuevaPersona.nombre}
        onChange={(e) =>
          setNuevaPersona({ ...nuevaPersona, nombre: e.target.value })
        }
      />
      <label htmlFor="apellido">Apellido</label>
      {/*
      <input
        name="apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
       */}
      <input
        name="apellido"
        value={nuevaPersona.apellido}
        onChange={(e) =>
          setNuevaPersona({ ...nuevaPersona, apellido: e.target.value })
        }
      />
      <label htmlFor="edad">Edad</label>
      {/*
      <input
        name="edad"
        type="number"
        value={edad}
        onChange={(e) => setEdad(+e.target.value)}
      />
       */}
      <input
        name="edad"
        type="number"
        value={nuevaPersona.edad}
        onChange={(e) => setNuevaPersona({ ...nuevaPersona, edad: +e.target.value })}
      />
      <button
        onClick={() => {
          setPersonas([...personas, { id: maxId + 1, ...nuevaPersona }])
          setMaxId(maxId + 1)
          /*
          setNombre("")
          setApellido("")
          setEdad(0)
          */
          setNuevaPersona({ nombre: "", apellido: "", edad: 0 })
        }}
      >
        Agregar
      </button>
      <div>
        <label htmlFor="filtro">Filtro</label>
        <input
          name="filtro"
          value={filtro}
          onChange={(e) => {
            const nuevoFiltro = e.target.value
            setFiltro(nuevoFiltro)
            setPersonasFiltradas(
              personas.filter(
                (persona) =>
                  persona.nombre.includes(nuevoFiltro) ||
                  persona.apellido.includes(nuevoFiltro)
              )
            )
          }}
        />
      </div>
      <ul>
        {personasFiltradas.map((persona) => (
          <li key={persona.id}>
            {persona.id}) {persona.apellido}, {persona.nombre}, {persona.edad}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
