import React,{useState} from 'react'
import sandals from '../assets/sandals2.svg'
import {useShoppingCart, useProductList, TotalPrice} from '../context/ShoppingCart'
import {CSSTransition} from 'react-transition-group'
import ProductList from './ProductList'
import ProductItem from './ProductItem'



const ShoppingCart = () => {
    const {showShoppingCart,setShowShoppingCart} = useShoppingCart()
    const {productList, setProductList} = useProductList()
    const [count, setCount] = useState(0)
    const total = TotalPrice();
    

    const Decrement = () => {
        setCount(count-1)
    }


    const Increment = () => {
        setCount(count+1)
    }


    const toggleShoppingCartOnScreen = () =>{
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
                        <span>{productList.length} itens</span>
                    </header>
                    <div  className='shoppingCart__items'>
                    <ul>
                        <ProductList/>
                           
                    </ul>

                </div>
                <footer className='shoppingCart__footer'>
                    <div className='shoppingCart__footer--top'>
                        <p>Faltam R$ xx,xx para você Ganhar Frete Grátis</p>
                    </div>
                    
                    <div className='shoppingCart__footer--bottom'>
                        <span>Total: R$ {total}</span>
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