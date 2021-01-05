import React,{useState,useEffect} from 'react'
import sandals from '../assets/sandals2.svg'
import {useTotalPrice} from '../context/ShoppingCart'

const ProductItem = (props) =>{
    const [quantity , setquantity] = useState(props.quantity);
    const [wholeSalePrice] = useState(props.price) 
    const { setTotalPrice} = useTotalPrice();
    const [incrementWasCalled , setIncrementWasCalled ] = useState(false)
    const [decrementWasCalled, setDecrementWasCalled] = useState(false)
    


    useEffect(()=>{
        const subtractFromDecrement = () => {
            console.log('subtractFromDecrement called')
            setTotalPrice(previusTotal  => 
    
                parseInt(previusTotal) - parseInt(props.price)
                )
        }

        subtractFromDecrement();
           
    },[decrementWasCalled, setTotalPrice, props.price])



    useEffect(()=>{
        
        const sumFromIncrement = () => {
            console.log('sumFromIncrement called')
            setTotalPrice(previusTotal  => 

                parseInt(previusTotal) + parseInt(props.price)
                )
            }

        sumFromIncrement()
        
    },[incrementWasCalled, setTotalPrice, props.price])


    

    const Increment = () =>{
        setquantity(quantity + 1);
        setIncrementWasCalled(!incrementWasCalled)
        
    }

    const Decrement = () =>{
        if(quantity > 0){
            setquantity(quantity - 1);
            setDecrementWasCalled(!decrementWasCalled)
        }
         
    }

    return(
        <>
        <li key={props.id}>
            <div className='shoppingCart__info-product'>
                <img src={sandals} alt='shopping'/>
                <p>{props.name}</p>
                <span>R${wholeSalePrice.toLocaleString('pt-BR', { 
                                        minimumFractionDigits: 2,  
                                        maximumFractionDigits: 2})}
                </span>
            </div>
            
            <div className='shoppingCart__counter'>
                <button onClick={Decrement}>-</button>
                <span>{quantity < 10 ? '0' + quantity : quantity}</span>
                <button onClick={Increment}>+</button>
            </div>
        </li>
        </>
    )
}

export default ProductItem;