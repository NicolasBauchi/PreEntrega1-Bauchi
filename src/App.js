import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Carro } from "./Containers/CartView/Carro"
import { ElProvider } from './components/Context/ContextApp';

function App() {
  const mensaje = "Bienvenidos !!";
  return (
    <>
      <BrowserRouter>
        <ElProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={mensaje} />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carro />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>
        </ElProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
