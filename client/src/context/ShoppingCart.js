import React,{createContext,useContext,useState} from 'react'

const CartContext = createContext();

 const CartProvider = ({children}) => {
    const[showShoppingCart, setShowShoppingCart] = useState(false)

    return(
        <CartContext.Provider
            value={{showShoppingCart,setShowShoppingCart}}
        >
            {children}
        </CartContext.Provider>    
    );
}
export default CartProvider;



export function useShoppingCart(){
    const context = useContext(CartContext);
    if(!context) throw new Error('useShoppingCart must be used within CartProvider');
    const {showShoppingCart, setShowShoppingCart} = context;
    return {showShoppingCart,setShowShoppingCart};
}