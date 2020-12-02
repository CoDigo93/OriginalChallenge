import React, {useState} from 'react'
import sandals from '../assets/sandals2.svg'
import {Link} from 'react-router-dom'
import ShoppingCart from './ShoppingCart'


const ConfirmPurchase = ({onClose }) => {
    const [showShoppingCart, setShowShoppingCart] = useState(false)

    function onConfirm(){
        setShowShoppingCart(true);
        
    }

    return (
        <>
        <div id='modal'>
            {(!showShoppingCart) ? 
            
            <div className='confirm-purchase'>
                <h3>PRODUTO ADICIONADO COM SUCESSO!</h3>
                <button onClick={onClose} className='modal__button--close'/>
                <img src ={sandals} alt='purchase' />
                <button onClick={onConfirm} className='modal__button--confirm'>FINALIZAR COMPRA</button>
                <Link onClick={onClose} id='link' to='/'>Continuar Comprando</Link>
            </div> 
            : <ShoppingCart /> }

        </div>
        </>
    )
}

export default ConfirmPurchase;