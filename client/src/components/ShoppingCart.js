import React, { useEffect, useState, useReducer } from 'react'
import {useShoppingCart, useProductList, useTotalPrice} from '../context/ShoppingCart'
import {CSSTransition} from 'react-transition-group'
import ProductList from './ProductList'
import GetTotalReducer from '../context/reducers/GetTotalReducer'




const ShoppingCart = () => {

    const {total, setTotal} = useTotalPrice()
    const {showShoppingCart,setShowShoppingCart} = useShoppingCart()
    const {productList} = useProductList()

    const getTotal = () =>{
        const total = productList.reduce((acc, product) =>
        acc + (parseFloat(product.price) * parseFloat(product.quantity)),0)

        setTotal(total)
        return total
    }

    const initialState = {
        List:productList,
        totalPrice:getTotal()
        
    }
    const [state ,dispatch] = useReducer(GetTotalReducer,initialState);
    

    const {totalPrice} = state
   
    const [parceledPrice, setParceledPrice] = useState(totalPrice)


    useEffect(() => {
        const parcelPrice = () =>{
            setParceledPrice(parseFloat(total) / parseFloat(3)) 
            setParceledPrice(previusPrice => previusPrice.toLocaleString('pt-BR', {
            
                minimumFractionDigits: 2,  
                maximumFractionDigits: 2
            }))

        }
        parcelPrice();
        
    },[total])

    


    const toggleShoppingCartOnScreen = () =>{
        dispatch({type:'GET_TOTAL'})
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
                        <span>Total: R$ {total.toLocaleString('pt-BR', {
        
        minimumFractionDigits: 2,  
        maximumFractionDigits: 2
      })}</span>
                        <button>FINALIZAR COMPRA</button>
                        <p>até 3x de {parceledPrice.toLocaleString('pt-BR', {
        
        minimumFractionDigits: 2,  
        maximumFractionDigits: 2
      })} sem juros</p>
                                
                    </div>
                    
                </footer>
                
            </div>
            
        </div>
        </CSSTransition>
    )
}

export default ShoppingCart;