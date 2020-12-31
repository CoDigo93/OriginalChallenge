import React,{useState} from 'react'
import sandals from '../assets/sandals2.svg'

const ProductItem = (props) =>{
    const [quantity = props.quantity, setquantity] = useState(0);

    const Increment = () =>{
        setquantity(quantity + 1);
    }

    const Decrement = () =>{
        if(quantity > 0)
        setquantity(quantity - 1);
    }

    return(
        <>
        <li key={props.id}>
            <div className='shoppingCart__info-product'>
                <img src={sandals} alt='shopping'/>
                <p>{props.name}</p>
                <span>R${props.price.toLocaleString('pt-BR', { 
                                        minimumFractionDigits: 2,  
                                        maximumFractionDigits: 2})}
                </span>
            </div>
            
            <div className='shoppingCart__counter'>
                <button onClick={Decrement}>-</button>
                <span>0{quantity}</span>
                <button onClick={Increment}>+</button>
            </div>
        </li>
        </>
    )
}

export default ProductItem;