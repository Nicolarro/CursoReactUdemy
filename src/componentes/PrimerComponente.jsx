import React from "react";
import {productos} from "./listadoProductos";

const PrimerComponente = () => {

  
  const listado = productos.map((item) => {
     return <h2>{item.producto}</h2>;


  });




  return (
    <div>
      <h2>Hola Mundo</h2>
      <p>Este va a ser nuestro titulo</p>
      <div>Productos: {listado}</div>
    </div>
  );
};


let listado1 = "Probando";

const concatenado = `La formula es ${listado1}`;

console.log(concatenado)

export default PrimerComponente;


