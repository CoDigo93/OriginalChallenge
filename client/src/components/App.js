import React from 'react'
import Routes from '../Routes';
import CartContextProvider from '../context/ShoppingCart';

const App = () => {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>  
    
  );
}

export default App;
