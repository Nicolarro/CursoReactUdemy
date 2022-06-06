import React from "react";

export const productos =

  [
    {
      stock: 50,
      producto: "Leche", // nombre del producto
      descripcion: "saborizada descremada",
      precio: 250,
    },
  
    {
      stock: 40,
      producto: "Azucar", // nombre del producto
      descripcion: "premium",
      precio: 150,
    },
  
  ];



/* ARRAYS */


/* const arreglo = [1,2,3,4,5,6,7,8,9,10];

console.log(arreglo)

const arreglo1 = {...arreglo, 10:11}

console.log(arreglo1)


const arregloMap = arreglo.map(function (item) { 
  return `Tu numero es ${item *2}`;
})

console.log(arregloMap)
 */

/* ------------------------------------------ */

/* FUNCTIONS */


/* const saludar = function (nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar)

const saludar2 = (nombre) => { 
return {
        id: 1,
        username: nombre,
}
}

console.log(saludar2)

const usuario = saludar2("Nicolas")

console.log(usuario)

const getUsuarioActivo =  (nombre) => 

({
    uid:"1111",
    username: nombre,
})


console.log(getUsuarioActivo("Nicolas")) */


/* DESTRUCTURING  */
/* ------------------------------------------------------------- */

const persona = {
  nombre: "Nicolas",
  edad: 25,
  clave: "123",
  
}

 
/*   const {nombre, edad , clave } = persona  */


/* const usarContexto = ({nombre,edad,clave}) => {

return {

   primerdato: nombre ,
    segundoDato: edad,
    tercerDato: clave,
}
}

const retornalo = usarContexto(nombre)

console.log(retornalo)


const {primerdato,segundodato,tercerdato} = usarContexto()


console.log(primerdato) */

  
// DE ARRAYS

const cafes = ["espresso", "lavazza", "illy", "nescafe"]


const [espresso, lavazza, illy, nescafe] = cafes;

const agarrarlo = espresso

/* console.log(agarrarlo) */


const retornaArreglo = () => {
  return ["letra", 123]

}

const arreglo = retornaArreglo()

const [primero, numeros ] = arreglo

/* console.log(primero, numeros) */


const usarEstado = (valor) => {
   
  return [

          valor, () => {console.log("Hola Mundo")}

  ]
}


/* const [nombre, setNombre] = usarEstado(1)

console.log(nombre)
setNombre()
 */

/* --------------------------------------------------------------------- */


