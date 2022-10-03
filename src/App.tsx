import React, { SetStateAction, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Products from './components/Products';

import { CartProvider } from './context/cartContext';
// import { useCart } from './context/cartContext';
import History from './components/History';
const App : React.FC = () => {

  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </CartProvider>
  );
}

export default App;
