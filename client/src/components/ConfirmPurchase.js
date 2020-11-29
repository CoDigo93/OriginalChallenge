import React from 'react'
import sandals from '../assets/sandals2.svg'
import {Link} from 'react-router-dom'


const ConfirmPurchase = ({onClose }) => {
    return (
        <div id='modal'>
            <div className='confirm-purchase'>
                <h3>PRODUTO ADICIONADO COM SUCESSO!</h3>
                <button onClick={onClose} className='modal__button--close'/>
                <img src ={sandals} alt='purchase' />
                <button className='modal__button--confirm'>FINALIZAR COMPRA</button>
                <Link onClick={onClose} id='link' to='/'>Continuar Comprando</Link>
            </div>
        </div>
    )
}

export default ConfirmPurchase;