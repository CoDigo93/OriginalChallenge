import React from 'react'
import sandals from '../assets/sandals2.svg'
import bolsas from '../assets/bolsas.svg'
import {useShoppingCart} from '../context/ShoppingCart'
import {CSSTransition} from 'react-transition-group';

const ShoppingCart = () => {
    const {showShoppingCart,setShowShoppingCart} = useShoppingCart()
    

    function toggleShoppingCartOnScreen(){
        setShowShoppingCart(!showShoppingCart)
    }

    return (
    
    <CSSTransition in={showShoppingCart} 
                    appear={true}
                    timeout={400} 
                    classNames='inverse-slide'>

        <div className='modal__shoppingCart'>
    
        <div className='shoppingCart'>
            <button onClick={()=> toggleShoppingCartOnScreen()} className='modal__button--close'/>       
                <header className='shoppingCart__header'>  
                        <span>SACOLA</span>
                        <span>5 itens</span>
                    </header>
                    <div  className='shoppingCart__items'>
                    <ul>
                        <li>
                            <div className='shoppingCart__info-product'>
                                <img src={sandals} alt='shopping'/>
                                <p>Rasteira Tira Dedo</p>
                                <span>R$49,90</span>
                            </div>
                            
                            <div className='shoppingCart__counter'>
                                <span>-</span>
                                <span>01</span>
                                <span>+</span>
                            </div>
                        </li>
                        <li>
                            <div className='shoppingCart__info-product'>
                                <img src={bolsas} alt='shopping'/>
                                <p>Bolsa Tressê Rolotê</p>
                                <span>R$29,90</span>
                            </div>
                            
                            <div className='shoppingCart__counter'>
                                <span>-</span>
                                <span>01</span>
                                <span>+</span>
                            </div>
                        </li>
                    </ul>

                </div>
                <footer className='shoppingCart__footer'>
                    <div className='shoppingCart__footer--top'>
                        <p>Faltam R$ xx,xx para você Ganhar Frete Grátis</p>
                    </div>
                    
                    <div className='shoppingCart__footer--bottom'>
                        <span>Total: R$ 149,00</span>
                        <button>FINALIZAR COMPRA</button>
                        <p>até 3x de R$49,00 sem juros</p>
                                
                    </div>
                    
                </footer>
                
            </div>
            
        </div>
        </CSSTransition>
    )
}

export default ShoppingCart;