import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {

  let saludo = "Bienvenidos al Valhalla";


  return (
    <div className="App">
        <Navbar />
        <ItemListContainer saludo={saludo}/>
        </div>
  );
}

export default App;
