import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from "../src/Containers/ItemListContainer"

function App() {
  return (
    <>
      <Navbar nombreUsuario={"Nicolas"}></Navbar>
      <ItemListContainer greeting={"mensaje de ejemplo greeting"} mensaje="termine la pre entrega nro 1"></ItemListContainer>
    </>
  );
}

export default App;
