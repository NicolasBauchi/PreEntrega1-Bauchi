import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from "../src/Containers/ItemListContainer"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
    </>
  );
}

export default App;
