// Closures

function saludar() {
  const mensaje = "hola";

  function hola() {
    return mensaje;
  }
  console.log(hola());
}

saludar();

{
  const mensaje = "saludo";
  console.log(mensaje);
}
//console.log(mensaje);
