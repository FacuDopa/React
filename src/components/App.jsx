import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './contacto/Contacto';
import { BotonDarkMode } from './NavBar/BotonDarkMode/BotonDarkMode';
import { Cart } from './Cart/Cart';


// import { getProducts } from '../firebase/firebase';
// import { cargarBDD } from '../firebase/firebase';
// import { updateProduct, deleteProduct } from '../firebase/firebase'; 
// import { deleteProduct } from '../firebase/firebase';

//Contexto
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoPorvider } from '../context/CarritoContext';

function App() {

  // updateProduct()
  // deleteProduct()
  // getProducts()
  // cargarBDD()

  return (
    <>
    <BrowserRouter>
      <CarritoPorvider>
        <DarkModeProvider>
          <NavBar/>
          <BotonDarkMode/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </DarkModeProvider>
      </CarritoPorvider>
    </BrowserRouter>
    </>
  )
}

export default App;
