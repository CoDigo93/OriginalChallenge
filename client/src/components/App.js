import React from 'react'
import Routes from '../Routes';
import CartContextProvider from '../context/ShoppingCart';
import MobileSideNavbarProvider from '../context/MobileSideNavbar'
const App = () => {
  return (
    <CartContextProvider>
      <MobileSideNavbarProvider>
      <Routes />
      </MobileSideNavbarProvider>
    </CartContextProvider>  
    
  );
}

export default App;
