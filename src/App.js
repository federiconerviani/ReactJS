import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  let saludo = "Bienvenidos al Valhalla"; //El saludo se borró en clase

  return (
    //El saludo se borró en clase
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
