import logo from './logo.svg';
import './App.css';
import PrimerComponente from './componentes/PrimerComponente';


class Producto {
  constructor(nombre,tipo) {
    this.nombre= nombre;
    this.tipo = tipo;
  }

  leerProducto (nombre,tipo) {

    const listado = [nombre,tipo]
    console.log(listado)
    }

  }
  

const cafe = new Producto ("Cafe", "Premium")

console.log(cafe)


function App() {


  return (
    <>
    <div className="App">
      <PrimerComponente/>
    <h1> Titulo App</h1>
    <p> Probando el texto </p>

    </div>
    </>
  );
}

export default App;

