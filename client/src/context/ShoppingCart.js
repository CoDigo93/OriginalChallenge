import React,{createContext,useContext,useState,useEffect } from 'react'
/*import api from '../Services'*/
import {getProducts} from '../fakeServer/server'




const CartContext = createContext();


 const CartProvider = ({children}) => {
     
    const[showShoppingCart, setShowShoppingCart] = useState(false)
    const [productList, setProductList] = useState([])
    const [total, setTotal] = useState(0)


    useEffect( ()=>{
        const fetchProductList = async () =>{
            try{
                const response = await getProducts('/products')
                setProductList(response)

            }catch(err){
                throw new Error(err)
            }
            
        }
        fetchProductList();
        console.log('tem que chegar primeiro')
    },[])

    

    
    return(
        <CartContext.Provider
            value={
                {
                    showShoppingCart, setShowShoppingCart,
                    productList, setProductList,
                    total, setTotal
                    
                    
                    
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
    const { total, setTotal} = context;
    

      return {total, setTotal}; 
}



