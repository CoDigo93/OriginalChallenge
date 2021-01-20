import React,{useCallback} from 'react'
import {useProductList} from '../context/ShoppingCart'
import ProductItem from './ProductItem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const ProductList = () =>{
    const {productList, setProductList} = useProductList();
    
    

  
    const deleteProduct = useCallback(id =>{
        let newProductList = productList.filter(elem => elem.id !== id)
        setProductList(newProductList); 
  },[setProductList,productList])




    return(
        
        <TransitionGroup component={null}>
        {productList.map((product, index) => 
                <CSSTransition key={product.id}
                
                timeout={1000} 
                classNames='transition'
                appear={true}
                unMountOnExit>
                <ProductItem key={`product_List_${product.id}`}
                            id={product.id}
                            name={product.name}
                            color={product.color}
                            price={product.price}
                            quantity={product.quantity}
                            onDelete={id => deleteProduct(id)}
                            />
            
                </CSSTransition>
            )}
        </TransitionGroup>    
        
    )
    
}

export default ProductList;