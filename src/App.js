import { useEffect } from 'react';
import './App.css';
import PrimerComponente from './componentes/PrimerComponente';
import heroes from './data';


function App() {
  

   const busqueda = (id) => heroes.find( (element)=> element.id === id)
  

/*  const busqueda2 = (owner) => heroes.filter( (element) =>element.owner === owner)

  console.log(busqueda2("DC")) */
  


/*  const usandoPromesas = new Promise((resolve, reject) => {

setTimeout( () => {

 const heroe = busqueda(2);

 resolve(heroe)

console.log(heroe)

}, 2000)

})

 .then((resolve) => {

console.log("esperar 2 segundos")


})


 .catch ((err) =>{

  return console.error("error en la promesa")
 
}  ) */


/* ASYNC */

const busquedaAsync = (id) => {

return  new Promise((resolve, reject) => {

  setTimeout(() => {

    const heroe = busqueda(id);

    if(heroe){
      resolve(heroe)
    }
    else{
      reject("no se encontro el heroe")
    }

  }, 2000);


})
  
}

busquedaAsync(4).then( (heroe) => {

  console.log ("se cumple la promesa", heroe)          

})

busquedaAsync(4).catch (() => {

console.error("")

})

  return (

    <div className="">

    <h1> Curso Udemy</h1>
    <p>Probando</p>
    <PrimerComponente/>

    </div>
  );

  }


export default App;
