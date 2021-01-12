import React,{createContext,useContext,useState,useEffect, } from 'react'
/*import api from '../Services'*/
import {getProducts} from '../fakeServer/server'


const CartContext = createContext();


 const CartProvider = ({children}) => {
    const[showShoppingCart, setShowShoppingCart] = useState(false)
    const [productList, setProductList] = useState([])
    const [totalPrice ,setTotalPrice] = useState(0);

    

/*
    useEffect(() => {
       const fetchProductList = () =>{
        api.get('/products').then(response => setProductList(response.data));
       }
       fetchProductList()  
         
    },[])
     
*/

    
    useEffect( ()=>{
        const fetchData = () =>{
            const response = getProducts('/products')
            setProductList(response)
        }
        fetchData();
    },[])

   
    useEffect(()=>{
        const renderOnEveryProductListChange = ()=>{
            let total = [...productList].reduce((acc,elem) => acc + (elem.price * elem.quantity),0)
        
            setTotalPrice(total)
           }
        renderOnEveryProductListChange(); 
        
    },[productList])

    

    return(
        <CartContext.Provider
            value={
                {
                    showShoppingCart, setShowShoppingCart,
                    productList, setProductList,
                    totalPrice ,setTotalPrice,
                    
                }
                
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

export function useTotalPrice(){
    const context = useContext(CartContext);
    if(!context) throw new Error('TotalPrice must be used within CartProvider');
    const { totalPrice, setTotalPrice} = context;
    

      return {totalPrice, setTotalPrice};
}



