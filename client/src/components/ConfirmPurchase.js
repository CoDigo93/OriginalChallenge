import React from 'react'
import sandals from '../assets/sandals2.svg'
import {Link} from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import {useShoppingCart} from '../context/ShoppingCart'

const ConfirmPurchase = ({onClose }) => {
    const {showShoppingCart, setShowShoppingCart} = useShoppingCart()

    function onConfirm(){
        setShowShoppingCart(true);
        
    }

    return (
        <>

        {(!showShoppingCart) ? 
        <div id='modal'>
                
            <div className='confirm-purchase'>
                <h3>PRODUTO ADICIONADO COM SUCESSO!</h3>
                <button onClick={onClose} className='modal__button--close'/>
                <img src ={sandals} alt='purchase' />
                <button onClick={onConfirm} className='modal__button--confirm'>FINALIZAR COMPRA</button>
                <Link onClick={onClose} id='link' to='/'>Continuar Comprando</Link>
            </div> 
        </div>
        
        : <ShoppingCart /> }
        
        </>
    )
}

export default ConfirmPurchase;