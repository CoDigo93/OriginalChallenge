import React,{useReducer} from 'react'
import sandals from '../assets/sandals2.svg'
import {useProductList} from '../context/ShoppingCart'
import CounterReducer from '../context/reducers/CounterReducer'
import {IncrementQuantity, DecrementQuantity} from '../context/actions/CounterActions'
 






const ProductItem = ({id, price, onDelete, quantity, name}) =>{
    
const {productList, setProductList} = useProductList()    
    
    const initialState ={
        productQuantity:quantity,
        wholeSalePrice:price,
        price:price,
        
        
    }

    
  
    const [stateCounter, dispatch] = useReducer(CounterReducer,initialState)
    
    const {productQuantity, wholeSalePrice} = stateCounter  
   

  
    const Increment = id => {
        dispatch(IncrementQuantity())
        updateQuantityOnListElement()
        
        
    }
    

    const Decrement = id =>{
        let newProductList = [...productList]
        let foundIndex = newProductList.findIndex(product => product.id === id)
        
        if(newProductList[foundIndex].quantity > 1){
            dispatch(DecrementQuantity())
            newProductList[foundIndex].quantity = productQuantity - 1
            setProductList(newProductList)
        
        }
            
        
    }

    const updateQuantityOnListElement = () =>{
        let newProductList = [...productList]
        let foundIndex = newProductList.findIndex(product => product.id === id)
        
            newProductList[foundIndex].quantity = productQuantity + 1
      
        
        
        setProductList(newProductList)
    }
  return(
        
        <>
        

        <li key={id}>
            <div className='shoppingCart__info-product'>
                <img src={sandals} alt='shopping'/>
                <p>{name}</p>
                <span>R${wholeSalePrice.toLocaleString('pt-BR', { 
                                        minimumFractionDigits: 2,  
                                        maximumFractionDigits: 2})}
                </span>
            </div>
            
            <div className='shoppingCart__counter'>
                <button onClick={()=>Decrement(id)}>-</button>
                <span>{productQuantity < 10 ? '0' + productQuantity : productQuantity}</span>
                <button onClick={()=>Increment(id)}>+</button>
                <button onClick={()=> onDelete(id)} className='shoppingCart__delete-product'></button>
            </div>
            
        </li>
        
        </>
        
    )
}

export default ProductItem;