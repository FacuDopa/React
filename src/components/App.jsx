import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './contacto/Contacto';
import { BotonDarkMode } from './NavBar/BotonDarkMode/BotonDarkMode';
import { Cart } from './Cart/Cart';

//Contexto
import { DarkModeProvider } from '../context/DarkModeContext';

function App() {
  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
    </>
  )
}

export default App;
