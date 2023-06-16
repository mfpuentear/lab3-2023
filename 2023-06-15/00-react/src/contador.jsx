import { useState } from "react"

export function Contador() {
  const [cuenta, setCuenta] = useState(0)

  return (
    <>
      <p>Contador: {cuenta}</p>
      {/* Modificar 'cuenta' directamente asignando un valor */}
      <button onClick={() => setCuenta(cuenta + 1)}>+</button>
      <button onClick={() => setCuenta(cuenta - 1)}>-</button>
      {/* 
      Modificar 'cuenta' a traves de una funcion flecha que recibe
      el valor de 'cuenta' en el parametro 'c'
      */}
      <button onClick={() => setCuenta((c) => c + 2)}>++</button>
      <button onClick={() => setCuenta((c) => c - 2)}>--</button>
    </>
  )
}
