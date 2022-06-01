import React from "react";
import {useState } from "react";



const listadoProductos = {producto,tipo,precio} = [

    {producto: "Cafe", tipo: "Premium", precio: "10"},
    {producto: "Helado", tipo: "Regular", precio: "5"},

]

const PrimerComponente = (props) => {

    const  [lista,setLista] = useState(listadoProductos)

    
    detalle = listadoProductos.map((producto,i) => {
        return (
        <h2>"El Producto es: " {listadoProductos.producto}</h2>
        )
    
    }


return(

    <div>
        <h2>Seccion 1</h2>
        <p>Este va a ser nuestro inicio</p>
        <img src="../../public/logo192.png" alt= ""></img>
        

    </div>
)

}

export default PrimerComponente

