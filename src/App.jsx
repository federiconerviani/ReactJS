import estiloApp from "./App.module.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={estiloApp.App}>
      <div>
        <Navbar />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
