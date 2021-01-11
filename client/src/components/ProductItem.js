import React,{useState,useEffect,useCallback} from 'react'
import sandals from '../assets/sandals2.svg'
import {useTotalPrice} from '../context/ShoppingCart'



const ProductItem = ({id, price, onDelete, quantity, name}) =>{
    const [productQuantity , setquantity] = useState(quantity);
    const [wholeSalePrice, setWholeSalePrice] = useState(price) 
    const { setTotalPrice, totalPrice} = useTotalPrice();
    const [incrementWasCalled , setIncrementWasCalled ] = useState(false)
    const [decrementWasCalled, setDecrementWasCalled] = useState(false)
   

  
   
    const sumWholeSalePrice = useCallback(() =>{
        
            setWholeSalePrice(previous => previous + price)

    
    },[price])

    const subtractWholeSalePrice = useCallback(() =>{
        
            setWholeSalePrice(previous => previous - price)
    
    },[price])


    
    useEffect(()=>{
        const calcTotalAfterDecrement = () => {
            console.log('subtractFromDecrement called')
            setTotalPrice(
    
                parseFloat( totalPrice) - parseFloat(price)
                )
                
        }

        calcTotalAfterDecrement();
        
           
    },[decrementWasCalled, setTotalPrice, price, totalPrice])



    useEffect(()=>{
        
        const calcTotalAfterIncrement = () => {
            console.log('sumFromIncrement called')
            setTotalPrice(previusTotal  => 

                parseFloat(previusTotal) + parseFloat(price)
                )
                
            }

            calcTotalAfterIncrement()
        
        
    },[incrementWasCalled, setTotalPrice, price])




    

    const Increment = () =>{
        setquantity(productQuantity + 1);
        sumWholeSalePrice();
        setIncrementWasCalled(!incrementWasCalled)
        
        
    }

    const Decrement = () =>{
        if(productQuantity > 1){
            setquantity(productQuantity - 1);
            subtractWholeSalePrice();
            setDecrementWasCalled(!decrementWasCalled)
            
        }
         
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
                <button onClick={Decrement}>-</button>
                <span>{productQuantity < 10 ? '0' + productQuantity : productQuantity}</span>
                <button onClick={Increment}>+</button>
                <button onClick={()=> onDelete(id)} className='shoppingCart__delete-product'></button>
            </div>
            
        </li>
        </>
    )
}

export default ProductItem;