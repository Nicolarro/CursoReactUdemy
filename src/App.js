import logo from './logo.svg';
import './App.css';


class Producto {
  constructor(nombre,tipo) {
    this.nombre= nombre;
    this.tipo = tipo;
  }


}
const cafe = new Producto ("Cafe", "Premium")

alert(cafe)

function App() {


  return (
    <div className="App">

    </div>
  );
}

export default App;
