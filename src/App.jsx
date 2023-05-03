import estiloApp from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

let saludo = "Hola que tal?";
let edad = 23;
function App() {
  return (
    <div className={estiloApp.App}>
      <div>
        <Navbar saludo={saludo} edad={edad} />
      </div>
      <h1>Hola</h1>
    </div>
  );
}

export default App;
