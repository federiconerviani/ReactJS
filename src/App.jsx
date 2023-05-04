import estiloApp from "./App.module.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let saludo = "¡Bienvenidos al Valhalla!";
  let año = 2023;
  return (
    <div className={estiloApp.App}>
      <div>
        <Navbar />
        <ItemListContainer saludo={saludo} año={año} />
      </div>
    </div>
  );
}

export default App;
