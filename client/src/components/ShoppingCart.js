import React, { useEffect, useState, useCallback } from 'react'
import {useShoppingCart, useProductList, useTotalPrice} from '../context/ShoppingCart'
import {CSSTransition} from 'react-transition-group'
import ProductList from './ProductList'




const ShoppingCart = () => {
    const {showShoppingCart,setShowShoppingCart} = useShoppingCart()
    const {productList} = useProductList()
    const {totalPrice, setTotalPrice} = useTotalPrice();
    const [parceledPrice, setParceledPrice] = useState(totalPrice)
   
    
   

    const parcelPrice = useCallback(() => {
        setParceledPrice(parseFloat(totalPrice)/ parseFloat(3)) 
        setParceledPrice(previusPrice => previusPrice.toLocaleString('pt-BR', {
        
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2
          }))

          
    },[totalPrice])


    useEffect(() => {
        setTotalPrice(totalPrice)
        parcelPrice();
        
    },[totalPrice, setTotalPrice, parcelPrice])

    


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
                        <span>Total: R$ {totalPrice.toLocaleString('pt-BR', {
        
        minimumFractionDigits: 2,  
        maximumFractionDigits: 2
      })}</span>
                        <button>FINALIZAR COMPRA</button>
                        <p>até 3x de {parceledPrice} sem juros</p>
                                
                    </div>
                    
                </footer>
                
            </div>
            
        </div>
        </CSSTransition>
    )
}

export default ShoppingCart;