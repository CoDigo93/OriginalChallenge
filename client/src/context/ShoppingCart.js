import React,{createContext,useContext,useState,useEffect} from 'react'
import api from '../Services'
const CartContext = createContext();

 const CartProvider = ({children}) => {
    const[showShoppingCart, setShowShoppingCart] = useState(false)
    const [productList, setProductList] = useState([])


    useEffect(() => {
        
        api.get('/products').then(response => setProductList(response.data));
        
       
       
   },[])

    return(
        <CartContext.Provider
            value={
                {showShoppingCart,setShowShoppingCart,productList,setProductList}
                
        }
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

export function useProductList(){
    const context = useContext(CartContext);
    if(!context) throw new Error('useProductList must be used within CartProvider');
    const {productList, setProductList} = context;
    return {productList, setProductList};
}

export function TotalPrice(){
    const context = useContext(CartContext);
    const {productList} = context;
    let total = productList.reduce((acc,elem) => acc + elem.price,0)

    return total.toLocaleString('pt-BR', {
        
        minimumFractionDigits: 2,  
        maximumFractionDigits: 2
      })
}